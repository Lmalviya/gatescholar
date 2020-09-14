import React from 'react';
import './MyTest.scss'
import Clogo from '../../../img/login/logo_update2.svg';
import Axios from 'axios';



export default class TestContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }


    componentDidMount() {

        let token = localStorage.getItem("token")
        const options = {
            method: "GET",
            headers: {
                "x-access-token": token,
            },
            url: "http://localhost:5000/gatescholar/mytest",
        };
        Axios(options)
            .then(res => {
                console.log('from component didi moutnkjdfdjfdjfjdkjfkdjfdf', res.data.data)

                this.setState({ items: res.data.data })
            })
            .catch(err => {
                console.log(err);
            })


    }

    render() {
        console.log(this.state.items.length)
        let length = this.state.items.length
        if (length == 0) {
            return (
                <div className="r-homeBox" >
                    <div className="myTestEmpty" >
                        <div className="shadow" >No Test Available</div>

                    </div>
                </div>
            )
        }

        if (this.state.items.length != 0) {

            // console.log(this.state.items[0].id, "lenght of array")
            console.log(this.state.items.length)
        let length = this.state.items.length
        if (length == 0) {
            return (
                <div className="r-homeBox" >
                    <div className="myTestEmpty" >
                        <div className="shadow" >No Test Available</div>

                    </div>
                </div>
            )
        }

            const { items } = this.state;
            // console.log("from Test Content...............")
            console.log("from testing area ", items)
            return (
                <div className="r-homeBox">
                    {
                        items.map((item, index) => {
                            return (
                                <TestItem
                                    key={index}
                                    id={item.id}
                                    type={item.type}
                                    testName={item.testName}
                                    totalQuestion={item.totalQuestion}
                                    maxMarks={item.maxMarks}
                                    time={item.time}
                                />
                            );
                        })
                    }
                </div>
            );
        }
        return (
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


class TestItem extends React.Component {

    // startTest = () => {
    //     // localStorage.setItem("startTest", "start")
    //     console.log(localStorage.getItem("startTest"), "from my Test22222.......")

    // }


    callFunction = () => {

        let start = "examStart"
        let examID = this.props.id

        // localStorage.setItem("examid", examid)
        localStorage.setItem("startTest", start)
        localStorage.setItem("examid", examID)
        console.log("from my Test1.......", examID, "000000000000000000000")
        window.open("http://localhost:3000/instruction")
    }
    render() {
        console.log("from TestItem area.......dgdfhgjhkjlj..............")

        const { type, testName, totalQuestion, maxMarks, id } = this.props



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
                                <p>{this.props.type}</p>
                                <h3>{this.props.testName}</h3>
                            </div>
                        </div>
                        {/* ******************************************************************************** */}
                        <div className="r-lowerSection">
                            <div className="info-section">
                                <p>Total Q.</p>
                                <p>{this.props.totalQuestion}</p>
                            </div>
                            <div className="info-section">
                                <p>Max marks</p>
                                <p>{this.props.maxMarks}</p>
                            </div>
                            <div className="info-section">
                                <p>time</p>
                                <p>{this.props.time}</p>
                            </div>

                            <div className="mytest-btn-section">
                                <button className="profile-btn" type="button"
                                    onClick={this.callFunction}
                                // target="_blank" onClick={(e) => {
                                //     e.preventDefault();
                                //     window.open("http://localhost:3000/instruction")
                                // }} 

                                >Start</button>



                            </div>
                        </div>
                        {/* ***************************************************************************************** */}
                    </div>
                </div>
            </div>
        );
    }
}

