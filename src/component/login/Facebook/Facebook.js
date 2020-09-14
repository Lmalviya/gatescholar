import React, { Component } from 'react';
import FacebookloginBtn from 'react-facebook-login';
import './Facebook.scss';
import {Redirect} from "react-router-dom";
import Axios from 'axios';
export default class Facebook extends Component {
    state = {
        auth: false,
    }


    componentClicked = () => {
        console.log('facebook btn click');
    }
    responseFacebook = (response) => {
        if (response.status !== 'unknown') {

            let userInfo = {
                fullName: response.name,
                email: response.email,
                picture: response.picture.data.url
            }

            let token = localStorage.getItem("token")
            const options = {
                method: "POST",
                headers: {
                  "x-access-token": token,
                },
                url: "https://jsonplaceholder.typicode.com/posts",
                data: userInfo,
              };
              Axios(options)
              .then(res => {
                localStorage.setItem("token", res.data)
                // console.log(response.data)
                // console.log(userInfo)
                this.setState({auth:true})
                
              })
              .catch(err => {
                console.log(err);
              })



        }

    }
    render() {
        let facebookData;

        this.state.auth ?
            facebookData = (
                <Redirect to="/dashbord" />
            ) :
            facebookData = (
                <FacebookloginBtn
                    appId="2868573253236506"
                    autoLoad={false}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook}
                    cssClass="facebook-btn"
                // icon="fa-facebook" 
                />
            );
        return (
            <div>
                {facebookData}
            </div>
        )
    }
}

