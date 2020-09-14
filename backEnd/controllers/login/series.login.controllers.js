const user = require('../../models/user.models.js');
const examModel = require('../../models/exam.models.js');
const quesModel = require('../../models/ques.models.js');


module.exports = {

    result: function (req, res) {

        {
            var info_id = req.body.info;
            quesModel.find({ userId: info_id }, (error, results) => {
                if (error)
                    res.json(error)
                else {

                    var examResults = [];
                    for (let result of results)
                        examResults.push({
                            id: result.examId,
                            type: result.examType,
                            testName: result.examName,
                            attemptQ: result.examQuesWrong + result.examQuesCorrect,
                            rightQ: result.examQuesCorrect,
                            wrongQ: result.examQuesWrong,
                            yourM: result.examPositiveScore - result.examNegativeScore,
                            negativeM: result.examNegativeScore
                        });
                    res.json(examResults);

                }
            })
        }

    },
    Top10StudentsCompare: (req, res) => {
        var info = req.userData;
        var examid = req.body.examid;
        examModel.findOne({ examName: examid }, (err, result1) => {
            if (err)
                res.json(err);
            else if (result1) {
                quesModel.findOne({ examId: examid, userId: info }, async (err, result2) => {
                    if (err)
                        res.json(err);
                    else {
                        var labels = [];
                        var data = [];
                        var topScore = result1.top10Score;
                        topScore.sort(function (m, n) {
                            return -1 * (m.score - n.score);
                        });
                        for (let a of topScore) {
                            labels.push(a.userId);
                            data.push(a.score);

                        }
                        labels.push(info);
                        data.push((result2.examPositiveScore - result2.examNegativeScore));
                        var otherUser = [];
                        var i = 0;
                        for (let a of topScore) {
                            await quesModel.findOne({ examId: examid, userId: a.userId }, async (err, result3) => {
                                if (err)
                                    res.json(err);
                                else if (result3) {
                                    i++;
                                    var score = result3.examPositiveScore - result3.examNegativeScore;
                                    var percentage = score * 100 / result3.examTotalScore;
                                    var percentile = (result1.totalStudents - i) * 100 / result1.totalStudents;
                                    otherUser.push({
                                        totalQues: result3.examQuesCorrect + result3.examQuesWrong + result3.examQuesLeft,
                                        maxMarks: result3.examTotalScore,
                                        incorrectQues: result3.examQuesWrong,
                                        totalTime: result3.totalTime,
                                        attempQues: result3.examQuesCorrect + result3.examQuesWrong,
                                        unattempQues: result3.examQuesLeft,
                                        correctQues: result3.examQuesCorrect,
                                        totalScore: score,
                                        percentage: percentage,
                                        percentile: percentile,
                                        takeTime: [{ hours: Math.floor(result3.timeTaken / 60), min: result3.timeTaken % 60 }],
                                        rank: i,
                                    })

                                }
                                else console.log("exam id and user id not found");
                            })
                        }
                        var i = 1;
                        var score = result2.examPositiveScore - result2.examNegativeScore;
                        await quesModel.find({ examId: examid }, (err, result3) => {
                            if (err)
                                res.json(err)
                            else if (result3) {

                                for (a of result3) {
                                    var s = a.examPositiveScore - a.examNegativeScore;
                                    if (s > score)
                                        i++;

                                }
                            }
                            else console.log("question model not found again");
                        })
                        var percentile = (result1.totalStudents - i) * 100 / result1.totalStudents;
                        var percentage = score / result2.examTotalScore * 100;


                        res.json({
                            labels: labels,
                            data: data,
                            totalQues: result2.examQuesCorrect + result2.examQuesWrong + result2.examQuesLeft,
                            maxMarks: result2.examTotalScore,
                            incorrectQues: result2.examQuesWrong,
                            totalTime: result2.totalTime,
                            attempQues: result2.examQuesCorrect + result2.examQuesWrong,
                            unattempQues: result2.examQuesLeft,
                            correctQues: result2.examQuesCorrect,
                            totalScore: score,
                            percentage: percentage,
                            percentile: percentile,
                            takeTime: [{ hours: Math.floor(result2.timeTaken / 60), min: result2.timeTaken % 60 }],
                            rank: i,
                            otherUser: otherUser
                        });
                    }
                })
            }
            else res.json("exam id not found");
        })
    },

    scoreAnalysis: (req, res) => {
        var info = req.body.info;

        quesModel.findOne({ examId: req.body.examid, userId: info }, (error, result) => {
            if (error)
                res.json(error);
            else {


                res.json({
                    "Right Marks": result.examPositiveScore,
                    "Negative Marks": result.examNegativeScore,
                    "Left Marks": 100 - (result.examPositiveScore + result.examNegativeScore),
                    "Correct Question": result.examQuesCorrect,
                    "Incorect Question": result.examQuesWrong

                })




            }
        })

    },

    comparision: (req, res) => {
        var info = req.userData;
        var examid = req.body.examid;
        quesModel.findOne({ examId: examid, userId: req.body.userid }, (err, a) => {
            if (err)
                res.json(err);
            else if (a) {
                var time1 = a.timeTaken;
                quesModel.findOne({ examId: examid, userId: info }, (err, b) => {
                    if (err)
                        res.json(err);
                    else if (b) {
                        var score1 = a.examPositiveScore - a.examNegativeScore, i = 1;
                        var score2 = b.examPositiveScore - b.examNegativeScore, j = 1, total = 0;
                        quesModel.find({ examId: examid }, (err, c) => {
                            if (err)
                                res.json(err)
                            else {

                                for (d of c) {
                                    var s = d.examPositiveScore - d.examNegativeScore;
                                    if (s > score1)
                                        i++;
                                    if (s > score2)
                                        j++;
                                    total++;

                                }
                                var time = b.totalTime;

                                var time2 = b.timeTaken;
                                var percentile1 = (total - i) / total * 100;
                                var percentile2 = (total - j) / total * 100;

                                var ques = {


                                    mytotalQues: b.examQuesCorrect + b.examQuesWrong + b.examQuesLeft,
                                    mymaxMarks: 'i dont know',
                                    myattemptQues: b.examQuesWrong + b.examQuesCorrect,
                                    myUnattemptedQues: b.examQuesLeft,
                                    mycorrectQues: b.examQuesCorrect,
                                    myincorrectQues: b.examQuesWrong,
                                    mytotalScore: {
                                        myScore: score2,
                                        totalScore: b.examTotalScore,
                                    },
                                    mypercentage: (score2 * 100 / b.examTotalScore) + "%",
                                    mypercentile: percentile2 + "%",
                                    mytotalTime: {
                                        hours: time / 60,
                                        mins: time % 60
                                    },
                                    attemptQustions: b.examQuesCorrect + b.examQuesWrong,
                                    myTime: {
                                        hours: Math.floor(time2 / 60),
                                        mins: (time2 % 60)
                                    },
                                    myrank: j,



                                    totalQues: a.examQuesCorrect + a.examQuesWrong + a.examQuesLeft,
                                    maxMarks: 'i dont know',
                                    attemptQues: a.examQuesWrong + a.examQuesCorrect,
                                    UnattemptedQues: a.examQuesLeft,
                                    correctQues: a.examQuesCorrect,
                                    incorrectQues: a.examQuesWrong,
                                    totalScore: {
                                        Score: score1,
                                        totalScore: a.examTotalScore,
                                    },
                                    percentage: (score1 * 100 / a.examTotalScore) + "%",
                                    percentile: percentile1 + "%",
                                    totalTime: {
                                        hours: time / 60,
                                        mins: time % 60
                                    },
                                    attemptQustions: a.examQuesCorrect + a.examQuesWrong,
                                    Time: {
                                        hours: Math.floor(time1 / 60),
                                        mins: (time1 % 60)
                                    },
                                    rank: i,

                                };

                                res.json(ques);
                            }
                        })
                    }
                })
            }
        })

    },
    scoreCard: (req, res) => {
        var info = req.userData;
        var examid = req.body.examid;
        examModel.findOne({ examName: examid }, async (err, result) => {
            if (err)
                res.json(err);
            else if (result) {
                var time = result.examTime;

                await quesModel.findOne({ examId: examid, userId: info }, async (err, result2) => {
                    if (err)
                        res.json(err);
                    else if (result2) {
                        var score = result2.examPositiveScore - result2.examNegativeScore, i = 1;
                        await quesModel.find({ examId: examid }, (err, result3) => {
                            if (err)
                                res.json(err)
                            else if (result3) {

                                for (a of result3) {
                                    var s = a.examPositiveScore - a.examNegativeScore;
                                    if (s > score)
                                        i++;

                                }
                            }
                            else console.log("question model not found again");
                        })
                        var time2 = result2.timeTaken;
                        const scoreAnalysis = [result2.examPositiveScore, result2.examNegativeScore, result2.examLeftScore, result2.examQuesCorrect, result2.examQuesWrong];
                        var percentile = (result.totalStudents - i) / result.totalStudents * 100;
                        var ques = {
                            noOfstudent: result.totalStudents,
                            maxMarks: result.maxMarks,
                            maxQustion: result.noOfQues,
                            maxTime: [{
                                hours: time / 60,
                                mins: time % 60
                            }],
                            myMarks: score,
                            myPercentile: percentile + "%",
                            attemptQustions: result2.examQuesCorrect + result2.examQuesWrong,
                            myTime: [{
                                hours: Math.floor(time2 / 60),
                                mins: (time2 % 60)
                            }],

                            correctQustion: result2.examQuesCorrect,
                            rightMarks: result2.examPositiveScore,
                            leftMarks: result2.examLeftScore,
                            myRank: i,

                            incorrectQuestion: result2.examQuesWrong,
                            nagativeMarks: result2.examNegativeScore,
                            leftQustionMarks: result2.examQuesLeft,
                            Result: result2.examStatus,
                            scoreAnalysis: scoreAnalysis
                        }

                        res.json(ques);


                    }
                    else res.json("user of this exm not found");
                })

            }
            else res.json("exam id not found");
        })

    },
    bookmarkSet: function (req, res) { },
    getQuesAll: function (req, res) {
        var userid = req.userData;
        var examid = req.body.examid;
        quesModel.findOne({ examId: examid, userId: userid }, (error, result) => {
            if (error)
                res.json(error);
            else {
                examModel.findOne({ examName: examid }, (err, result2) => {
                    if (err)
                        res.json(err);
                    else if (result2) {
                        var exam = [];
                        for (let a of result2.questions.non_technical)
                            exam.push(a);
                        for (let a of result2.questions.technical)
                            exam.push(a);
                        var ques = result.attemptQuesDetails;
                        var details = [];
                        for (let i = 0; i < exam.length && i < ques.length; i++) {
                            var marks=0, statusans, statusques,color;
                            if (ques[i].optionChoose == ques[i].optionCorrect) {
                                marks = exam[i].quesMarksPositive;
                                statusans = 'correct';
                                statusques = 'attempted';
                                color='green';
                            }

                            else if (ques[i].quesStatus) {
                                marks = -1 * exam[i].quesMarksNegative;
                                statusans = 'incorrect';
                                color='red';
                                statusques = 'attempted';
                            }
                            else { 
                                statusques = 'not-attempted';
                                statusans='';
                                color='grey';
                             }

                            details.push({

                                testId: examid,
                                id: ques[i].quesId,
                                ques: exam[i].ques,
                                totalQues: result.examTotalScore,
                                options: [exam[i].quesOption],
                                solutionInfo: [{
                                    quesStatus: statusques,
                                    maxMarks: exam[i].quesMarksPositive,
                                    minMarks: exam[i].quesMarksNegative,
                                    getMarks: marks,
                                    rightAns: exam[i].quesCorrectAnswer,
                                    ansStatus: statusans,
                                    yourAns: ques[i].optionChoose,
                                    color:color

                                }],
                                solution: exam[i].SolutionImage,
                                bookMark: ques[i].bookmarkStatus

                            })
                        }
                        res.json(details);
                    }
                    else res.json("exam id not found");
                })
            }

        })
    },
    getExam: function (req, res) {
        var examid = req.body.examid;
        examModel.findOne({ examName: examid }, (err, result) => {
            if (err)
                res.json(err);
            else {

                var tech = [];
                var non_tech = [];

                for (let a of result.questions.non_technical) {
                    non_tech.push({

                        quesId: a.quesId,
                        ques: a.ques,
                        quesType: a.quesType,
                        quesOption: a.quesOption,
                        quesNumber: a.quesNumber,
                        quesMarksPositive: a.quesMarksPositive,
                        quesMarksNegative: a.quesMarksNegative,
                        currentStatus: a.currentStatus,
                        chooseOption: a.chooseOption


                    })
                }
                for (let a of result.questions.technical) {
                    tech.push({
                        quesId: a.quesId,
                        ques: a.ques,
                        quesType: a.quesType,
                        quesOption: a.quesOption,
                        quesNumber: a.quesNumber,
                        quesMarksPositive: a.quesMarksPositive,
                        quesMarksNegative: a.quesMarksNegative,
                        currentStatus: a.currentStatus,
                        chooseOption: a.chooseOption
                    })
                }
                res.json({
                    examName: result.examName,
                    examTime: result.examTime,
                    myTime: 0,
                    testAttempted: result.testAttempted,
                    answered: result.answered,
                    notAnswered: result.notAnswered,
                    notVisited: result.notVisited,
                    ansMarked: result.ansMarked,
                    markForReview: result.markForReview,

                    apti: non_tech,
                    technical: tech


                });
            }
        })
    }

};