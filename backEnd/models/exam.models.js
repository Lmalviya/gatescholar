const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const PaperSchema = new Schema({

    examName: String,
    examType: String,
    examTime: Number,
    noOfQues: Number,
    maxMarks: Number,
    testAttempted:Boolean,
    top10Score: [{
        userId: String,
        score: Number
    }],
    answered:Number,
    notAnswered:Number,
    notVisited:Number,
    ansMarked:Number,
    markForReview:Number,
    totalStudents: Number,
    questions: {
        non_technical: [{
            quesId: String,
            ques: {
                quesImage: String,
                quesStatement: String
            },
            quesType: String,
            quesOption: {
                A: String,
                B: String,
                C: String,
                D: String
            },
            quesNumber: Number,
            quesCorrectAnswer: String,
            SolutionImage: String,
            quesMarksPositive: Number,
            quesMarksNegative: Number,
            currentStatus:String,
            chooseOption:String
           
        }],
        technical: [{
            quesId: String,
            ques: {
                quesImage: String,
                quesStatement: String
            },
            quesType: String,
            quesOption: {
                A: String,
                B: String,
                C: String,
                D: String
            },
            quesNumber: Number,
            quesCorrectAnswer: String,
            SolutionImage: String,
            quesMarksPositive: Number,
            quesMarksNegative: Number,
            currentStatus:String,
            chooseOption:String

        }]
    }


});
module.exports = mongoose.model('paper', PaperSchema);