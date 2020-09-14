import React, { Component } from 'react'
import { Line } from "react-chartjs-2";
import axios from 'axios';

export default class OverallPerformance extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartdata: {
                labels: [],
                datasets: [
                    {
                        label: "Score",
                        data: [],
                        backgroundColor: "#e41749",
                    }
                ]
            }
          
        }
    }

    componentDidMount() {
        // const {data} = this.state.chartdata.datasets.data;

        let token = localStorage.getItem("token")
        const options = {
            method: "GET",
            headers: {
                "x-access-token": token,
            },
            url: "http://localhost:5000/gatescholar/overallperformance",
        };
        axios(options)
            .then(res => {
                // console.log("from overall comdidid", res.data.score);
                let dataArray = res.data.score
                let i
                for( i in dataArray){
                        if(dataArray[i] >= 0){
                            dataArray[i] = Math.floor(dataArray[i]) + "." + Math.floor((dataArray[i]*100)%100)
                        }
                        else{
                            dataArray[i] = Math.ceil(dataArray[i]) +"." + Math.ceil((dataArray[i]*100)%100)*(-1)
                        }
            
            }
            // console.log(dataArray, "from did data Array............")
                this.setState({
                    chartdata: {
                        labels: res.data.month,
                        datasets: [{
                            label: "Score",
                            data: dataArray,
                            backgroundColor: "#e41749",
                        }]
                    }
                })
            })
            .catch(err => {
                console.log(err);
            })

    }

    render() {
        const {chartdata} = this.state
    //    console.log(chartdata, "from render chart data.........." )
        return (
            <div className="chart">
                <Line
                    data={this.state.chartdata}
                    width={500}
                    options={{
                        legend: {
                            display: false,
                        },
                        // tooltips:{
                        //     backgroundColor:"rgba(0, 0, 255, 1)",
                        //     titleSpacing:6,
                        //     // titleFontFamily:"",
                        //     titleFontColor:"#fff"
                        // },
                        responsive: true,
                        // layout: {
                        //     padding: {
                        //         left: 0,
                        //         right: 0,
                        //         top: 0,
                        //         bottom: 0
                        //     }
                        // },
                        scales: {
                            // xAxes:[{
                            //     type:'time',
                            //         time:{
                            //             unit:'month',
                            //         }
                            // }],
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
        )
    }
}
