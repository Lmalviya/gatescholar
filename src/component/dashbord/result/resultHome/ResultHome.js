import React from 'react';
import "./ResultHome.scss";
import "./Loader.scss"
import { Link, withRouter } from "react-router-dom";
import Clogo from '../../../../img/login/logo_update2.svg';
import axios from 'axios';

export default class ResultContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],

            // items: [
            //     {
            //         id: "",
            //         type: "",
            //         testName: "",
            //         attemptQ: 0,
            //         rightQ: 0,
            //         wrongQ: 0,
            //         yourM: 0,
            //         negativeM: 0,
            //         path: '/dashbord/result/report', /* path is used as id to check which NavItem is active basically */
            //         name: 'report',
            //     }
            // ]
        }
    }

    componentDidMount() {

        let token = localStorage.getItem("token")
        const options = {
            method: "GET",
            headers: {
                "x-access-token": token,
            },
            url: "http://localhost:5000/gatescholar/resultall",
        };
        axios(options)
            .then(res => {
                console.log("from component did mount.......................", res.data)
                this.setState({
                    items: res.data,
                })

            })
            .catch(err => {
                console.log(err);
            })

    }

    render() {
        const { items } = this.state;
        let itemsLength = items.length
        // let itemsLength = 0
        if (itemsLength != 0) {
            console.log("from rander...........................", items)
            // let items = []
            // let itemsLength = items.length
            if (itemsLength == 0) {
                return (
                    <div className="r-homeBox" >
                        <div className="myTestEmpty" >
                            <div className="shadow" >No Test Attempt Yet</div>
    
                        </div>
                    </div>
                )
            }
    
            return (
                <div className="r-homeBox" >
                    {
                        items.map((item, index) => {
                            return (
                                <TestItem
                                    key={index}
                                    id={item.id}
                                    testName={item.testName}
                                    attemptQ={item.attemptQ}
                                    rightQ={item.rightQ}
                                    wrongQ={item.wrongQ}
                                    yourM={item.yourM}
                                    negativeM={item.negativeM}
                                />
                            );
                        })
                    }
                </div>
            );
        }
        else{
            return(
                <div className="ResultLoader" >
                    <div class="sk-cube-grid">
  <div className="sk-cube sk-cube1"></div>
  <div className="sk-cube sk-cube2"></div>
  <div className="sk-cube sk-cube3"></div>
  <div className="sk-cube sk-cube4"></div>
  <div className="sk-cube sk-cube5"></div>
  <div className="sk-cube sk-cube6"></div>
  <div className="sk-cube sk-cube7"></div>
  <div className="sk-cube sk-cube8"></div>
  <div className="sk-cube sk-cube9"></div>
</div>
                </div>
            )
        }
      
        
        

    }
}

// const RouteResultContent = withRouter(ResultContent);

class TestItem extends React.Component {

    setExamIdHandler = () => {
        localStorage.setItem("examid", this.props.id)
    }
    render() {
        const {
            id, testName, attemptQ,
            rightQ, wrongQ, yourM, negativeM,
        } = this.props;
        // const path = 'dashbord/result/report';
        return (

            <div className="ResultContainer">
                <div className="ResultContent">
                    <div className="Result-item">
                        {/* ****************************************************************************** */}
                        <div className="r-upperSection">
                            <div className="Rcircle">
                                <div className="Rcircle-inner">
                                    <img className="clogo" src={Clogo} alt="Logo" />
                                </div>
                            </div>
                            <div className="Rheading">
                                <p>Full Length</p>
                                <h3>{testName}</h3>
                            </div>
                        </div>
                        {/* ******************************************************************************** */}
                        <div className="r-lowerSection">
                            <div className="info-section">
                                <p>Attempt Q.</p>
                                <p>{attemptQ}</p>
                            </div>
                            <div className="info-section">
                                <p>Right Q.</p>
                                <p>{rightQ}</p>
                            </div>
                            <div className="info-section">
                                <p>Wrong Q.</p>
                                <p>{wrongQ}</p>
                            </div>
                            <div className="info-section">
                                <p>your marks</p>
                                {
                                    yourM >= 0 ? <> <p>{Math.floor(yourM) + "." + Math.floor((yourM * 100) % 100)}</p>  </> : <> <p>{Math.ceil(yourM) + "." + Math.ceil((yourM * 100) % 100) * (-1)}</p></>
                                }

                            </div>
                            <div className="info-section">
                                <p>wrong marks</p>
                                {
                                    negativeM >= 0 ? <>
                                        <p>{Math.floor(negativeM) + "." + Math.floor((negativeM * 100) % 100)}</p></> : <>
                                            <p>{Math.ceil(negativeM) + "." + Math.ceil((negativeM * 100) % 100) * (-1)}</p></>
                                }

                            </div>
                            <div className="btn-section">
                                <button type="button" className="profile-btn resultBtn" onClick={this.setExamIdHandler} >
                                    <Link to="/dashbord/result/report/" > Report </Link>
                                </button>
                            </div>
                        </div>
                        {/* ***************************************************************************************** */}
                    </div>
                </div>
            </div>

        );
    }
}