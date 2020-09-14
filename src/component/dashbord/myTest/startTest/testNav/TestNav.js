import React, { Component } from 'react';
import "./TestNav.scss";
import BrandLogo from  '../../../../../img/login/logo_update3.svg';

export default class TestNav extends Component {
    render() {
        return (
            <div className="test_upperNav" >
               <div className="brandHeading" >
                    <img className="brandHeadingLogo" src={BrandLogo} />
                    <h1>Gate Scholar</h1>
                </div>
            </div>
        )
    }
}
