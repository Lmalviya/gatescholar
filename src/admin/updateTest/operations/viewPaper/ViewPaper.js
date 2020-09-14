import React, { Component } from 'react';
import './ViewPaper.scss';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

export default class Bookmark extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [
                {
                    testId: 'gate2020',
                    testName: 'Gate 2020',
                    ques: 'hello this is question 1',
                    options: {
                        option1: 'hello1',
                        option2: 'hello2',
                        option3: 'hello3',
                        option4: 'hello4',
                    },
                    solutionInfo: {
                        rightAns: 'option 4',
                    },
                    solution: 'good bye',

                },
                {
                    testId: 'gate2000',
                    testName: 'Gate 2000',
                    ques: 'hello this is question 10',
                    options: {
                        option1: 'hello1',
                        option2: 'hello2',
                        option3: 'hello3',
                        option4: 'hello4',
                    },
                    solutionInfo: {
                        rightAns: 'option 4',
                    },
                    solution: 'good 12121',

                },
                {
                    testId: 'gate2010',
                    testName: 'Gate 2010',
                    ques: 'hello this is question 5',
                    options: {
                        option1: 'hello1',
                        option2: 'hello2',
                        option3: 'hello3',
                        option4: 'hello4',
                    },
                    solutionInfo: {
                        rightAns: 'option 4',
                    },
                    solution: 'good  jh bye',

                },

                {
                    testId: 'gate2018',
                    testName: 'Gate 2018',
                    ques: 'hello this is question 2',
                    options: {
                        option1: 'bye1',
                        option2: 'bye2',
                        option3: 'bye3',
                        option4: 'bhe4',
                    },
                    solutionInfo: {
                        rightAns: 'option3',
                    },
                    solution: 'good luck',

                }
            ],
            courseId: 'All',
            testId: '',
            id: 0,
            ques: '',
            ans: '',
            options: {
                option1: '',
                option2: '',
                option3: '',
                option4: '',
            },
            solutionInfo: {
                rightAns: '',
            },
            solution: '',

        }
    }


    changeTest = (event) => {
        console.log("from test ", event.target.value)

        this.setState({
            courseId: event.target.value
        })
    }

    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(response =>{

    //         this.setState({
    //             items:response,
    //         })
    //     })

    // }

    render() {
        // let token = localStorage.getItem("token")
        let token = "dfdfdfdfdf"
        let isVerify = false
        if (token != null) {
            isVerify = true
        }
        if (!isVerify) {
            return <Redirect to="/login" />
        }
        else {
            const { testId, testName } = this.state.items
            const { items } = this.state;
            console.log("from test id", this.state.courseId)
            return (
                <div className='viewContainer'>
              

                    <div className='viewBox'>
                      {
                          items.map((dataSet, index) => <ContentView
                          quesNum={index}
                          ques={dataSet.ques}
                          options={dataSet.options}
                          rightAns={dataSet.solutionInfo.rightAns}
                          solution={dataSet.solution}

                      />)
                      }
                    </div>

                </div>
            )
        }

    }
}

class ContentView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isShow: false
        }
    }

    isShowHandler = (e) => {
        e.preventDefault()
        this.setState({
            isShow: true
        })
    }

    isHeddenHandler = (e) => {
        e.preventDefault()
        this.setState({
            isShow: false
        })
    }

    render() {
        const { ques, options, rightAns, solution, quesNum} = this.props;
        const { isShow } = this.state;
        return (
            <div className="viewContent">
                <div className="questionHeading" >
                    <h4><span>Q. {quesNum+1} </span> {ques}</h4>
                    <div className="optionBox">
                        <ul>
                            <li> <span>A. </span> {options.option1} </li>
                            <li><span> B.</span> {options.option2} </li>
                            <li><span>C. </span> {options.option3} </li>
                            <li><span>D. </span> {options.option4} </li>
                        </ul>
                    </div>
                </div>

                <div className="quesAnsBox">
                    <div>
                        <p>Answer : <b>{rightAns}</b> </p>
                    </div>
                    <div className="quesBtnBox">
                        <div >
                            <button type="button"
                                className="profile-btn" onClick={this.isShowHandler}
                            >Show Solution</button>
                        </div>
                        <div>
                            <button type="button"
                                className="profile-btn" onClick={this.isHeddenHandler}
                            > Hide Solution</button>
                        </div>
                    </div>
                </div>

                <div >
                    {
                        isShow ? (
                            <div className="quesSolutionBox">
                                <h3> {solution}</h3>
                            </div>
                        ) : null
                    }
                </div>
            </div>
        )
    }
}