import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./StartTestWindow.scss";
import BrandLogo from '../../img/login/logo_update3.svg'
// import Checkbox from "./CheckBox";

import a from '../../img/instruction/1.png';
import b from '../../img/instruction/2.png';
import c from '../../img/instruction/3.png';
import d from '../../img/instruction/4.png';
import e from '../../img/instruction/5.png';
import f from '../../img/instruction/6.png';
import g from '../../img/instruction/7.png';
import h from '../../img/instruction/8.png';
import i from '../../img/instruction/9.png';
import j from '../../img/instruction/10.png';
export default class Instructions extends Component {
    constructor(props) {
        super(props)

        this.state = {
            checked: false,
        }
    }

    reloadHandler = () => {
        return window.location.reload();
    }

    notAttemptTest = () => {
        localStorage.removeItem("startTest")
        alert("delete start test.................")
        window.close("http://localhost:3000/instruction")
    }


    handleCheckboxChange = event => {
        this.setState({ checked: event.target.checked })
        console.log("clicked", event.target.checked)
    }


    componentWillUnmount() {

        if (!this.state.checked) {
            // localStorage.removeItem("startTest")
            alert("delete start test.................")
            window.close("http://localhost:3000/instruction")
        }

    }
    componentDidMount() {
        console.log(localStorage.getItem("startTest"), "local storag from start window")
    }
    render() {
        const { checked } = this.state
        return (
            <div className="startTestInstructionsContainer">
                {/* <div id="goBackBtnId" >
                    <button className="goBackBtn" type="button" >
                        <Link to="/test" ><i class="fas fa-times"></i> </Link></button>
                </div> */}
                <div className="brandHeading instructionNavBar, instructionHeading" >
                    <img src={BrandLogo} />
                    <h2>INSTRUCTIONS</h2>
                </div>
                {/* <div className="instructionHeading" >
                <img src={BrandLogo} />
                    <h2>INSTRUCTIONS</h2>
                </div> */}
                <div className="startTestInstructionsContent">
                    <img className='img-A img1' src={a} alt="image" />
                    <img className='img-B img1' src={b} />
                    <img className='img-C img1' src={c} />
                    <img className='img-D img1' src={d} />
                    <img className='img-E img1' src={e} />
                    <img className='img-F img1' src={f} />
                    <img className='img-G img1' src={g} />
                    <img className='img-H img1' src={h} />
                    <img className='img-I img1' src={i} />
                    <img className='img-J img1' src={j} />
                </div>
                <div>
                    <div className="checkBox" >
                        <input className="checked"
                            type="checkbox"
                            checked={this.state.checked}
                            onClick={this.handleCheckboxChange} />
                        <label>I'm ready for test</label>

                        <div >
                            {
                                checked ? <>
                                    {
                                        checked ? <button className="startTestBtn" type="button"
                                            onClick={this.reloadHandler}
                                        >

                                            <Link to="/test" > Start </Link>
                                        </button> : null
                                    }
                                </> : <>
                                        {
                                            <button className="startTestBtn" type="button"
                                                onClick={this.notAttemptTest}
                                            >
                                                Not Start
                                            {/* <Link to="/test" > Not Start </Link> */}
                                            </button>
                                        }
                                    </>
                            }

                        </div>
                    </div>


                </div>
                {/* <Link to="/test" > test </Link> */}
            </div>
        )
    }
}
