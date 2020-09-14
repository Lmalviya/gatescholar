import React, { Component } from 'react'

export default class BottonBox extends Component {
//    constructor(props) {
//        super(props)
   
//        this.state = {
//             bgColor:'',
//        }
//    }
//    componentDidMount(){
//        this.setState({
//            bgColor: this.props.ansColor,
//        })
//    }

    render(){
        // const { ansColor, bookmark} = this.props;
        // let quesNum = this.props.examDetails.quesNumber
        // let quesNum = 0
        // const {bgColor} = this.state;
        // const numColor = `${ansColor}`;
        let index = this.props.index
        if(index == null){
            index = 0
        }
        return (
     
            <button className="navContentBoxBtn" type="button"
                style={{
                    // background: `${bgColor}`,
                    color: 'black',
                }}
                onClick={() => this.props.quesNumBtnChangeHandler((index + 1), "blue" )}
            >{index + 1}</button>


        )
    }
        
    }