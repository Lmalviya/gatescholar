import React, { Component } from 'react';
import Axios from 'axios';

const initialState = {
    email: '',
    emailError: "",
    emailStatus: "",

    isLoading: 0,
    isDisabled: false,
}

export default class UploadPhoto extends Component {
    constructor(props) {
        super(props)

        this.state = initialState;
    }
    placeChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onClickClear = (e) => {
        this.setState(initialState)
    }
    submitHandler = () => {
        let isValid = this.validation();
        if(isValid){
            this.setState({
                isLoading: 1,
                isDisabled: true,
            })
            console.log(this.state.email, "from ckeck email")
            let emailN = this.state.email
            Axios.post("http://localhost:5000/gatescholar/forgotpassword", {email : emailN})
                .then(res =>  {
                    console.log(res.data, "from forgetPassword, did")
                    let laterValid = this.laterValidation(res.data)
                    if (laterValid) {
                        console.log(res.data)
                        this.setState({
                            isSuccess: res.data,
                            resultShow: true,
                            isLoading: 0,
                            isDisabled: false,
                        })
                    }
    
                })
                .catch(err => {
                    console.log(err)
                })
        }
        
    }

    laterValidation = (res) => {
        let emailStatus = ""
        if (res) {
            emailStatus = res
        }
        else{
            emailStatus = "This Account is not exit, Create Account"
        }

        if(emailStatus){
            this.setState({emailStatus})
            console.log(emailStatus)
        }
        return true
    }

    validation = () => {
        let emailError = ""
        if (!this.state.email.includes("@")) {
            emailError = "Invalid Email"
        }
        else{this.setState({emailError:""})}

        if (emailError) {
            this.setState({ emailError })
            console.log(emailError)
            return false
        }
        return true
    }

    render() {
        const { isLoading, email, isDisabled } = this.state;
        const { emailError, emailStatus} = this.state;
        const { isShow, isPosition } = this.props;
        return (
            <div className="forgotContainer"
                style={{
                    top: `${isPosition}px`,
                    opacity: `${isShow}`,
                    transition: "all 0.5s ease-in-out",

                }}
            >

                <div style={{
                    opacity: `${isLoading}`
                }} className="lds-ring"><div></div><div></div><div></div><div></div></div>


                <div className="forgotContent">
                    <div className="forgotHidenContent">
                        {
                            emailError ? <>{emailError} </> : null
                            
                        }
                        {
                            emailStatus ? <>{emailStatus} </> :null
                        }
                    </div>
                    <div className="forgotInputBox">
                        <input className="forgotInput"
                            type="email"
                            name='email'
                            value={email}
                            placeholder='Enter Email'
                            // disabled={`${isDisabled}`}
                            disabled={isDisabled}
                            onChange={this.placeChangeHandler}
                        />

                        <button type="button" className="profile-btn" onClick={this.submitHandler} disabled={isDisabled} >
                            Submit
                    </button>
                    </div>

                    <div className="forgotfooter">
                        <button type="button" className="profile-btn footerBtn" onClick={() =>{ this.props.onClickChange(0, -1000) }}>Close</button>
                        <button type="button" className="profile-btn footerBtn clear" onClick={this.onClickClear}>
                            Clear
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
