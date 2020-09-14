import React, { Component } from 'react';
import axios from 'axios';

export default class ExamStatus extends Component {
    constructor(props){
        super(props);
        this.state ={
            examStatus : [], 
            givenExam:0,
            bestScoreTest:'No Subject',
            failExam:0,
            avgPercentile:0,
        }
    }

componentDidMount(){

    //set header
    let token = localStorage.getItem("token")
    const options = {
        method: "GET",
        headers: {
          "x-access-token": token,
        },
        url: "http://localhost:5000/gatescholar/givenexam",
      };
      axios(options)
      .then(res => {
        // console.log("hdfjdkfjdkjfdjfjdlfjdlfldjlfjdljfldjfl", res.data);
        this.setState({
            examStatus : res.data
        })
      })
      .catch(err => {
        console.log(err);
      })

}

    render() {
        const {examStatus} = this.state
        let examArrayLength = Object.keys(examStatus).length
        // console.log(examArrayLength, "from exam status////////////")
        if(examArrayLength !=0){
            let averagePercentage = examStatus.averagePercentage
            if(averagePercentage >= 0){
               averagePercentage = Math.floor(averagePercentage) + "." + Math.floor((averagePercentage*100)%100)
            }
            else{
                averagePercentage = Math.ceil(averagePercentage) +"." + Math.ceil((averagePercentage*100)%100)*(-1)
            }
            return (
                
                <div className="examstatus">
                    <p>Total Exam Given : {examStatus.givenExam}</p>
                    <p>Best Score In Test : {examStatus.bestScore}</p>
                    <p>Failed Exam : {examStatus.failExam}</p>
                    <p>Average Percentile : {averagePercentage}%</p>
                </div>
            )
        }
        else{
            return null
        }
        console.log()
    }
}
