import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';


export default class Admin extends Component {
    constructor(props) {
        super(props)
    
        const token = localStorage.getItem("token")

        let isLogin = true
        if(token==null){
            isLogin = false
        }
        this.state = {
            isLogin
        }
    }
    
    render() {
        if(this.state.isLogin === false){
            return <Redirect to="/" />
        }
        return (
            <div>
                <h1>this is from admin page!</h1>
                <Link to="/logout" > Logout </Link>
            </div>
        )
    }
}
