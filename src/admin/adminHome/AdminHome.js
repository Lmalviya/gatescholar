import React, { Component } from 'react';
import "./AdminHome.scss";
import TopScoreList from './TopScoreList';


export default class AdminHome extends Component {

    constructor(props) {
        super(props)

        this.state = {
            enrolled: 500,
            testList: [{
                testId: "gate2020",
                testName: "Gate 2020",
            }],


            currentTestId: "",

        }
    }


    changeTest = (event) => {
        console.log("from test ", event.target.value)

        this.setState({
            currentTestId: event.target.value
        })
    }

    render() {
        const { testId, testList } = this.state
        const { enrolled } = this.state
        return (
            <div className="adminHomeContainer" >

                {/* top 10students */}
         
                    <div className="testListFilter" >
                        {/* filter  */}

                        <label>Test</label>
                        <select  value={testId} onChange={this.changeTest} >
                            <option value="" >Select Paper</option>
                            {
                                testList.map((item, index) => <option key={index} value={item.testId}>{item.testName}</option>)
                            }
                        </select>

                    </div>

                    <div>
                        <TopScoreList testId={testId} />
                    </div>
             

            </div>
        )
    }
}
