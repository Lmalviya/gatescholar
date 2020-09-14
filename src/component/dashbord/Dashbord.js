import React, { useState } from 'react';
import "./Dashbord.scss";
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import UserPhoto from '../../img/user-photo.jpg';
import Profile from './profile/Profile';
import Bookmark from './bookmark/Bookmark';
import MyTest from './myTest/MyTest';
import Result from './result/Result';
import DashbordContent from './DashbordContent/DashbordContent';
import Dnav from './dnav/Sidebar';
import Axios from 'axios';
import Authentication from '../../Authetication';

export default function Dashbord() {

    const [userName, setName] = useState("");
    const [userImg, setImg] = useState("");

    let { path } = useRouteMatch();

    
    
    React.useEffect(() => {
        let token = localStorage.getItem("token")
    const options = {
        method: "GET",
        headers: {
            "x-access-token": token,
        },
        url: "http://localhost:5000/gatescholar/userinfo",
    };
    Axios(options)
        .then(res => {
            console.log('from component didi moutnkjdfdjfdjfjdkjfkdjfdf', res.data)
            // this.setState({
            //     userName : res.data.name,
            //     userImg : res.data.image,
            // })
        })
        .catch(err => {
            console.log(err);
        })
      });
 
    return (

        <div className="dash-container">

            <div className='dash-sidebar'>
                <div className="dash-userInfo">
                    <img className="user-photo" src={UserPhoto} alt="user-photo" />
                    <h3>User Name</h3>
                </div>
                <hr style={{ border: "0.8px solid white" }} />
                <div className="desh-nav">
                    <Dnav />
                </div>

            </div>

            <div className="dash-right">
                <div className="dash-content">
                    <Switch>
                        <Route exact path={`${path}`} ><Authentication Comp={DashbordContent} /> </Route>
                        <Route path={`${path}/profile`} ><Authentication Comp={Profile} /> </Route>
                        <Route path={`${path}/result`} > <Authentication Comp={Result} /> </Route>
                        <Route path={`${path}/mytest`} > <Authentication Comp={MyTest} /></Route>
                        <Route path={`${path}/bookmark`} > <Authentication Comp={Bookmark} /> </Route>
                    </Switch>
                </div>
            </div>

        </div>

    )



}
