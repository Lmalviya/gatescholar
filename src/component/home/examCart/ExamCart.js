import React, { Component } from 'react';
import "./ExamCart.scss";
import {Link} from "react-router-dom";

export default class ExamCart extends Component {
    render() {
        return (
            <div className="event-content" >
                <div className="event-text">
                    <h1>Exams for Computer Science</h1>
                </div>
                <div className="eventCart">
                <div className="iteamCart">
                    <div className="iteamHeadingText">
                        <h2>GATE</h2>
                    </div>
                    <div>
                        <p>Notification : 12/12/2020</p>
                        <p>Application Form : 12/12/2020</p>
                        <p>Last Date of Registration : 12/12/2020</p>
                        <p>Application Correction : 12/12/2020</p>
                        <p>Download Admit Card : 12/12/2020</p>
                        <p>Answer Key : 12/12/2020</p>
                        <p>Result Date : 12/12/2020</p>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <Link className="exam-btn" to="/gate"> <span>More Info</span></Link>
                    </div>
                </div>

                <div className="iteamCart">
                <div className="iteamHeadingText">
                        <h2>ISRO</h2>
                    </div>
                    <div>
                        <p>Notification : 12/12/2020</p>
                        <p>Application Form : 15/02/2021</p>
                        <p>Last Date of Registration : 12/12/2020</p>
                        <p>Application Correction : 12/12/2020</p>
                        <p>Download Admit Card : 12/12/2020</p>
                        <p>Answer Key : 12/12/2020</p>
                        <p>Result Date : 12/12/2020</p>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <Link className="exam-btn" to="/isro"> <span>More Info</span></Link>
                    </div>
                </div>

                <div className="iteamCart">
                <div className="iteamHeadingText">
                        <h2>BARC</h2>
                    </div>
                    <div>
                        <p>Notification : 12/12/2020</p>
                        <p>Application Form : 12/12/2020</p>
                        <p>Last Date of Registration : 12/12/2020</p>
                        <p>Application Correction : 12/12/2020</p>
                        <p>Download Admit Card : 12/12/2020</p>
                        <p>Answer Key : 12/12/2020</p>
                        <p>Result Date : 12/12/2020</p>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <Link className="exam-btn" to="/barc"> <span>More Info</span></Link>
                    </div>
                </div>

                <div className="iteamCart">
                <div className="iteamHeadingText">
                        <h2>DRDO</h2>
                    </div>
                    <div>
                        <p>Notification : 12/12/2020</p>
                        <p>Application Form : 12/12/2020</p>
                        <p>Last Date of Registration : 12/12/2020</p>
                        <p>Application Correction : 12/12/2020</p>
                        <p>Download Admit Card : 12/12/2020</p>
                        <p>Answer Key : 12/12/2020</p>
                        <p>Result Date : 12/12/2020</p>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <Link className="exam-btn" to="/drdo"> <span>More Info</span></Link>
                    </div>
                </div>

                </div>
               
            </div>
        )
    }
}
