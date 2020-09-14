import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import "./Profile.scss";
import UserInfo from './userInfo/UserInfo';
import ChangePwd from './changePwd/ChangePwd';
import UploadPhoto from './uploadPhoto/UploadPhoto';
import UserImg from "../../../img/user-photo.jpg";


export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            isChange: false,

            isShow: 1,
            isPosition: -1500,
        })
        this.onClickChange = this.onClickChange.bind(this);
    }

    onClickChange(propsShow, propsPosition) {
        console.log("this si from click changer")
        this.setState({
            isShow: propsShow,
            isPosition: propsPosition,
        })
    }

    onClickHandler = () => {
        this.setState({
            isShow: 1,
            isPosition: -310,
        })
    }

    render() {
            const { isPosition, isShow } = this.state;
            return (
                <div className="profile-container">
                    <div className="profile-content">
                        <div className="profile-left">
                            <div >
                                <img className="profile-img" src={UserImg} width="200px" />
                            </div>
                            <div className="btns">
                                <button className="profile-btn" onClick={() => this.setState({ isChange: false })} ><span> Profile</span> </button><br />
                                <button className="profile-btn" onClick={this.onClickHandler} > <span>Upload Photo</span> </button><br />
                                <button className="profile-btn" onClick={() => this.setState({ isChange: !false })} ><span> Change Password</span> </button><br />
                            </div>
                        </div>
                        <div className='profile-right'>
                            {
                                this.state.isChange ? <ChangePwd /> : <UserInfo />
                            }
                            <div className='uploadPhoto'>

                            </div>
                        </div>
                    </div>
                    <UploadPhoto onClickChange={this.onClickChange} isShow={isShow} isPosition={isPosition} />
                </div>
            )

    }
}
