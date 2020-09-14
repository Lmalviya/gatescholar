import React, { Component } from 'react';
import Axios from 'axios';


export default class PaperContentBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isShow: false,

        }
        this.hiddenHandler = this.hiddenHandler.bind(this);
    }

    hiddenHandler(value) {
        this.setState({
            isShow: value,
        })
    }


    render() {
        const { paperItem } = this.props
        // console.log(paperItem, "form box//////////////")
        // console.log(paperItem[0].options[0].A)


        // ***************************************************************************
        const { currentQuesID, bkBtn } = this.props;
        const { isShow } = this.state;
        console.log(paperItem[currentQuesID - 1].solutionInfo[0], "paperitems/////////////////")
        let color = paperItem[currentQuesID - 1].solutionInfo[0].color
        if (paperItem.length != 0) {
            return (
                <div className="paperBoxContainer" >
                    <div>
                        <p>
                            {
                                paperItem[currentQuesID - 1].ques.quesStatement !== null ? <>
                                    <p> <span> Q {currentQuesID}. </span>   {paperItem[currentQuesID - 1].ques.quesStatement}</p>
                                </> : null
                            }

                        </p>

                        <p>
                            {
                                paperItem[currentQuesID - 1].ques.quesImage !== null ? <>
                                    <p> <span> {currentQuesID} </span>   {paperItem[currentQuesID - 1].ques.quesImage}</p>
                                </> : null
                            }

                        </p>
                    </div>
                    <div className="paperBox">

                        {
                            paperItem[currentQuesID - 1].options[0].A !== "" ? <>

                                <div className="optionBox">
                                    <p><span>A. </span> {paperItem[currentQuesID - 1].options[0].A}</p>
                                    <p><span>B. </span> {paperItem[currentQuesID - 1].options[0].B}</p>
                                    <p><span>C. </span> {paperItem[currentQuesID - 1].options[0].C}</p>
                                    <p><span>D. </span> {paperItem[currentQuesID - 1].options[0].D}</p>
                                </div>

                            </> : <> {null} </>
                        }



                    </div>

                    <div className="showBtn">
                        <button className="profile-btn" type="button" onClick={() => this.hiddenHandler(true)}>Show Solution</button>
                        <button className="profile-btn paperBoxbtn" type="button" onClick={() => this.hiddenHandler(false)}>Hide Solution</button>
                    </div>

                    <div className="solutionInfo">
                        {
                            isShow ? (<div className="solutionInfoBox">
                                <div className="qInfo">
                                    <table>
                                        <tbody>
                                            <tr>

                                                <td>Question : <span>{paperItem[currentQuesID - 1].solutionInfo[0].quesStatus}</span></td>
                                                <td>Correct Answer : <span>{paperItem[currentQuesID - 1].solutionInfo[0].rightAns}</span></td>
                                                <td>Your Answer : <span>{paperItem[currentQuesID - 1].solutionInfo[0].yourAns}</span></td>
                                            </tr>
                                            <tr>
                                                <td>Max Marks : <span>{paperItem[currentQuesID - 1].solutionInfo[0].maxMarks}</span></td>
                                                <td>Your Marks : <span>{paperItem[currentQuesID - 1].solutionInfo[0].getMarks}</span></td>
                                                <td><span style={{color: `${color}`}} ><b> {paperItem[currentQuesID - 1].solutionInfo[0].ansStatus}</b></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="solutionBox">
                                    <div className="solutionBtn">
                                        <button className='quesPaperBtn' type="button" onClick={() => this.props.quesChangeHandler(currentQuesID, 0)} > Previous </button>

                                        <button
                                            className='quesPaperBtn'
                                            type="button"
                                            onClick={() => this.props.bookMarkColorHandler(currentQuesID - 1)}
                                            style={{
                                                background: `${this.props.markColor}`
                                            }}
                                        >BookMark</button>

                                        <button className='quesPaperBtn' type="button" onClick={() => { this.props.quesChangeHandler(currentQuesID, 1) }} > Next </button>
                                    </div>
                                    <div className="solutionContent">
                                        <img src={paperItem[currentQuesID - 1].solution} alt="image not found" />
                                    </div>
                                </div>
                            </div>) : null
                        }
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