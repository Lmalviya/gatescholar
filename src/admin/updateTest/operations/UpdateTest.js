import React from 'react';
import './UpdateTest.scss';
import {withRouter, Link} from "react-router-dom";
import Clogo from '../../../img/logo.svg';
import UserInfo from '../../userInfo/UserInfo'; 
import Axios from 'axios';

class UpdateTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // activePath: props.location.pathname,
            items: [
                {
                    type:"Full Test",
                    testName:"gate 2010",
                    totalQustion:65,
                    maxMarks:100,
                    time:180,
                },
                {
                    
                    type:"Full Test",
                    testName:"gate 2017",
                    totalQustion:65,
                    maxMarks:100,
                    time:180,
                },
                {
                    type:"Full Test",
                    testName:"gate 2020",
                    totalQustion:65,
                    maxMarks:100,
                    time:180,
                },
                {
                    type:"Full Test",
                    testName:"gate 2019",
                    totalQustion:65,
                    maxMarks:100,
                    time:180,
                },
                {
                    type:"Full Test",
                    testName:"gate 2018",
                    totalQustion:65,
                    maxMarks:100,
                    time:180,
                  },
              ]
        }
    }

    render() {
        const { items } = this.state;
        return(
            <div id="updateContainer" >
                {
                    items.map((item, index) => {
                        return (
                            <TestItem 
                            key={index}
                                type={item.type}
                                testName={item.testName}
                                totalQustion={item.totalQustion}
                                maxMarks={item.maxMarks}
                                time={item.time}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

const RouteTestContent = withRouter(UpdateTest); 

class TestItem extends React.Component {
    deleteHandler=()=>{
        let testId = this.props.type
        alert("test is deleted successful....", testId)
        Axios.post("ffdfd", testId)
        .then(res => {
            alert("test is deleted successful....", testId)
        })

    }
    render() {
        const {testName} = this.props
        return(
            <div className="updateTestContainer">
            <div className="updateTestContent">
                <div className="update-item">
                    {/* ****************************************************************************** */}
                    <div className="u-upperSection">
                        <div className="Ucircle">
                            <div className="Ucircle-inner">
                                <img src={Clogo} alt="Logo" />
                            </div>
                        </div>
                        <div className="Uheading">
                            <p>{this.props.type}</p>
                            <h3>{this.props.testName}</h3>
                        </div>
                       
                    </div>
                    {/* ******************************************************************************** */}
                    <div className="u-lowerSection">
                        <div className="info-section">
                            <p>Total Q.</p>
                            <p>{this.props.totalQustion}</p>
                        </div>
                        <div className="info-section">
                            <p>Max marks</p>
                            <p>{this.props.maxMarks}</p>
                        </div>
                        <div className="info-section">
                            <p>time</p>
                            <p>{this.props.time}</p>
                        </div>
                        
                        <div className="update-btn-section">
                            <button className="profile-btn" type="button" >
                            <Link to={
                                    {
                                        pathname: '/admin/viewtest',
                                        state: {
                                            componentId: { testName }
                                        }
                                    }
                                } >
                                    View
                                </Link>
                            </button>
                        </div>

                        <div className="update-btn-section">
                            <button className="profile-btn" type="button" onClick={this.deleteHandler } >Delete</button>
                            {/* <button onClick={()=> this.deleteHandler} >Delete </button> */}
                        </div>
                    </div>
                    {/* ***************************************************************************************** */}
                </div>
            </div>
        </div>
        );
    }
}

export default class Update extends React.Component {
    render() {
        return (
            <RouteTestContent></RouteTestContent>
        );
    }
}