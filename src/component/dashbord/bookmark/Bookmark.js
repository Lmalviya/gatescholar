import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './Bookmark.scss';

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

    componentDidMount() {

        //set header
        let token = localStorage.getItem("token")
        const options = {
            method: "GET",
            headers: {
                "x-access-token": token,
            },
            url: "http://localhost:5000/gatescholar/bookmarks",
        };
        axios(options)
            .then(res => {
                console.log(res.data, "from bookMark in did mount.......");
                this.setState({
                    items: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })


    }

    render() {
        const { items } = this.state
        // const { testId, testName } = this.state.items
        if(items.length == 0){
            
        }

        // let items = []
        let itemsLength = items.length
        if (itemsLength == 0) {
            return (
                <div className="r-homeBox" >
                    <div className="myTestEmpty" >
                        <div className="shadow" >No Question Bookmark</div>

                    </div>
                </div>
            )
        }
console.log(this.state.courseId, "this is course id...........")
        return (
            <div className='bookmarkContainer'>
                <div className="bm-filter">
                    <label>Test</label>
                    <select value={items.testId} onChange={this.changeTest} >
                        <option value="All" >All</option>
                        {
                            items.map((item, index) => <option key={index} value={item.testId}>{"Gate " + item.testName}</option>)
                        }
                    </select>
                </div>

                <div className='bookmarkBox'>
                    {
                        this.state.courseId == "All" ?
                            items.map((dataSet, index) => <ContentBookmark
                                index={index}
                                ques={dataSet.ques}
                                options={dataSet.options}
                                rightAns={dataSet.rightAns}
                                solution={dataSet.solution}

                            />) :

                            items.map((dataSet, index) => (this.state.courseId === dataSet.testId) ? (<ContentBookmark
                                index={index}
                                ques={dataSet.ques}
                                options={dataSet.options}
                                rightAns={dataSet.rightAns}
                                solution={dataSet.solution}

                            />) : null)
                    }
                </div>

            </div>
        )

    }
}

class ContentBookmark extends Component {
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
        const { ques, options, rightAns, solution, } = this.props;
        if (options[0] !== undefined) {
            // console.log(options[0].A, "From reder 11")

            const { isShow } = this.state;
            console.log(solution, "solution image")
            return (
                <div className="bookmarkContent">
                    <div className="questionHeading" >

                        {
                            ques[0].quesStatement === null ? <> {null}  </> : <><h4><span>Q.</span> {ques[0].quesStatement}</h4></>
                        }
                        {
                            ques[0].quesImage !== null ? <>
                                {/* <img style={{width:50, height: 50}} src={require("https://drive.google.com/file/d/1uY_sJ9hOEH75MwO79ndm44tmHZhIolrq/view?usp=sharing")} alt="no image" /> */}
 <img src={ques[0].quesImage}   alt="image not found" />                          
                            </> : <>
                                    {null}
                                </>
                        }

                        <div className="optionBox">
                            <ul>
                                <li> <span>A.</span>  {options[0].A} </li>
                                <li><span>B.</span>{options[0].B} </li>
                                <li><span>C.</span>{options[0].C} </li>
                                <li><span>D.</span>{options[0].D} </li>
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
                                    {
                                        solution !== null ? <>
                                            <img src={solution} alt="solution not found" />
                                        </> : <> {null} </>
                                    }
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            )
        }
        else {
            return null
        }
    }

}