import React, { Component } from 'react';
import "./Forgot.scss";
import ForgotPass from './ForgetPass';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            isChange: false,

            resultShow:false,
            isShow:1,
             isPosition:-1000,
        })
        this.onClickChange = this.onClickChange.bind(this);
    }

    onClickChange(propsShow, propsPosition,){
        console.log("this si from click changer")
        this.setState({
            isShow: propsShow,
            isPosition:propsPosition,
        })
    }

    onClickHandler = (e) =>{
        console.log("this is call from click handler")
        e.preventDefault();
        this.setState({
            isShow: 1,
            isPosition:-50,
        })
    }
   

    render() {
        const {isPosition, isShow} = this.state;
        return (
            <div className="forgotCall-container">
                <button className="forgotText" onClick={this.onClickHandler}>
                    Forgot Password?
                </button>
                <ForgotPass onClickChange={this.onClickChange} isShow={isShow} isPosition={isPosition} />
            </div>
        )
    }
}
