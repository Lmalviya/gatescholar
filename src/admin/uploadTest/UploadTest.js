import React, { Component } from 'react';
import "./UploadTest.scss";

export default class UploadTest extends Component {
    constructor(props) {
        super(props)

        this.state = {
            test: [{
                year: "",
                totalQues: "",
                time: "",
                questionSection:"",
                paperSet:"",

                questionUrl: "",
                questionType: "",
                testName: "",
                mark: "",
                rightAnswer: "",
                options: {
                    option1: "",
                    option2: "",
                    option3: "",
                    option4: ""
                },
                solutionUrl: "",

            }]
        }
    }

    onChangeHandler = () => {

    }
    render() {
        return (
            <div className="uploadTestContainer" >
                {/* ***************************year*********************************** */}
                <div className="uploadTestHeader">
                    <div>
                        <label>Year</label>
                        <input
                            type="text"
                            value="hello"
                            name="year"
                            onChange={this.onChangeHandler}
                        />
                    </div>
                    <div>
                        <label>No. Of Questions</label>
                        <input
                            type="text"
                            value="65"
                            name="totalQues"
                            onChange={this.onChangeHandler}
                        />
                    </div>
                    <div>
                        <label>Time</label>
                        <input
                            type="text"
                            value="hello"
                            name="time"
                            onChange={this.onChangeHandler}
                        />
                    </div>
                </div>
                 {/* ***************************year end*********************************** */}
                  {/* ***************************Qestion url*********************************** */}
                <div className="uploadTestSection" >
                    <div>
                        <label>Question URL</label>
                        <input
                            type="text"
                            value="hello"
                            name="questionUrl"
                            onChange={this.onChangeHandler}
                        />
                    </div>
                     {/* ***************************Qestion url end*********************************** */}
                     {/* ***************************Qestion type *********************************** */}
                    <div>
                        <div>
                            <label>Question Type</label>
                            <input
                                type="text"
                                value="hello"
                                name="questionType"
                                onChange={this.onChangeHandler}
                            />
                        </div>
                        <div>
                            <label>Test Name</label>
                            <input
                                type="text"
                                value="hello"
                                name="testName"
                                onChange={this.onChangeHandler}
                            />
                        </div>
                        <div>
                            <label>mark</label>
                            <input
                                type="text"
                                value="hello"
                                name="mark"
                                onChange={this.onChangeHandler}
                            />
                        </div>
                    </div>
                     {/* ***************************Qestion type end*********************************** */}
    {/* ***************************options*********************************** */}
                    <div>
                        <div className="radio">
                            <label>
                                <input
                                    type="radio"
                                    value="A"
                                    checked={this.state.selectedOption === "A"}
                                    onChange={}
                                />
                                <input
                                    type="text"
                                    value="hello"
                                    name="option1"
                                    onChange={}
                                />
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input
                                    type="radio"
                                    value="b"
                                    checked={this.state.selectedOption === "A"}
                                    onChange={}
                                />
                                <input
                                    type="text"
                                    value="hello"
                                    name="option2"
                                    onChange={}
                                />
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input
                                    type="radio"
                                    value="c"
                                    checked={this.state.selectedOption === "A"}
                                    onChange={}
                                />
                                <input
                                    type="text"
                                    value="hello"
                                    name="option3"
                                    onChange={}
                                />
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input
                                    type="radio"
                                    value="d"
                                    checked={this.state.selectedOption === "A"}
                                    onChange={}
                                />
                                <input
                                    type="text"
                                    value="hello"
                                    name="option4"
                                    onChange={}
                                />
                            </label>
                        </div>
                    </div>
                    {/* ***************************options end*********************************** */}
                    {/* **********************************solution Url***************************** */}
                    <div>
                            <label>Solution Url </label>
                            <input
                                    type="text"
                                    value="hello"
                                    name="option1"
                                    onChange={}
                                />
                  
                    </div>
                    {/* **********************************solution Url end***************************** */}
                </div>
            </div>
        )
    }
}
