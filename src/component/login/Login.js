import React from 'react';
import './login.scss';
import NavLogin from './navLogin/NavLogin';
import Limg1 from '../../img/login/login.svg';
import Limg2 from '../../img/login/undraw_authentication_fsn5.svg';
import Limg3 from '../../img/login/undraw_fingerprint_swrc.svg';
import Limg4 from '../../img/login/undraw_personal_data_29co.svg';
import Facebook from './Facebook/Facebook';
import {Redirect} from 'react-router-dom';

function Login() {

    let token = localStorage.getItem("token")
    if(token != null){
       return <Redirect to="/dashbord" />
    }

    return (
        
        <div className="loginContainer">
        <div className="panel">
            <div className="row">
                <div className="col liquid">
                    

                    {/* <!-- Owl-Carousel --> */}

                    <div className="owl-carousel owl-theme">
                        <img src={Limg1} alt="" className="login_img" />
                        <img src={Limg2} alt="" className="login_img" />
                        <img src={Limg3} alt="" className="login_img" />
                        <img src={Limg4} alt="" className="login_img" />
                    </div>

                    {/* <!-- /Owl-Carousel --> */}
                    
                </div>

                <div className="form">
                    <div>
                        <div className="titles">
                            <h6>We keep everything</h6>
                            <h3>Ready to Login</h3>
                        </div>
                      
                    </div>
                    <div className="loginFacebook">
                        <Facebook />
                    </div>
                    <div className="inputText">
                    <NavLogin />
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login;
