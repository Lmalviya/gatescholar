import React, { Component } from 'react';
import "./Contect.scss";
import Axios from "axios";

export default class Contect extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            textArea: ""
        }
    }

    msgChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    msgSubmitHandler = (e) => {
        console.log(this.state)
       this.setState({
           email : "",
           textArea : "",
       })
    alert("Message is Send Successfully")
    }
    render() {
        const { textArea, email } = this.state
        return (
            <div className="contectUs">
                <div className="contectLeft">
                    <h1>Contact Us</h1>
                    <p>Gatescholar@gmail.com</p>
                    <div className="socialMedia">
                        <ul>
                            <li><a href="#" className="fb" > <span><i className="fab fa-facebook-f"></i> </span> </a></li>
                            <li><a href="#" className="insta" ><span> <i className="fab fa-instagram"></i> </span> </a></li>
                            <li><a href="#" className="linked" > <span> <i className="fab fa-linkedin-in"></i> </span></a></li>
                        </ul>
                    </div>
                </div>
                <div className="contectRight">
                    <div className="msgFormBox" >
                        <form>
                            <label>Email : </label>
                            <input className="titleBox" type="text" name="email" value={email} onChange={this.msgChangeHandler} ></input><br />

                            <label>Message : </label><br />
                            <textarea className="areaBox" rows="9" cols="80" name="textArea" value={textArea} onChange={this.msgChangeHandler} type="text" ></textarea>
                            <br />
                            <button className="sendMsgBtn" type="button" onClick={this.msgSubmitHandler} >
                                <span> <i className="fas fa-paper-plane"></i></span>
                                send    
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        )
    }
}
