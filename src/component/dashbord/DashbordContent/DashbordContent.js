import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './DashbordContent.scss';
import ExamStatus from './dashbordCmp/ExamStatus'
import OverallPerformance from './dashbordCmp/OverallPerformance'
import BestScore from './dashbordCmp/BestScore'
import Axios from 'axios';

export default class DashbordContent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            topListLength: '',
        }
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler(length) {
        this.setState({
            topListLength: length,
        })
    }
    
    render() {
            const { topListLength } = this.state
            return (
                <div className="dashbord-content" >
                    <div className="dashbord-upper">
                        <div className="dashbord-exam-status">
                            <h3>GATE EXAM</h3>
                            <hr />
                            <div className="exam-status">
                                <ExamStatus />
                            </div>
                        </div>
                        <div className="dashbord-overall-chart">
                            <h3>OVERALL PERFORMANCE</h3>
                            <div className="overallPerformance">
                                <OverallPerformance />
                            </div>
                        </div>
                    </div>
                    <div className="dashbord-top10-chart">
                        <h3>TOP {topListLength} SCORE</h3>
                        <div className='bestScore'>
                            <BestScore changeHandler={this.changeHandler} />
                        </div>
                    </div>
                </div>
            )



    }
}


