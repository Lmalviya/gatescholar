import React, { Component } from 'react';
import axios from 'axios';

const initialState = {
    fullName: '',
    email: '',
    password: '',
    cpassword: '',
    isDisable: true,
    backGround: "gray",

    nameError: "",
    emailError: "",
    passwordError: "",
    cpasswordError: "",
    matchingError: "",
}
export default class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = initialState
    }

    onChangeHandler = (e) => {
        // const {fullName, email, password, cpassword} = this.state
        this.setState({
            [e.target.name]: e.target.value,
        })

    }
    formValidation = () => {
        let nameError = "";
        let emailError = "";
        let passwordError = "";
        let cpasswordError = "";
        let matchingError = "";
        if (!this.state.fullName) {
            nameError = "Name must be filled out"
        }
        if (!this.state.email.includes("@")) {
            emailError = "Invalid Email"
        }
        if (!this.state.password) {
            passwordError = "Invalid Password"
        }
        if (!this.state.cpassword) {
            cpasswordError = "Invalid Password"
        }
        if (this.state.password != this.state.cpassword) {
            matchingError = "Passwords do not match."
        }

        ///// check the error 
        if (nameError) {
            this.setState({ nameError });
            return false;
        }
        else { this.setState({ nameError: "" }); }

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

        if (cpasswordError) {
            this.setState({ cpasswordError });
            return false;
        }
        else { this.setState({ cpasswordError: "" }); }

        if (this.state.password != this.state.cpassword) {
            this.setState({ matchingError });
            return false;
        }
        else { this.setState({ matchingError: "" }); }

        return true

    }

    onSubmitHandler = (e) => {
        const isValid = this.formValidation();
        if (isValid) {
            console.log(this.state)
            //clear the state
            this.setState(initialState)
        }

        e.preventDefault()
        let userInfo = {
            fullName: this.state.fullName,
            email : this.state.email,
            password: this.state.password,
        }

        let token = localStorage.getItem("token")
        const options = {
            method: "POST",
            headers: {
              "x-access-token": token,
            },
            url: "http://localhost:5000/gatescholar/signup",
            data: userInfo,
          };
          axios(options)
          .then(res => {
                console.log(res.data)
                if(res.data.message != undefined){
                    return alert(res.data.message)
                }
          })
          .catch(err => {
            console.log(err);
          })


    }

    render() {
        const { fullName, email, password, cpassword, isDisable, backGround } = this.state;
        const { nameError, emailError, passwordError, cpasswordError, matchingError } = this.state;
        return (
            <form onSubmit={this.onSubmitHandler}>
                <div className="form-group">
                    <input className="form-input"
                        type="text"
                        placeholder="Full Name"
                        name="fullName"
                        value={fullName}
                        onChange={this.onChangeHandler}
                        style={{textTransform:"uppercase"}}
                    />
                </div>
                {
                    nameError ? <div  className="errorMsg">{nameError}</div> : null
                }
                <div className="form-group">
                    <input className="form-input"
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={this.onChangeHandler}
                        style={{textTransform:"lowercase"}}
                    />
                </div>
                {
                    emailError ? <div  className="errorMsg">{emailError}</div> : null
                }
                <div className="form-group">
                    <input className="form-input"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={this.onChangeHandler}
                    />
                </div>
                {
                    passwordError ? <div  className="errorMsg">{passwordError}</div> : null
                }
                <div className="form-group">
                    <input className="form-input"
                        type="password"
                        placeholder="Confirm Password"
                        name="cpassword"
                        value={cpassword}
                        onChange={this.onChangeHandler}
                    />
                </div>

                {
                    cpasswordError ? <div className="errorMsg"> {cpasswordError} </div> : null
                }
                {
                    matchingError ? <div className="errorMsg" > {matchingError} </div> : null
                }
                <button className="btnPosition btnLogin" onClick={this.onSubmitHandler} >SignUp</button>

            </form>
        )
    }
}
