import React, { Component } from 'react';
import { Link } from "react-router-dom";
import LogoImg from '../../img/login/logo_update.svg';
import './Navbar.scss';


export default class Navbar extends Component {
    constructor(props) {
        super(props)
        let token = localStorage.getItem("token")
        let loggedIn = true
        if (token === null) {
            loggedIn = false
        }
        this.state = {
            loggedIn: loggedIn
        }
    }
    clickHandler = () =>{
        window.location.reload();
      }

    render() {
        let isVerified = false
        let token = localStorage.getItem("token")
        if (token != null) {
            isVerified = true
        }
        if (isVerified) {
            return (
                <div className='container'>
                    <div className='header'>
                        <div style={{alignItems:"center"}} >
                            <Link to="/"><img className="NavBrandLogo" src={LogoImg} alt="Brand Logo" /></Link>
                        </div>
                        <div className='right-side'>
                            <ul className='nav-links'>
                                <li className='nav-link'><Link to="/" >Home</Link></li>
                                <li className='nav-link'><Link to="/dashbord" >Dashbord</Link></li>
                                <li className='nav-link'><Link to="/about" >About</Link></li>
                                {/* <li className='nav-link'><button onClick={this.clickHandler} >Logout</button></li> */}
                                <li className="tooltip nav-link">
                                    <Link to="/logout" onClick={this.clickHandler} >
                                    <i className="fas fa-sign-out-alt"></i>
                                    <span className="tooltiptext"><i className="fas fa-caret-up"></i> Log Out</span>
                                    </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className='container'>
                    <div className='header'>
                        <div >
                            <Link to="/"><img src={LogoImg} alt="Brand Logo" /></Link>
                        </div>
                        <div className='right-side'>
                            <ul className='nav-links'>
                                <li className='nav-link'><Link to="/" >Home</Link></li>
                                {/* <li className='nav-link'><Link to="/dashbord" >Dashbord</Link></li> */}
                                <li className='nav-link'><Link to="/about" >About</Link></li>
                                <li className='nav-link'><Link to="/login"  >Login</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }

    }
}


