const mongoose =require('mongoose');
const Schema=mongoose.Schema();

const givenExamSchema=new Schema({
    userId:String,
    givenExam:Number,
    bestScoreTests:String,
    failExam:Number,
    avgPercentile:Number,
    overallPerformance:{
        month:[],
    score:[]
    },
    top10Score:{
        examid:[],
        score:[]
    }

})