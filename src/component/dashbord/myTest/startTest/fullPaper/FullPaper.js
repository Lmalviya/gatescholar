import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Fullpaper.scss";

export default class FullPaper extends Component {
    constructor(props) {
        super(props)

        this.state = {
            paper: [],
        }
    }


    render() {
        const { paper } = this.props
        const technical = paper.technical
        const apti = paper.apti
        console.log(technical, apti)
        return (
            <div className="fullPaperContainer" >

                <div id="goBackBtnId" >
                    <button className="goBackBtn" type="button" >
                        <Link to="/test" ><i class="fas fa-times"></i> </Link></button>
                </div>

                <div className="fullPaperContent" >
                    <>
                        <h3 className="sectionHeading" >Technical Section : </h3>
                        {
                            technical.map((item, index) => <QuesPrototy
                                questionNum={index}
                                question={item.ques}
                                option1={item.quesOption.A}
                                option2={item.quesOption.B}
                                option3={item.quesOption.C}
                                option4={item.quesOption.D}
                            />)
                        }
                    </>
                    <>
                        <h3 className="sectionHeading" >Aptitude Section : </h3>
                        {
                            apti.map((item, index) => <QuesPrototy
                                questionNum={index}
                                question={item.ques}
                                option1={item.quesOption.A}
                                option2={item.quesOption.B}
                                option3={item.quesOption.C}
                                option4={item.quesOption.D}
                            />)
                        }
                    </>
                </div>
                

            </div>
        )
    }
}



export class QuesPrototy extends Component {
    render() {
        const { question, option1, option2, option3, option4, questionNum } = this.props
        return (
            <div className="singleQuesBox" >
                <p><span>Q. {questionNum + 1}</span> 
                
                <p>{question.quesStatement} </p>
                <p>{question.quesImage} </p> </p>
                <div className="singleQuesOptions" >
                    <ul>
                        <li><span>A.</span> {option1} </li>
                        <li><span>B.</span> {option2} </li>
                        <li><span>C.</span> {option3} </li>
                        <li><span>D.</span> {option4} </li>
                    </ul>
                </div>
                <hr />
            </div>
        )
    }
}
