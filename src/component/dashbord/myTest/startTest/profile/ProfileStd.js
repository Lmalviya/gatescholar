import React, { Component } from 'react';
import { Link } from "react-router-dom";
import UserImg from "../../../../../img/user-photo.jpg";


// profile css refere from user profile 
export default class ProfileStd extends Component {
    render() {
        return (
            <div className="profileStdContainer" >
                
                <div id="goBackBtnId" >
                    <button className="goBackBtn" type="button" >
                        <Link to="/test" ><i class="fas fa-times"></i> </Link></button>
                </div>


                <div className="profile-container">
                    <div className="profile-content">

                        <div className="profile-left">

                            <img className="profile-img" src={UserImg} width="200px" />

                        </div>

                        <div className='profile-right'>
                            <div className="user-info">
                                <h2>User Information</h2>
                                <p>Full Name : </p>
                                <p>Email : </p>
                                <p>Admission Date : </p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
