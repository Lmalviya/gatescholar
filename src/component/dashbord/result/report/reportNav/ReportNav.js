import React, { Component } from 'react';
import './ReportNav.scss';
import {Link} from 'react-router-dom';

export default class ReportNav extends Component {
    render() {
        return (
            <div className="reportnavContainer">
                <div className="reportnavContent">
                    <ul className="reportnav-links">
                        <li className="reportnav-link" ><Link to="/dashbord/result/report/">Score Card</Link></li>
                        <li className="reportnav-link" ><Link to="/dashbord/result/report/qustionpaper">Question Paper</Link></li>
                        <li className="reportnav-link" ><Link to="/dashbord/result/report/comparison">Comparison</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
