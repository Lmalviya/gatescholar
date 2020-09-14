import React, { Component } from 'react';
import {Bar} from "react-chartjs-2";
import axios from 'axios';


export default class ScorePerformance extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartdata: {
                labels: ["Max Marks", "Your Marks"],
                datasets: [{
                    label: "Score Performance",
                    data: [],
                    backgroundColor: [],
                },
                ]
            }
        }
    }

// componentDidMount(){
//      let getMark = this.props.scorePerformence
     
    //  if(getMark >= 0){
    //     getMark =  Math.floor(getMark) + "." + Math.floor((getMark * 100) % 100) 
    //     // getMark = (Math.round(getMark * 100) / 100).toFixed(2);
    //  }
    //  else{
    //     getMark = Math.floor(getMark) + "." + Math.ceil((getMark * 100*(-1)) % 100) 
    //     // getMark = (Math.round(getMark * 100) / 100).toFixed(2)*(-1);
    //  }

    //  console.log(getMark, "component", typeof(getMark))
//     let dataArray = []
//     dataArray[0] = 100
//     dataArray[1] =  getMark
//     this.setState({
//         chartdata :{
//             labels: ["Max Marks", "Your Marks"],
//             datasets : [{
//                 data : dataArray,
//                 backgroundColor: ["#FF6384","#4BC0C0"],
//             }]
//         }
//     })
// }
    render() {
        // console.log("score performance....", this.props.scorePerformence)
        if(this.props.scorePerformence != undefined ){
            // console.log(this.state.chartdata.datasets[0].data, "dataset")
           
            let  scoreNumber = this.props.scorePerformence
        
            if(scoreNumber >= 0){
                scoreNumber =  Math.floor(scoreNumber) + "." + Math.floor((scoreNumber * 100) % 100) 
             }
             else{
                scoreNumber = Math.ceil(scoreNumber) + "." + Math.ceil((scoreNumber * 100*(-1)) % 100) 
             }


             scoreNumber = parseFloat(scoreNumber, 10);
            //  console.log(scoreNumber, "from render before return.........", typeof(scoreNumber))


             let tempArray = []
             tempArray[0] = 100
             tempArray[1] = scoreNumber
             let dataArray = {
                labels: ["Max Marks", "Your Marks"],
                datasets: [{
                    label:"Score Performance ",
                    data: tempArray,
                    backgroundColor: ["#FF6384","#4BC0C0"],
                },
                ]
            }

            // console.log(dataArray, "from render data array///////")
            return (
                <div className="PerformanceContainer">
                    <div className="performanceHeading">
                       <h3> Performance Report </h3>
                    </div>
                    <div className="percormanceChart">
                        <Bar
                            data={dataArray}
                            width={500}
                            height={200}
                            options={{
                                legend: {
                                    display: false,
                                },
                                responsive: true,
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            suggestedMin: 0,
                                            suggestedMax: 100,
                                            stepSize: 20
    
                                        }
                                    }]
                                }
                            }}
                        />
                    </div>
                </div>
            )
        }
        else{
            return null
        }
      
    }
}
