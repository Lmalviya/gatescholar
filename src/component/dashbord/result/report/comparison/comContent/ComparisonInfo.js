import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

export default class ComparisonInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: [],
            otherUser: [],

            mytotalQues: '500',
            mymaxMarks: '100',
            myattemptQues: '65',
            myUnattemptedQues: '5',
            mycorrectQues: '10',
            myincorrectQues: '15',

            mytotalScore: {
                myScore: '29',
                totalScore: '100',
            },
            mypercentage: '28',
            mypercentile: '32',
            mytotalTime: {
                hours: '2',
                mins: '40',
            },
            myrank: '200',


            totalQues: '500',
            maxMarks: '100',
            attemptQues: '65',
            UnattemptedQues: '5',
            correctQues: '10',
            incorrectQues: '15',

            totalScore: {
                myScore: '29',
                totalScore: '100',
            },
            percentage: '28',
            percentile: '32',
            totalTime: {
                hours: '2',
                mins: '40',
            },
            rank: '200',
            profileIMg: null,
        }
    }

    changeHandler() {
        this.setState({
            currentUser: [],
            otherUser: [],

            mytotalQues: '500',
            mymaxMarks: '100',
            myattemptQues: '65',
            myUnattemptedQues: '5',
            mycorrectQues: '10',
            myincorrectQues: '15',

            mytotalScore: {
                myScore: '29',
                totalScore: '100',
            },
            mypercentage: '28',
            mypercentile: '32',
            mytotalTime: {
                hours: '2',
                mins: '40',
            },
            myrank: '200',


            totalQues: '500',
            maxMarks: '100',
            attemptQues: '65',
            UnattemptedQues: '5',
            correctQues: '10',
            incorrectQues: '15',

            totalScore: {
                myScore: '29',
                totalScore: '100',
            },
            percentage: '28',
            percentile: '32',
            totalTime: {
                hours: '2',
                mins: '40',
            },
            rank: '200',
            profileIMg: null,
        })
    }




    render() {
        const { userComparison } = this.props
        // console.log(userComparison, "other user array")
        //    let opt = this.props.userComparison.otherUser
        let tempArray = Object.keys(userComparison)
        // console.log(tempArray, "out side ")
        if (tempArray.length !== 0) {
            // console.log(userComparison.otherUser[0].totalQues, "option undefine222222")

            return (
                <div className="comparisoninfoContent" >
                    <div className="infoContentHeading" >
                        <h2>My Score </h2>
                        <h2>Topper </h2>
                    </div>

                    <div className="comparison-sections">
                        <div className="comparison-section">
                            <div>
                                <p>Total Questions</p>
                                <p>Maximum Marks</p>
                                <p>Attempted Questions</p>
                                <p>Unattempted Questions</p>
                                <p>Correct Questions</p>
                                <p>Incorrect Questions</p>
                            </div>
                            <div>
                                <p><span>{userComparison.otherUser[0].totalQues}</span></p>
                                <p><span>{userComparison.otherUser[0].maxMarks}</span></p>
                                <p><span>{userComparison.otherUser[0].attempQues}</span></p>
                                <p><span>{userComparison.otherUser[0].unattempQues}</span></p>
                                <p><span>{userComparison.otherUser[0].correctQues}</span></p>
                                <p><span>{userComparison.otherUser[0].incorrectQues}</span></p>
                            </div>
                        </div>
                        <div className="comparison-section">
                            <div>
                                <p>Total Score</p>
                                <p>Percentage</p>
                                <p>Percentile</p>
                                <p>Time Taken</p>
                                <p style={{fontSize:"20px", fontWeight:"bold"}}  >Rank</p>
                                <p><br /></p>

                            </div>
                            <div>
                                {/* <p><span>{userComparison.totalScore}/{this.state.mytotalScore.totalScore}</span></p> */}
                                <p> 
                                    {
                                    userComparison.otherUser[0].totalScore >= 0 ? <>
                                        {
                                            Math.floor(userComparison.otherUser[0].totalScore) + "." + Math.floor((userComparison.otherUser[0].totalScore * 100) % 100)
                                        }/{userComparison.otherUser[0].maxMarks}
                                    </> : <><span>-</span>
                                            {
                                                Math.ceil(userComparison.otherUser[0].totalScore) + "." + Math.ceil((userComparison.otherUser[0].totalScore * 100) % 100) * (-1)
                                            }/{userComparison.otherUser[0].maxMarks}
                                        </>
                                }
                                </p>
                                <p> 
                                    {
                                    userComparison.otherUser[0].percentage >= 0 ? <>
                                        {
                                            Math.floor(userComparison.otherUser[0].percentage) + "." + Math.floor((userComparison.otherUser[0].percentage * 100) % 100)
                                        }
                                    </> : <><span>-</span>
                                            {
                                                Math.ceil(userComparison.otherUser[0].percentage) + "." + Math.ceil((userComparison.otherUser[0].percentage * 100) % 100) * (-1)
                                            }
                                        </>
                                }
                                </p>
                                {/* <p><span>{userComparison.otherUser[0].percentage}</span></p> */}
                                <p><span>{userComparison.otherUser[0].percentile}</span></p>
                                <p><span>{userComparison.takeTime[0].hours} hr {userComparison.takeTime[0].min} min </span></p>
                                <p style={{fontSize:"20px", fontWeight:"bold"}}  ><span>{userComparison.otherUser[0].rank}</span></p>
                                <p><br /></p>
                            </div>
                        </div>

                        {/* ******************************************************* */}
                        {

                            // userComparison.otherUser.map((item) => <OtherUser otherUser={userComparison.otherUser[0]} />)
                            <OtherUser otherUser={userComparison.otherUser} />
                        }
                    </div>
                </div>
            )

        }
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



export class OtherUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentToper: 1,
        }
        this.changeToper = this.changeToper.bind(this)
    }

    changeToper(num) {
        const { currentToper } = this.state
        if (currentToper > 1 && currentToper < 10) {
            this.setState({
                currentToper: this.state.currentToper + num
            })
        }

    }
    render() {
        const { otherUser } = this.props
        const { currentToper } = this.state
        // console.log(otherUser, "from otjer render()()")
        // console.log(otherUser[currentToper - 1].takeTime, "time.........")
        return (
            <div className="section-2" >
                <div className="comparison-section">
                    <div>
                        <p>Total Questions</p>
                        <p>Maximum Marks</p>
                        <p>Attempted Questions</p>
                        <p>Unattempted Questions</p>
                        <p>Correct Questions</p>
                        <p>Incorrect Questions</p>
                    </div>
                    <div>
                        <p><span>{otherUser[currentToper - 1].totalQues} </span></p>
                        <p><span>{otherUser[currentToper - 1].maxMarks} </span></p>
                        <p><span>{otherUser[currentToper - 1].attempQues} </span></p>
                        <p><span>{otherUser[currentToper - 1].unattempQues} </span></p>
                        <p><span>{otherUser[currentToper - 1].correctQues} </span></p>
                        <p><span>{otherUser[currentToper - 1].incorrectQues} </span></p>

                    </div>
                </div>
                <div className="comparison-section">
                    <div>
                        <p>Total Score</p>
                        <p>Percentage</p>
                        <p>Percentile</p>
                        <p>Time Taken</p>
                        <p style={{fontSize:"20px", fontWeight:"bold"}} > Rank </p>
                      <button className="profile-btn" type="button" onClick={() => this.changeToper(1)} >Next</button>
                    </div>
                    <div>
                        <p>
                            {
                                otherUser.totalScore >= 0 ? <>
                                    {
                                        Math.ceil(otherUser[currentToper - 1].totalScore) + "." + Math.ceil((otherUser[currentToper - 1].totalScore * 100) % 100)
                                    }/{otherUser[currentToper - 1].maxMarks}
                                </> : <>
                                        {
                                            Math.ceil(otherUser[currentToper - 1].totalScore) + "." + Math.ceil((otherUser[currentToper - 1].totalScore * 100) % 100) * (-1)
                                        }/{otherUser[currentToper - 1].maxMarks}
                                    </>
                            }</p>
                             <p> 
                                    {
                                    otherUser[currentToper - 1].percentage >= 0 ? <>
                                        {
                                            Math.floor(otherUser[currentToper - 1].percentage) + "." + Math.floor((otherUser[currentToper - 1].percentage * 100) % 100)
                                        }
                                    </> : <><span>-</span>
                                            {
                                                Math.ceil(otherUser[currentToper - 1].percentage) + "." + Math.ceil((otherUser[currentToper - 1].percentage * 100) % 100) * (-1)
                                            }
                                        </>
                                }
                                </p>

                        {/* <p><span>{otherUser[currentToper - 1].percentage}</span></p> */}
                        <p><span>{otherUser[currentToper - 1].percentile}</span></p>
                        <p><span>{otherUser[currentToper - 1].takeTime[0].hours} hr {otherUser[currentToper - 1].takeTime[0].min} min </span></p>
                        <p style={{fontSize:"20px", fontWeight:"bold"}} ><span>{otherUser[currentToper - 1].rank}</span></p>
                   
                            <button className="profile-btn" type="button" onClick={() => this.changeToper(-1)} >Previous</button>

                 
                    </div>
                </div>
            </div>
        )
    }
}
