import React, { Component } from 'react';
import Axios from 'axios';

export default class ScoreInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSet: [],

            maxTime: {
                hours: 0,
                mins: 0
            },
            myTime: {
                hours: 0,
                mins: 0
            },

        }
    }


    render() {
        const dataSet = this.props.scoreCard
        const { maxTime, myTime } = this.props
        // console.log(myTime, "from reder........44...54545..........")
        let length = Object.keys(myTime).length
        if (length != 0) {
        console.log(myTime, "from reder........44...54545..........")
            return (
                <div className="scoreinfoContent" >
                    <h2 className="scoreHeading" >Score Card</h2>
                    <div className="secore-sections">
                        <div className="secore-section-1">
                            <div>
                                <p>Total No. Student</p>
                                <p>Total Marks Of Test</p>
                                <p>Total Ques. in Test</p>
                                <li>  Total Time Of Test</li>
                            </div>
                            <div>
                                <p><span>{dataSet.noOfstudent}</span></p>
                                <p><span>{dataSet.maxMarks}</span></p>
                                <p><span>{dataSet.maxQustion}</span></p>
                                <li>   <span>{maxTime.hours} hr {maxTime.mins} min</span></li>
                            </div>
                        </div>
                        <div className="secore-section-1">
                            <div>
                                <p>My Marks</p>
                                <p>My Percentile</p>
                                <p>Total Attempt Ques.</p>
                                <li> My Time</li>
                            </div>
                            <div>
                                {
                                    dataSet.myMarks >= 0 ? <>
                                        <p>{Math.floor(dataSet.myMarks) + "." + Math.floor((dataSet.myMarks * 100) % 100)}</p>  </> : <>
                                            <p><span>-</span>{Math.ceil(dataSet.myMarks) + "." + Math.ceil((dataSet.myMarks * 100) % 100) * (-1)}</p></>
                                }
                                <p><span>{dataSet.myPercentile}</span></p>
                                <p><span>{dataSet.attemptQustions}</span></p>
                                <li><span>{myTime.hours} hr {myTime.mins} min </span></li>
                            </div>
                        </div>
                        <div className="secore-section-1">
                            <div>
                                <p>Correct Ques.</p>
                                <p>Right Marks</p>
                                <p>Left Ques.</p>
                                <li><b>  My Rank </b></li>
                            </div>
                            <div>
                                <p><span>{dataSet.correctQustion}</span></p>
                                <p><span>{dataSet.rightMarks}</span></p>
                                <p><span>{dataSet.leftQustionMarks}</span></p>
                                <li><b>  <span>{dataSet.myRank}</span> </b></li>
                            </div>
                        </div>
                        <div className="secore-section-1">
                            <div>
                                <p>Incorrect Ques.</p>
                                <p>Negative Marks</p>
                                <p>Left Ques. Marks</p>
                                <li> <b> Result</b></li>
                            </div>
                            <div>
                                <p><span>{dataSet.incorrectQuestion}</span></p>
                                {/* <p><span>{dataSet.nagativeMarks}</span></p> */}
                                {
                                    dataSet.nagativeMarks >= 0 ? <>
                                        <p>{Math.floor(dataSet.nagativeMarks) + "." + Math.floor((dataSet.nagativeMarks * 100) % 100)}</p>  </> : <>
                                            <p>{Math.ceil(dataSet.nagativeMarks) + "." + Math.ceil((dataSet.nagativeMarks * 100) % 100) * (-1)}</p></>
                                }
                                <p><span>{dataSet.leftMarks}</span></p>
                                
                                <li><b>  <span>{dataSet.Result}</span></b></li>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div className="ResultLoader" >
                        <div className="sk-cube-grid">
                            <div className="sk-cube sk-cube1"></div>
                            <div className="sk-cube sk-cube2"></div>
                            <div className="sk-cube sk-cube3"></div>
                            <div className="sk-cube sk-cube4"></div>
                            <div className="sk-cube sk-cube5"></div>
                            <div className="sk-cube sk-cube6"></div>
                            <div className="sk-cube sk-cube7"></div>
                            <div className="sk-cube sk-cube8"></div>
                            <div className="sk-cube sk-cube9"></div>
                        </div>
                    </div>
                </div>
            )
        }

    }
}
