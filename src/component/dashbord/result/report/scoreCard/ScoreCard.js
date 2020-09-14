import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import "./ScoreCard.scss";
import ScoreAnalysis from './scoreContent/ScoreAnalysis';
import ScoreInfo from './scoreContent/ScoreInfo';
import ScorePerformence from './scoreContent/ScorePerformance';
import Axios from 'axios';

export default class ScoreCard extends Component {
constructor(props) {
    super(props)

    this.state = {
         scoreCard : [],
         maxTime : [],
         myTime : [],
         scoreAnalysis : [],
         scorePerformence : 0
    }
}

    componentDidMount(){

        //set header
        let token = localStorage.getItem("token")
        let examid = localStorage.getItem("examid")
        // console.log(localStorage.getItem("examid"), "local storeagejfkjdfkdjfkdfdfjkdjfdn ")
        const options = {
            method: "POST",
            headers: {
              "x-access-token": token,
            },
            url: "http://localhost:5000/gatescholar/scorecard",
            data: { examid: examid },
          };
          Axios(options)
          .then(res => {
            console.log("from component didi mount from score  .......................", res.data, );
            console.log("max time ========= ", res.data)
            this.setState({
                scoreCard : res.data,
                maxTime : res.data.maxTime[0],
                myTime : res.data.myTime[0],
                scoreAnalysis : res.data.scoreAnalysis,
                scorePerformence : res.data.myMarks
            })
          })
          .catch(err => {
            console.log(err);
          })
    }


    render() {
        const {scoreCard,maxTime, myTime, scoreAnalysis, scorePerformence} = this.state
        let token = localStorage.getItem("token")
        if (token == null) {
            return <Redirect to="/login" />
        }
        else {
            return (
                <div className="scorecardContainer">
                    <div className="scorecardContent">
                        <div className="scorecardupperSection">
                            <ScoreInfo scoreCard={scoreCard} maxTime={maxTime} myTime={myTime} />
                        </div>
                        <div className="scorecardlowerSection">
                            <div className="scorePerformence">
                                <ScorePerformence  scorePerformence={scorePerformence} />
                            </div>
                            <div className="scoreAnalysis">
                                <ScoreAnalysis scoreAnalysis={scoreAnalysis} />
                            </div>
                        </div>
                    </div>

                </div>
            )
        }

    }
}
