const examModel = require('../../models/exam.models.js');
const quesModel = require('../../models/ques.models.js');
'use strict';

const fs = require('fs');


module.exports = {
    create: function (req, res) {
      let  exam = {

            examName: req.body.examname,
            examType: req.body.type,
            examTime: parseInt(req.body.time),
            noOfQues: parseInt(req.body.totalQues),
            maxMarks: parseInt(req.body.maxMark),
            totalStudents:0,
            answered:0,
            notAnswered:0,
            notVisited:0,
            ansMarked:0,
            markForReview:0,
            testAttempted:false
        }

        examModel.create(exam)
            .then((result) => {
                console.log('paper created');

                res.send("paper is created ");
            })
            .catch((error) => {
                console.log(error);

            })
    },
    update: function (req, res, next) {

        let student = [];
        var  paperName=req.body.paperName;
        student = fs.readFileSync(paperName);
        

        student = JSON.parse(student);
        console.log(student);
                examModel.findOneAndUpdate({ examName: req.body.examid }, { questions: student }, (error, resl) => {
                    if (error)
                        console.log(error);
                    else
                        res.json("ques in paper added");

                })
            

      

    },
    get: (req, res) => {
        console.log("start");
        examModel.find({})
            .then((result) => {
                res.json({ result: result });
            })
            .catch((error) => {
                res.send(error);
                console.log(error);
            })
    },
    delete: (req, res) => {
        examModel.deleteMany({})
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.json(error);
            })
    },
    getQuesAll:function(req,res){
        quesModel.find({},(error,result)=>{
            if(error)
            res.json(error);
            else 
            res.json(result);
        })
    },
    deleteQues:function(req,res){
        quesModel.deleteMany({},(error,result)=>{
            if(error)
            res.json(error);
            else 
            res.json(result);
        })
    }

}