import React, { Component } from 'react'
import {Bar} from "react-chartjs-2";
import axios from 'axios';

export default class BestScore extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            // items:[],
            chartdata:{
                labels:[],
                datasets:[{
                    label:"BEST SCORE",
                    data:[],
                    backgroundColor: "#49beb7",
                }
                ]
            }
        }
    }

    componentDidMount(){
       
        
        

        //set header
        let token = localStorage.getItem("token")
        const options = {
            method: "GET",
            headers: {
              "x-access-token": token,
            },
            url: "http://localhost:5000/gatescholar/top10studentscore",
          };
          axios(options)
          .then(res => {
            // console.log(res.data, "from best score");
            // // console.log(res.data.labels, "alblesfdfddfddfdfd")
            // console.log(res.data.data, "alblesfdfddfddfdfd")
            var length = res.data.data.length;
            this.props.changeHandler(length)
            this.setState({
                chartdata : {
                    labels :res.data.labels,
                    datasets:[{
                        label:"BEST SCORE",
                        data : res.data.data,
                        backgroundColor: "#49beb7",
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
        // console.log(chartdata.datasets, "from render")
        let length = chartdata.datasets.length
        if(length != 0){
            return (
                <div className="chart">
                    <Bar
                    data={this.state.chartdata}
                    width={800}
                    options={{
                            legend:{
                                display:false,
                            },
                            responsive:true,
                            scales:{
                                yAxes:[{
                                    ticks:{
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
        else{
            return null
        }
        
    }
}
