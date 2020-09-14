import React, { Component } from 'react';
import LoginPage from './Login';
// import LogoutPage from './Logout';
// import Admin from './Admin';
import Test from "../component/dashbord/myTest/startTest/TestHome";
import { Switch, Route, } from "react-router-dom";
import Admin from "../admin/Admin"
import StartTestWindow from './startTestWindow/StartTestWindow';


export default class main extends Component {
    
    render() {
        return (
            <div>
                <Switch>
                    {/* <Route exact path="/" component={LoginPage} /> */}
                    {/* <Route path="/admin" component={Admin} /> */}
                    {/* <Route path="/logout" component={LogoutPage} /> */}
                    <Route path="/instruction" component={StartTestWindow} />
                    <Route path="/test" component={Test} />
                    <Route path="/admin" component={Admin} />
                    
                    
                </Switch>

            </div>
        )
    }
}
