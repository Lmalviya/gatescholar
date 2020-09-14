import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';


export default class ScoreAnalysis extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countNum : 1,
            chartdata: {
                datasets: [{
                    data: [],
                    backgroundColor: [],
                    // backgroundColor: ["#FF6384","#4BC0C0","#FFCE56","#E7E9ED","#36A2EB"],
                    label: 'Analysis' // for legend
                }],
                labels: [
                    "Right Marks",
                    "Negative Marks",
                    "Left Marks",
                    "Correct Question",
                    "Incorect Question"
                ]
            }
        }
    }

    componentDidMount(){

         this.myFunction = setInterval(()=>{

            let dataArray = this.props.scoreAnalysis
            if(dataArray[1] >= 0){
                dataArray[1] =  Math.floor(dataArray[1]) + "." + Math.floor((dataArray[1] * 100) % 100) 
             }
             else{
                dataArray[1] = Math.ceil(dataArray[1]) + "." + Math.ceil((dataArray[1] * 100) % 100) * (-1)
             }

            this.setState({
                countNum : this.state.countNum - 1,
                chartdata : {
                    datasets : [{
                        data : dataArray,
                        backgroundColor: ["#FF6384","#4BC0C0","#FFCE56","#E7E9ED","#36A2EB"],
                    }],
                    labels: [
                        "Right Marks",
                        "Negative Marks",
                        "Left Marks",
                        "Correct Question",
                        "Incorect Question"
                    ]
                }
            })
         }, 100)
    }


    render() {
        // console.log(this.props.scoreAnalysis, "score anaylsis charte ...")
        // if(this.state.countNum < 0){
        //     clearInterval(this.myFunction)
        // }
        
        if(this.props.scoreAnalysis.length != 0)
        {  
            //  console.log(this.state.chartdata.datasets[0].data.length, "data")
        let length = this.state.chartdata.datasets[0].data.length
        if(length > 2){
            clearInterval(this.myFunction)
        }
            return (
                <div className="PerformanceContainer">
                    <div className="performanceHeading">
                        <h3>Score Analysis</h3>
                    </div>
                    <div className="percormanceChart">
                        <Doughnut
                            data={this.state.chartdata}
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
            return <h1>hello</h1>
        }
    
    
    }
}
