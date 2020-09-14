import React, { Component } from 'react';
import axios from 'axios';

export default class UserInfo extends Component {
    constructor(props){
        super(props);
        this.state ={
            userName:"",
            email:"",
            admissionDate:'',
        }
    }

    componentDidMount(){

        let userInfo = {
            userName : this.state.userName,
            email : this.state.email,
            admissionDate : this.state.admissionDate,
        }
        let token = localStorage.getItem("token")
        const options = {
            method: "GET",
            headers: {
              "x-access-token": token,
            },
            url: "http://localhost:5000/gatescholar/profile",
          };
          axios(options)
          .then(res => {
            userInfo = res.data
            this.setState(userInfo)
          })
          .catch(err => {
            console.log(err);
          })


 
    }

    render() {
        const {userName, email, admissionDate} = this.state;
        return (
            <div className="user-info">
                <h2>User Information</h2>
                <p>Full Name : {userName}</p>
                <p>Email : {email}</p>
                <p>Admission Date : {admissionDate}</p>
            </div>
        )
    }
}
