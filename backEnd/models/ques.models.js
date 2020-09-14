const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ExamSchema = new Schema({

    examId: String,
    userId: String,
    examName: String,
    examType: String,
    examStatus: String,
    examQuesWrong: Number,
    examQuesCorrect: Number,
    examQuesLeft: Number,
    examPositiveScore: Number,
    examNegativeScore: Number,
    examLeftScore: Number,
    examTotalScore: Number,
    examGivenDate: Date,
    totalTime: Number,
    timeTaken: Number,
    attemptQuesDetails: [{
        quesId: String,
        quesNumber: Number,
        optionChoose: String,
        optionCorrect: String,
        quesStatus: Boolean,
        bookmarkStatus: Boolean
    }]


});
module.exports = mongoose.model('exam', ExamSchema);