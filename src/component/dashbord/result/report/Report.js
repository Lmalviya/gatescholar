import React, { Component, useState } from 'react';
import "./Report.scss";
import {Switch, Route, useLocation, Redirect} from 'react-router-dom';
import ScorCard from './scoreCard/ScoreCard';
import Comparison from './comparison/Comparison';
import QustionPapaer from './qustionPaper/QustionPapaer';
import ReportNav from './reportNav/ReportNav';
import E404 from '../../../404/E404';
import Authentication from '../../../../Authetication';

function Report() {
        return (
            <NewReport />
        )
}

class NewReport extends Component{
    
    render(){
            return(
                <div className='reportContainer'>
                    <div className="reportHeader">
                        <ReportNav />
                    </div>
                    <div className="reportContent">
                        <Switch>
                                <Route exact path="/dashbord/result/report/" >
                                    <ScorCard />
                                </Route>
                            <Route path="/dashbord/result/report/qustionpaper" >
                                <Authentication Comp={QustionPapaer} />
                            </Route>
                            <Route path="/dashbord/result/report/comparison" >
                                <Authentication Comp={Comparison} />
                            </Route>
                            <Route path="*"  component={E404} /> 
                        </Switch>
                
                    </div>
                </div>
            )
      
        
    }
}

export default Report;