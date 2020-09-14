import React, { Component } from 'react';
import './Result.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Report from './report/Report';
import ResultHome from './resultHome/ResultHome';


export default class Result extends Component {

  render() {
    let token = localStorage.getItem("token")
    let isVerify = false
    if (token != null) {
      isVerify = true
    }
    if (!isVerify) {
      return <Redirect to="/login" />
    }
    else {
      return (
        <div>
          <div className="dash-content-box">
            <Switch>
              <Route exact path="/dashbord/result">
                <ResultHome />
              </Route>
              <Route path='/dashbord/result/report/' >
                <Report />
              </Route>
            </Switch>
          </div>
        </div>
      )
    }

  }
}
