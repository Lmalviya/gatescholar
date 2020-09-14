import React, { Component } from 'react';
import axios from 'axios';
import ForgotCall from '../forgetPass/ForgotCall';


const initialState = {
    email: '',
    password: '',

    isDisable: true,
    backGround: "gray",

    emailError: "",
    passwordError: "",
}

export default class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = initialState;
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    formValidation = (respons) => {
        let emailError = "";
        let passwordError = "";

        if (respons == "email id not found") {
            emailError = respons
        }
        if (respons == "inccorect password") {
            passwordError = respons
        }




        ///// check the error 
        if (emailError) {
            this.setState({ emailError });
            return false;
        }
        else { this.setState({ emailError: "" }); }

        if (passwordError) {
            this.setState({ passwordError });
            return false;
        }
        else { this.setState({ passwordError: "" }); }
        return true

    }

    onSubmitHandler = (e) => {
        e.preventDefault()
       
        console.log(this.state)
        let userInfo = {
            email: this.state.email,
            password: this.state.password
        }

        let token = localStorage.getItem("token")
        const options = {
            method: "POST",
            headers: {
              "x-access-token": token,
            },
            url: "http://localhost:5000/gatescholar/login",
            data: userInfo,
          };
          axios(options)
          .then(res => {
            console.log(res.data.message)
            let isValid = this.formValidation(res.data.message)
            if (isValid) {
                console.log(res.data.message)
                if (res.data.token) {
                    localStorage.setItem("token", res.data.token)
                    console.log("from singup page ", localStorage.getItem("token"))
                    window.location.reload(false);
                }
                //clear the inpute field
                this.setState(initialState)
            }
          })
          .catch(err => {
            console.log(err);
          })

    }
        
    

    render() {
            const { email, password, emailError, passwordError } = this.state;
            return (
                <div>
                    <form onSubmit={this.onSubmitHandler}>
                        <div className="form-group">
                            <input className="form-input"
                                title="Email Enter"
                                type='email'
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={this.onChangeHandler}
                                style={{textTransform:"lowercase"}}
                            />

                            <div className="input-icon">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                        {
                            emailError ? <div style={{left: "-90px"}}  className="errorMsg"> {emailError}</div> : null
                        }
                        <div className="form-group" >
                            <input className="form-input"
                                title="Enter Password"
                                type='password'
                                placeholder="password"
                                name="password"
                                value={password}
                                onChange={this.onChangeHandler}
                            />
                            <div className="input-icon">
                                <i className="fas fa-user-lock"></i>
                            </div>
                        </div>
                        {
                            passwordError ? <div style={{left: "-90px"}}  className="errorMsg"> {passwordError}</div> : null
                        }
                        <div  > <ForgotCall /> </div><br />
                        <button type="submit" className='btnPosition btnLogin' >SignIn</button>
                    </form>
                </div>
            )
    }
}

