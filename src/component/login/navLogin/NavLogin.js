import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Signup from '../siginup/Signup';
import Signin from '../signin/Signin';

export default class NavLogin extends Component {
constructor(props){
        super(props);
        this.state=({
                isRegister:false        
        })
}
render() {
return (
        <div>
        {
        this.state.isRegister?
                <div>
                <Signup />
                <button className="navigationLogin" onClick={()=>this.setState({isRegister:false})}>go to Sign In</button>
                </div>
                :
                <div>
                <Signin />
                <button className="navigationLogin" onClick={()=>this.setState({isRegister:!false})}>go to Sign Up</button>
                </div>
        }
        

        </div>
)
}
}
