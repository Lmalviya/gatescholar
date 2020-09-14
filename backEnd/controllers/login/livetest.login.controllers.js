const examModel = require('../../models/exam.models.js');
const user = require('../../models/user.models');
const quesModel = require('../../models/ques.models');

module.exports = {
    liveTestUpdate: (req, res) => {
        var test = req.body.test;
        console.log(req.body.testAttempted);
        if (req.body.testAttempted == false) {
            console.log(req.body.testAttempted, "second");
            var answered = 0;
            var notAnswered = 0;
            var notVisited = 0;
            var ansMarked = 0;
            var markForReview = 0;
            for (let a of test.technical) {

                if (a.currentStatus == "answered")
                    answered++;
                if (a.currentStatus == "notAnswered")
                    notAnswered++;
                if (a.currentStatus == "notVisited")
                    notVisited++;
                if (a.currentStatus == "ansMarked")
                    ansMarked++;
                if (a.currentStatus == "markForReview")
                    markForReview++;

            }
            for (let a of test.apti) {

                if (a.currentStatus == "answered")
                    answered++;
                if (a.currentStatus == "notAnswered")
                    notAnswered++;
                if (a.currentStatus == "notVisited")
                    notVisited++;
                if (a.currentStatus == "ansMarked")
                    ansMarked++;
                if (a.currentStatus == "markForReview")
                    markForReview++;

            }
            test.answered = answered;
            test.notAnswered = notAnswered;
            test.notVisited = notVisited;
            test.ansMarked = ansMarked;
            test.markForReview = markForReview;

           
            res.json(test);
        }
        else {
            // console.log(req.body.testAttempted, "from else part");
            console.log(test, "from else part");
            var ans = [], examid = test.examName;
            for (let a of test.apti)
                ans.push(a.chooseOption);
            for (let a of test.technical)
                ans.push(a.chooseOption);
            var info_id = req.userData;
            examModel.findOne({ examName: examid }, async (error, result) => {
                if (error)
                    res.json(error)
                else {
                    var questionsdone = []; let i = 1, pos = 0, neg = 0.0, left = 0, leftques = 0, rightans = 0, wrongans = 0, j = 0;
                    var resultQuestions = [];

                    for (let a of result.questions.non_technical)
                        resultQuestions.push(a);
                    for (let a of result.questions.technical)
                        resultQuestions.push(a);

                    for (let a of resultQuestions) {

                        var quesgiven;
                        if (ans[j] != "") {
                            quesgiven = true;
                            if (a.quesCorrectAnswer === ans[j]) { pos = pos + a.quesMarksPositive; rightans++; }
                            else {
                                neg = neg + a.quesMarksNegative;

                                wrongans++;
                            }

                        }
                        else { quesgiven = false; leftques++; left = left + a.quesMarksPositive; }
                        var book;
                        if (i % 2 == 0) book = true;
                        else book = false;
                        questionsdone.push({
                            quesId: a.quesId,
                            quesNumber: i,
                            optionChoose: ans[j],
                            optionCorrect: a.quesCorrectAnswer,
                            quesStatus: quesgiven,
                            bookmarkStatus: book
                        })
                        i++; j++;
                    }
                    var stat;
                    if ((pos - neg) >= 50) stat = 'Pass';
                    else stat = 'Fail';

                    var ques = {
                        examId: examid,
                        userId: info_id,
                        examName: result.examName,
                        examType: result.examType,
                        examStatus: stat,
                        examQuesWrong: wrongans,
                        examQuesCorrect: rightans,
                        examQuesLeft: leftques,
                        examPositiveScore: pos,
                        examNegativeScore: neg,
                        examLeftScore: left,
                        examTotalScore: result.maxMarks,
                        examGivenDate: Date.now(),
                        timeTaken: result.examTime-req.body.myTime,
                        totalTime: result.examTime,
                        attemptQuesDetails: questionsdone
                    }
                    await quesModel.create(ques, async (error, res1) => {
                        if (error)
                            res.json(error);
                        else {

                            var top = result.top10Score;
                            var total = result.totalStudents + 1;

                            if (result.top10Score.length < 10) {
                                top.push({
                                    userId: info_id,
                                    score: (pos - neg)
                                });
                                top.sort();
                            }
                            else if (top[0].score < (pos - neg)) {

                                top[0] = {
                                    userId: info_id,
                                    score: (pos - neg)
                                };
                                top.sort();


                            }
                            await examModel.findOneAndUpdate({ examName: result.examName }, { top10Score: top, totalStudents: total }, async (error, res2) => {
                                if (error)
                                    res.json(error);
                                else
                                    await user.findOne({ email: info_id }, async (err, res3) => {
                                        if (err)
                                            res.json(err);
                                        else {
                                            var givenexam = [];

                                            givenexam = res3.examsGiven;
                                            givenexam.push({ examId: result.examName });
                                            console.log(givenexam);
                                            console.log(result.examName);
                                            await user.findOneAndUpdate({ email: info_id }, { examsGiven: givenexam }, (err, res4) => {
                                                if (err)
                                                    res.json(err)
                                                else {
                                                    res.json('test updated in ques, exam and user model');
                                                }
                                            })
                                        }
                                    })
                            })
                        }
                    })

                }
            });
        }
    },
    testUpdate: function (req, res) {

        {
            var info_id = req.userData;
            examModel.findOne({ examName: examid }, async (error, result) => {
                if (error)
                    res.json(error)
                else {
                    var questionsdone = []; let i = 1, pos = 0, neg = 0.0, left = 0, leftques = 0, rightans = 0, wrongans = 0, j = 0;
                    var resultQuestions = [];

                    for (let a of result.questions.non_technical)
                        resultQuestions.push(a);
                    for (let a of result.questions.technical)
                        resultQuestions.push(a);

                    for (let a of resultQuestions) {

                        var quesgiven;
                        if (ans[j] != null) {
                            quesgiven = true;
                            if (a.quesCorrectAnswer === ans[j]) { pos = pos + a.quesMarksPositive; rightans++; }
                            else {
                                neg = neg + a.quesMarksNegative;

                                wrongans++;
                            }

                        }
                        else { quesgiven = false; leftques++; left = left + a.quesMarksPositive; }
                        var book;
                        if (i % 2 == 0) book = true;
                        else book = false;
                        questionsdone.push({
                            quesId: a.quesId,
                            quesNumber: i,
                            optionChoose: ans[j],
                            optionCorrect: a.quesCorrectAnswer,
                            quesStatus: quesgiven,
                            bookmarkStatus: book
                        })
                        i++; j++;
                    }
                    var stat;
                    if ((pos - neg) >= 50) stat = 'Pass';
                    else stat = 'Fail';

                    var ques = {
                        examId: examid,
                        userId: info_id,
                        examName: result.examName,
                        examType: result.examType,
                        examStatus: stat,
                        examQuesWrong: wrongans,
                        examQuesCorrect: rightans,
                        examQuesLeft: leftques,
                        examPositiveScore: pos,
                        examNegativeScore: neg,
                        examLeftScore: left,
                        examTotalScore: result.maxMarks,
                        examGivenDate: Date.now(),
                        timeTaken: parseInt(timetaken),
                        totalTime: result.examTime,
                        attemptQuesDetails: questionsdone
                    }
                    await quesModel.create(ques, async (error, res1) => {
                        if (error)
                            res.json(error);
                        else {

                            var top = result.top10Score;
                            var total = result.totalStudents + 1;

                            if (result.top10Score.length < 10) {
                                top.push({
                                    userId: info_id,
                                    score: (pos - neg)
                                });
                                top.sort();
                            }
                            else if (top[0].score < (pos - neg)) {

                                top[0] = {
                                    userId: info_id,
                                    score: (pos - neg)
                                };
                                top.sort();


                            }
                            await examModel.findOneAndUpdate({ examName: result.examName }, { top10Score: top, totalStudents: total }, async (error, res2) => {
                                if (error)
                                    res.json(error);
                                else
                                    await user.findOne({ email: info_id }, async (err, res3) => {
                                        if (err)
                                            res.json(err);
                                        else {
                                            var givenexam = [];

                                            givenexam = res3.examsGiven;
                                            givenexam.push({ examId: result.examName });
                                            await user.findOneAndUpdate({ email: info_id }, { examsGiven: givenexam }, (err, res4) => {
                                                if (err)
                                                    res.json(err)
                                                else {

                                                    res.json('test updated in ques, exam and user model');
                                                }
                                            })
                                        }
                                    })
                            })
                        }
                    })

                }
            });


        }



    }
}