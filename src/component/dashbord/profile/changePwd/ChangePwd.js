import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const initialState = {


    oldPassword: '',
    newPassword: '',
    cpassword: '',

    emailError: "",
    oldPassError: "",
    newPassError: "",
    cPassError: "",
}
export default class ChangePwd extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            oldPassword: '',
            newPassword: '',
            cpassword: '',

            emailError: "",
            oldPassError: "",
            newPassError: "",
            cPassError: "",
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    UpdatePassHandler = (res) => {
        let emailError = "";
        let oldPassError = "";
        let newPassError = "";
        let cPassError = "";

        if (res == "invalid emailId" || this.state.email == "") {
            emailError = "invalid emailId"
        }
        console.log(this.state.oldPassError)
        if (res == "invalid password" || this.state.oldPassword == "") {
            oldPassError = "Invalid password"
        }
        if (res == "") {
            newPassError = "Invalid Password"
        }
        if (this.state.newPassword != this.state.cpassword) {
            cPassError = "Password Not Match"
        }
        //////////////////////////////////////////////////

        if (emailError) {
            this.setState({ emailError })
            return false
        }
        else {
            emailError = ""
            this.setState({ emailError })
        }

        if (oldPassError) {
            this.setState({ oldPassError })
            return false
        }
        else {
            oldPassError = ""
            this.setState({ oldPassError })
        }
        if (newPassError) {
            this.setState({ newPassError })
            return false
        }
        else {
            newPassError = ""
            this.setState({ newPassError })
        }
        if (cPassError) {
            this.setState({ cPassError })
            return false
        }
        else {
            cPassError = ""
            this.setState({ cPassError })
        }
        return true

    }

    onSumitHandler = (e) => {
        e.preventDefault()
        let isUpdate = this.UpdatePassHandler(this.state.newPassword)
        console.log(this.state.newPassword)
        if (isUpdate) {
            console.log(this.state)
            let updatePass = {
                email: this.state.email,
                oldPassword: this.state.oldPassword,
                newPassword: this.state.newPassword,
            }

            let token = localStorage.getItem("token")
            const options = {
                method: "PUT",
                headers: {
                    "x-access-token": token,
                },
                url: "http://localhost:5000/gatescholar/updatepassword",
                data: updatePass,
            };
            axios(options)
                .then(res => {
                    console.log(res)
                    isUpdate = this.UpdatePassHandler(res.data)
                    if (isUpdate) {
                        alert(res.data)
                        this.setState(initialState)
                    }

                })
                .catch(err => {
                    console.log(err);
                })


        }

    }

    componentDidMount() {

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
              let  email = res.data.email
              this.setState({email})
            })
            .catch(err => {
                console.log(err);
            })

    }




    render() {
        const { email, newPassword, oldPassword, cpassword } = this.state;
        const { emailError, oldPassError, newPassError, cPassError } = this.state;
        return (
            <div className="pass-change">
                <h2> Change Password </h2>
                <form onSubmit={this.onSumitHandler} >
                    <div className="pass-group">

                        <input className="pass-input"
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={this.onChangeHandler}
                            style={{ textTransform: "lowercase" }}
                        />
                    </div>
                    {
                        emailError ? <div className="errorMsg" >
                            {emailError}
                        </div> : null
                    }

                    <div className="pass-group">
                        <input className="pass-input"
                            type="password"
                            placeholder="Old Password"
                            name="oldPassword"
                            value={oldPassword}
                            onChange={this.onChangeHandler}
                        />
                    </div>
                    {
                        oldPassError ? <div className="errorMsg">
                            {oldPassError}
                        </div> : null
                    }

                    <div className="pass-group">
                        <input className="pass-input"
                            type="password"
                            placeholder="New Password"
                            name="newPassword"
                            value={newPassword}
                            onChange={this.onChangeHandler}
                        />
                    </div>

                    {
                        newPassError ? <div className="errorMsg">
                            {newPassError}
                        </div> : null
                    }

                    <div className="pass-group">
                        {/* <label >Conform Password</label> */}
                        <input className="pass-input"
                            type="password"
                            placeholder="Confirm Password"
                            name="cpassword"
                            value={cpassword}
                            onChange={this.onChangeHandler}
                        />
                    </div>

                    {
                        cPassError ? <div className="errorMsg">
                            {cPassError}
                        </div> : null
                    }

                    <button className="profile-btn" >Submit</button>

                </form>
            </div>
        )
    }
}


