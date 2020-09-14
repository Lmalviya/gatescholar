import React from 'react';
import "./About.scss";
import {Link} from 'react-router-dom';
import LImg from '../../img/about-left.svg';
import RImg from '../../img/About.svg'

import Card from './card/Card';
import Contect from './contect/Contect';

function About() {
    return (
        <div className='content'>
            <div className="aboutUs">
                <div className="leftSide">
                    <div className="leftImg">
                        <img className="lImg" src={LImg} />
                    </div>
                    <div className='abt-content'>
                        
                        <h1 className="abt-heading" >About Us</h1>
                            <p className='abt-text'>
                            At our heart lies the belief that people prepare
                            better when they prepare together by questioning,
                            helping & challenging each other. Hence at the very 
                            core of our being lies a community of students & 
                            expert mentors.
                            </p>
                            
                            <Link className="btn" to="/dashbord" ><span>Let's Start</span></Link>
                            
                    </div>
                    
                </div>
                <div className="rightSide">
                    <div className='rightImg'>
                        <img className="rImg" src={RImg} alt="About Image" />
                    </div>
                </div>
            </div>

            {/* **************team member descriptions**************** */}
            <div className="teamDescription">
                <div className="teamheading">
                    <h1>TEAM</h1>
                    <p>Hi, Thankyou for Visiting Our Website</p>
                </div>
                <Card />
            </div>
        

            {/* *************contect us*********************** */}

            <div className='teamContect'>
                <Contect />
            </div>
       
        
        </div>
    )
}

export default About;
