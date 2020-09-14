import React, { Component } from 'react';
import "./Admin.scss";
import BrandLogo from '../img/logo.svg'
import { Switch, Route } from 'react-router-dom';
import SideNav from './adminNav/SideNav';
import AdminHome from './adminHome/AdminHome';
import UpdateTest from './updateTest/operations/UpdateTest';
import UserInfo from './userInfo/UserInfo';
// import UploadTest from './uploadTest/UploadTest';

import ViewTest from './updateTest/operations/viewPaper/ViewPaper';

export default class Admin extends Component {
    render() {
        return (
            <div >
                <div className="brandHeading" >
                    <img src={BrandLogo} />
                    <h1>Gate Scholare</h1>
                </div>
                <div className="adminContainer">
                    {/* <h1>hello from admin</h1> */}
                    <div className='adminLeftSection'>
                        <div className="leftSectionInner">
                            <SideNav />
                        </div>
                    </div>
                    <div className="adminContent">
                        <div className="adminContentInner">
                            <Switch>
                                <Route exact path="/admin" component={AdminHome} />
                                <Route path="/admin/updatetest" component={UpdateTest} />
                                <Route path="/admin/userinfo" component={UserInfo} />
                                {/* <Route path="/admin/uploadtest" component={UploadTest} /> */}
                                <Route path="/admin/viewtest" component={ViewTest} />
                            </Switch>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
