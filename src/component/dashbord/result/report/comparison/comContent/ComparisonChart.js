import React, { Component } from 'react'
import { Bar } from "react-chartjs-2";
import axios from 'axios';

export default class ComparisonChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartdata: {
                labels: [],
                datasets: [{
                    label: "Top 10 Scores",
                    data: [],
                    backgroundColor: "#49beb7",
                }
                ]
            }
        }
    }
    componentDidMount() {
        const { comparisonChart } = this.props
        console.log(comparisonChart, "from didi")
        this.setState({
            chartdata: {
                labels: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "YOU"],
                datasets: [{
                    label: "Top Scores",
                    // data: [-10, -25, -50, -70],
                    data: comparisonChart.data,
                    backgroundColor: "#49beb7",
                }]
            }
        })
    }


    render() {
        const { comparisonChart } = this.props
        // const {chartdata} = this.state
        // console.log(chartdata.datasets.data, "from render")

        if (comparisonChart.length != 0) {
         let chartArray = {
             chartdata : {
                labels: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "YOU"],
                 datasets : [{
                     label : "Top Scores",
                     data : comparisonChart.data,
                     backgroundColor: "#49beb7",
                 }]
             }
         }
        //  if(chartArray.datasets)
            console.log(comparisonChart.data, "from render")
                // console.log(chartArray.chartdata.datasets[0].data, "from in side render if")
                // console.log(comparisonChart.data.length, "length")
                return (
                    <div className="comparison-chart">
                        <div className="chart-Heading">
                            <h3>Where You Exist</h3>
                        </div>
                        <div>
                            <Bar
                                data={chartArray.chartdata}
                                width={800}
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
        else {
            return null
        }


    }
}
