import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import App from './App'
import Admin from './admin/Admin';
import E404 from './component/404/E404';
// import Test from './component/liveTest/TestStart'

export default class AA extends Component {
    render() {
        return (
            <div>
                {/* <h1>hello</h1> */}
                <Switch>
                    <Route exact path="/home" component={App} />
                    <Route path="/admin" component={Admin} />
                    {/* <Route path="/test" component={Test} /> */}
                    <Route path="*" component={E404} />
                </Switch>                
            </div>
        )
    }
}
