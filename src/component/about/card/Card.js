import React, { Component } from 'react';
// import Mphoto from "../../../img/Member1.jpeg"
import "./Card.scss";
import Lphoto from '../../../img/lakhan.jpg';
import Sphoto from '../../../img/swati.jpg';
import Nphoto from '../../../img/neha.jpg';

export default class Card extends Component {
    render() {
        return (
            <div className="teamContainer">
                <div className="teamCard">
                    <div className="teamImg">
                        <img className="mPhoto" src={Lphoto} />
                    </div>
                    <div className="teamContent">
                        <h2>Lakhan Malaviya<br />
                            <span>UX/UI Designer & Developer</span>
                        </h2>
                        <ul>
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div className="teamCard">
                    <div className="teamImg"> <img className="mPhoto" src={Nphoto} /></div>
                    <div className="teamContent">
                        <h2>Neha Gupta<br />
                            <span>Back End Developer</span>
                        </h2>
                        <ul>
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div className="teamCard">
                    <div className="teamImg"> <img className="mPhoto" src={Sphoto} /></div>
                    <div className="teamContent">
                        <h2>Swati Upadhyay<br />
                            <span>DataBase Developer</span>
                        </h2>
                        <ul>
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}
