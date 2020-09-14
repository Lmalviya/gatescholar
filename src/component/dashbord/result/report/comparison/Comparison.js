import React, { Component } from 'react';
import "./Comparison.scss";
import {Redirect} from 'react-router-dom';
import ComparisonInfo from './comContent/ComparisonInfo';
import ComparisonChart from './comContent/ComparisonChart';
import axios from 'axios';

export default class Comparison extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userComparison : [],
             comparisonChart : []
        }
    }
    
    componentDidMount(){

        let token = localStorage.getItem("token")
        let examid = localStorage.getItem("examid")
        const options = {
            method: "POST",
            headers: {
              "x-access-token": token,
            },
            url: "http://localhost:5000/gatescholar/top10studentcompare",
            data: {examid : examid},
          };
          axios(options)
          .then(res => {
            // console.log(res.data, "from component did mound from chamaision charet////////////////////////////////")

            this.setState({
              userComparison : res.data,
              comparisonChart : {
                labels : res.data.labels,
                data : res.data.data
              }
            })
            
          })
          .catch(err => {
            console.log(err);
          })

    }

    render() {
      if(this.state.comparisonChart !== null){
        const {userComparison, comparisonChart} = this.state
        // console.log(comparisonChart, "from render from comparidkf")
            return (
                <div className="comparisonContainer">
                    <div className="comparisonUpperSection">
                        <ComparisonInfo userComparison={userComparison} />
                    </div>
                    <div className="comparisonLowerSection">
                        <ComparisonChart comparisonChart={comparisonChart} />
                    </div>
                </div>
            )
      }
      else{
        console.log("from else")
        return null
      }
       

    }
}
