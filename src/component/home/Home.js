import React from 'react';
import "./Home.scss";
import {Link} from 'react-router-dom';
import Bimg from '../../img/background22.svg';
import ExamCart from './examCart/ExamCart';

function Home() {
    return (
        <div className="homeContainer">
            <div style={{minHeight:"100vh"}}>
            <img className="Bimg" src={Bimg} />

            {/* ************** first part********************* */}
            <div className="homeHeading">
                <h1>GateScholar</h1>
                <p className='homeper'>
                            At our heart lies the belief that people prepare
                            better when they prepare together by questioning,
                            helping & challenging each other. Hence at the very 
                            core of our being lies a community of students & 
                            expert mentors.
                            </p>

                            <Link className="btn" to="/dashbord" ><span>Let's Start</span></Link>
            </div>
            </div>
            {/* *******************second part************************* */}
            <div className="homeContent">
                <ExamCart />
            </div>
            
        </div>
    )
}

export default Home;
