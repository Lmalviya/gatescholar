const user = require('../../models/user.models.js');
const examModel = require('../../models/exam.models.js');
const quesModel = require('../../models/ques.models.js');

module.exports={
    info:(req,res)=>{
        var id=req.userData;
        user.findOne({email:id},(err,result)=>{
            if(err)
            res.json(err);
            else {
                res.json({
                    name:result.name,
                    image:result.profileImage
                })
            }
        })
    },
    overAllPerformance:(req,res)=>{
        var userid=req.userData;
        quesModel.find({userId:userid},(err,result)=>{
            if(err)
            res.json(error);
            else{
                var performance=[0,0,0,0,0,0,0,0,0,0,0,0];
                var score=[0,0,0,0,0,0,0,0,0,0,0,0],total=[0,0,0,0,0,0,0,0,0,0,0,0];
                for(let a of result){
                    var temp=a.examPositiveScore-a.examNegativeScore;
                    var i=total[a.examGivenDate.getMonth()];
                    score[i]=score[i]+temp;
                    total[i]=total[i]+a.examTotalScore;
                }
         
                for(let i=0;i<12;i++){
                    if(total[i])
                    performance[i]=score[i]/total[i]*100;
    
                }
                var month =['Jan', 'Feb','Mar', 'Apr','May','Jun','Jul','Aug','Sep','Oct', 'Nov', 'Dec' ];
                res.json({
                    month:month,
                    score:performance
                });
            }
        })
        
    },
    Top10StudentScore: (req, res) => {
        var info = req.userData;
        quesModel.find({ userId: info }, (err, result) => {
            if (err)
                res.json(err);
            else if (result) {
                var lis = [];
                for (let a of result) {
                    lis.push({
                        score: a.examPositiveScore - a.examNegativeScore,
                        examid: a.examId
                    })
                }
                lis.sort(function (b, c) {
                    return -1 * (b.score - c.score);
                })
                var scores = [];
                var examid = [];
                var arr = [];
                for (let i = 0; (i <= 9 && i < lis.length); i++) {
                    scores.push(lis[i].score);
                    examid.push(lis[i].examid);

                }
                res.json(
                    {
                        labels: examid,
                        data: scores
                    }

                );
            }
        })
    },
    givenExam:(req,res)=>{
        var userid=req.userData;

        user.findOne({email:userid},(err,result)=>{
            if(err)
            res.json(err);
            else{
                var i=0;
                for(let a of result.examsGiven)
                {
                    i++;
                }
                var givenExam=i;
                quesModel.find({userId:userid},(err,result2)=>{
                    if(err)
                    res.json(err)
                    else{
                         i=0; 
                         var bstScore=0,total=0,score=0;
                        for(let a of result2)
                        {
                            if(a.examStatus=='Fail')
                            i++;
                            var temp=a.examPositiveScore-a.examNegativeScore;
                            score=score+temp;
                            total=total+a.examTotalScore;
                            if(bstScore<(temp))
                            bstScore=temp;

                        }
                        var failExam=i;
                        if(total==0) total=1;
                        console.log(givenExam+failExam+bstScore+(score/total*100));
                        res.json({
                            givenExam:givenExam,
                            failExam:failExam,
                            bestScore:bstScore,
                            averagePercentage:(score/total*100)
                        })
                    }
                })
            }
        })
    },
    profile: (req, res) => {

        var info = req.userData;
        console.log(info);
        if (info) {
            user.findOne({ email: info }, (error, result) => {
               console.log(result);
                if (error)
                    res.json(error);
                else if (result) {
                   var date=(result.userCreateDate).toString().split(" ");
                    res.json({
                        userName: result.name,
                        email: result.email,
                        admissionDate: date[1]+'/'+date[2]+'/'+date[3],
                        profileImage:result.profileImage
                    })
                }
                else res.json('login again');
            })
        }
        else res.json('session timeout');


    },
    mytest: (req, res) => {

        var inf = req.userData;
        if (inf) {
            user.findOne({ email: inf }, (error, result) => {
                console.log(result);
                if (error)
                    res.json(error);
                
                else if (result) {
                    {
                        let alreadyAttemptExam = new Map();
                        const attemptExams = [];
                        for (let a of result.examsGiven)
                            attemptExams.push(a.examId);

                        for (let i = 0; i < attemptExams.length; i++) {
                            alreadyAttemptExam[attemptExams[i]] = 1;
                        }

                        examModel.find({}, (err2, res2) => {
                            
                            if (err2) {
                                return;
                            } else {
                                const totalExams = [];
                                for (let a of res2) {
                                    totalExams.push(a.examName);

                                }
                                let notAttemptExams = [];

                                for (let i = 0; i < totalExams.length; i++) {
                                    if (alreadyAttemptExam[totalExams[i]] !== 1) {
                                        notAttemptExams.push({
                                            id: res2[i].examName,
                                            type: res2[i].examType,
                                            testName: res2[i].examName,
                                            totalQuestion: res2[i].noOfQues,
                                            maxMarks: res2[i].maxMarks,
                                            time: res2[i].examTime
                                        });
                                    }
                                    else console.log("hii" + alreadyAttemptExam[totalExams[i]]);

                                }
                                res.status(201).json({
                                    messgae: "Exam Available",
                                    data: notAttemptExams
                                })
                            }
                        })

                    }


                }
                else res.json('login again');
            })
        }
        else res.json('session timeout');

    },
    bookmarks: (req, res) => {

        var info = req.body.info;
        if (info) {
            quesModel.find({ userId: info }, async (error, result) => {
                if (error)
                    res.json(error);
                else {
                    var bookmarkQues = [];

                    for (let a of result) {

                        for (let b of a.attemptQuesDetails) {

                            if (b.bookmarkStatus) {


                                await examModel.findOne({ examName: a.examId }, (error, result2) => {
                                    var result2Questions=[];
                                    for(let a of result2.questions.technical)
                                    result2Questions.push(a);
                                    for(let a of result2.questions.non_technical)
                                    result2Questions.push(a);
                             
                                    for (let c of result2Questions) {
                                        if (b.quesId === c.quesId) {
                                            bookmarkQues.push({
                                                testId: a.examId,
                                                testName: a.examName,
                                                ques:[c.ques],
                                                options: [{
                                                    A: c.quesOption.A,
                                                    B: c.quesOption.B,
                                                    C: c.quesOption.C,
                                                    D: c.quesOption.D
                                                }],
                                                rightAns:c.quesCorrectAnswer,
                                                solution: c.SolutionImage

                                            })
                                            break;
                                        }
                                    }
                                   
                                })

                            }
                        }
                    }
                    res.json(bookmarkQues);

                }
            })
        }

    }
}