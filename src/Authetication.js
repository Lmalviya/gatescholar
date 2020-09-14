import React, { Component } from 'react';
import {Redirect } from 'react-router-dom';
import Axios from 'axios';

export default class Authetication extends Component {
constructor(props) {
    super(props)

    this.state = {
         errorMsg:""
    }
}

  
    render() {
        const {Comp} = this.props
        let token = localStorage.getItem("token")
        let errorMessage = this.state.errorMsg

        if(token != null && errorMessage != "jwt must be provided" ){
            console.log("from Authentication", token)
            return <Comp />
        }
        else{
            console.log(token, errorMessage)
          return  <Redirect to="/login" />
        }
    }
}
