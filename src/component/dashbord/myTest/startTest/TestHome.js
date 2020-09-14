import React, { Component } from 'react';
import "./TestHome.scss";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import axios from 'axios';
import TestNav from './testNav/TestNav';
import TestBox from './testBox/TestBox';
import Full_QuestionPaper from './fullPaper/FullPaper';
import Instructions from "./instructions/Instructions"
import Profile from './profile/ProfileStd';
import MyTest from '../MyTest';
import E404 from '../../../404/E404';
import userImage from '../../../../img/user-photo.jpg';
import { Calculator } from '../../../../testing/Login';


const initialState = {
    test: {
        testId: "",
        examName: "",

        examTime: "",
        // answered: false,
        // notAnswered: 0,
        // notVisited: false,
        // ansMarked: 0,
        // markForReview: 0,

        technical: [{
            ques: {
                quesImage: "",
                quesStatement: "",
            },
            quesOption: {
                A: "",
                B: "",
                C: "",
                D: ""
            },

            quesType: "",
            quesMarksPositive: null,
            quesMarksNegative: null,
            currentStatus: "notVisited",
            chooseOption: "",

        }],
        apti: [{
            ques: {
                quesImage: "",
                quesStatement: "",
            },
            quesOption: {
                A: "",
                B: "",
                C: "",
                D: ""
            },

            quesType: "",
            quesMarksPositive: null,
            quesMarksNegative: null,
            currentStatus: "notVisited",
            chooseOption: "",

        }],
    },

    testId: "",
    currentStatus: "", // notVisited marked
    section: 0,

    chooseOpthion: '',   //option choose by user for that question
    currentQues: 1,

    answered: 0,
    notAnswered: 0,
    notVisited: 65,
    ansMarked: 0,
    markForReview: 0,

    currentTypes: "all",

    clock: '00:00',
    timeLeft: 10800,

    chosenOptionsArrary: [{
        technical: [{
            chooseOption: ""
        }],
        apti: [{
            chooseOption: ""
        }]
    }],   //for optionchosen by user
    
    isShowCalculator : false
}
export default class Test extends Component {
    constructor(props) {
        super(props)

        this.state = initialState

        this.quesNumHandler = this.quesNumHandler.bind(this);
        this.singleQuestionHandler = this.singleQuestionHandler.bind(this)
        // this.clearResponseHandler = this.clearResponseHandler.bind(this)
        this.currentTypesHandler = this.currentTypesHandler.bind(this)
        // this.setPreviousOptionValue = this.setPreviousOptionValue.bind(this)
    }


    submitPaperHandler = () => {
        alert("paper is submited")
        let token = localStorage.getItem("token")
        // console.log(this.state.chosenOptionsArrary)
        // console.log( "from will unmount....................", this.state.chosenOptionsArrary)
        console.log("clock ..............", typeof(this.state.clock))
        console.log(this.state.clock)
        var text = this.state.clock
        var timer = parseInt(text, 10);
        console.log(timer, "convert in int", typeof(timer))
        const options = {
            method: "POST",
            headers: {
                "x-access-token": token,
            },
            url: "http://localhost:5000/gatescholar/livetestupdate",
            data: {  test : this.state.chosenOptionsArrary,  myTime : timer, testAttempted : true},
        };
        axios(options)
            .then(res => {
                console.log(localStorage.getItem("examid"), "test submited")
                localStorage.removeItem("startTest")
                // ****************************
                localStorage.removeItem("examid")
                window.close("http://localhost:3000/test"); 
            })
            .catch(err => {
                console.log(err);
            })

            // localStorage.removeItem("startTest")
            clearInterval(this.myInterVal)
            // window.close("http://localhost:3000/test");
    }

    currentTypesHandler(e) {
        this.setState({ currentTypes: e.target.value })
    }

    quesNumHandler(num) {

        let currentQues = num
        this.setState({ currentQues })
    }

    // current Section handler
    sectionHandler = (num) => {
        let section = num
        let currentQues = 1
        this.setState({ section, currentQues })
    }


    singleQuestionHandler(num, step, btnType) {

        console.log("from single quesion handler", num, step, btnType)
        console.log("from single check local storege1111", localStorage.getItem("chooseOption"))
        const { section, test, currentStatus } = this.state
        const {chosenOptionsArrary } = this.state

        if (section) {
            console.log("section value", section)
            let sectionType = test.apti
            let arrLength = sectionType.length
            let chooseOpthion = test.apti[num - 1]
            console.log("array length : ", arrLength)
            if (num <= arrLength && num >= 1) {

                ///////////////////////////
                let attemptedOption = localStorage.getItem("chooseOption")
                if (attemptedOption) {
                    let optionArrary = this.state.test
                    optionArrary.apti[num - 1].chooseOption =  attemptedOption
                    
                    this.setState({
                        chosenOptionsArrary: optionArrary
                    })
                    console.log("from update***********apti section ***************** option array1", optionArrary)
                }

                //////////////////////////set color/////////////////////////////
                // let colorArray = localStorage.getItem("colorArray")
                // if( chosenOptionsArrary.technical[num-1].chooseOption != ""){
                //     if(btnType == "save&next"){
                //         // colorArray[0].technical[num-1] = "green";
                //         if(chosenOptionsArrary.technical[num-1].currentStatus == "notVisited"){
                //             let technical = this.state.chooseOpthion.technical
                //             technical[num-1].currentStatus = "isVisited" 
                //             this.setState({
                //                 answered : this.state.answered + 1,
                //                 notVisited : this.notVisited - 1,
                //                 chosenOptionsArrary:[{
                //                     technical:technical
                //                 }]
                //             })
                //         }
                        
                //     }
                //     if(btnType == "ans&mark"){
                //         // colorArray[0].technical[num-1] = "blue"
                //         if(chosenOptionsArrary.technical[num-1].currentStatus == "notVisited"){
                //             let technical = this.state.chooseOpthion.technical
                //             technical[num-1].currentStatus = "isVisited" 
                //             this.setState({
                //                 ansMarked : this.state.ansMarked + 1,
                //                 notVisited : this.notVisited - 1,
                //                 chosenOptionsArrary:[{
                //                     technical:technical
                //                 }]
                //             })
                //         }
                //     }
                // }

                // if(chosenOptionsArrary.technical[num-1].chooseOption == "" && "ans&mark"){
                //     // colorArray[0].technical[num-1] = "yellow"
                //     if(chosenOptionsArrary.technical[num-1].currentStatus == "notVisited"){
                //         let technical = this.state.chooseOpthion.technical
                //         technical[num-1].currentStatus = "isVisited" 
                //         this.setState({
                //             markForReview : this.state.markForReview + 1,
                //             notVisited : this.notVisited - 1,
                //             chosenOptionsArrary:[{
                //                 technical:technical
                //             }]
                //         })
                //     }
                // }

                if(chosenOptionsArrary.technical[num-1].chooseOption && "save&next"){
                    // colorArray[0].technical[num-1] = "red";
                    if(chosenOptionsArrary.technical[num-1].currentStatus == "notVisited"){
                        let technical = this.state.chooseOpthion.technical
                        technical[num-1].currentStatus = "isVisited" 
                        this.setState({
                            notAnswered : this.state.notAnswered + 1,
                            notVisited : this.notVisited - 1,
                            chosenOptionsArrary:[{
                                technical:technical
                            }]
                        })
                    }
                }
                
                // localStorage.setItem("colorArray", colorArray)
                localStorage.removeItem("chooseOption")



                if (step) {
                    if (num != arrLength) {
                        let currentQues = num + 1
                        this.setState({ currentQues })
                    }
                }
                else {
                    if (num != 1) {
                        let currentQues = num - 1
                        this.setState({ currentQues })
                    }
                }
            }
            if (num == arrLength && step) {
                let section = 0;
                let currentQues = 1;
                this.setState({ section, currentQues })
            }

            //for update current status
            let option = this.state.test.apti[num - 1].chooseOpthion
            if (btnType == "save&next" && option != null) {
                let currentStatus = this.state.test.apti[num - 1].currentStatus
                currentStatus = "answered"
                this.setState({ currentStatus })
            }
            if (btnType == "save&next" && option == null) {
                let currentStatus = this.state.test.apti[num - 1].currentStatus
                currentStatus = "notAnswered"
                this.setState({ currentStatus })
            }
            if (btnType == "ans&mark" && option != null) {
                let currentStatus = this.state.test.apti[num - 1].currentStatus
                currentStatus = "ansMarked"
                this.setState({ currentStatus })
            }
            if (btnType == "ans&mark" && option == null) {
                let currentStatus = this.state.test.apti[num - 1].currentStatus
                currentStatus = "markForReview"
                this.setState({ currentStatus })
            }

        }
        else {
            console.log("section value", section)
            let sectionType = test.technical
            let arrLength = sectionType.length

            if (num <= arrLength && num >= 1) {

                ///////////////////////////
                if (1) {
                    let optionArrary = this.state.test
                    optionArrary.technical[num - 1].chooseOption = localStorage.getItem("chooseOption")
                    this.setState({
                        chosenOptionsArrary: optionArrary
                    })
                    console.log("from update************technical section fkjd****************************** option array1", optionArrary)
                }

 //////////////////////////set color/////////////////////////////
// let colorArray = localStorage.getItem("colorArray")
//  if( localStorage.getItem("chooseOption")){
//      if(btnType == "save&next"){
//         //  colorArray[0].apti[num-1] = "green";
//          if(chosenOptionsArrary.apti[num-1].currentStatus == "notVisited"){
//              let apti = this.state.chooseOpthion.apti
//              apti[num-1].currentStatus = "isVisited" 
//              this.setState({
//                  answered : this.state.answered + 1,
//                  notVisited : this.notVisited - 1,
//                  chosenOptionsArrary:[{
//                     apti:apti
//                  }]
//              })
//          }
         
//      }
//      if(btnType == "ans&mark"){
//         //  colorArray[0].apti[num-1] = "blue"
//          if(chosenOptionsArrary.apti[num-1].currentStatus == "notVisited"){
//              let apti = this.state.chooseOpthion.apti
//              apti[num-1].currentStatus = "isVisited" 
//              this.setState({
//                  ansMarked : this.state.ansMarked + 1,
//                  notVisited : this.notVisited - 1,
//                  chosenOptionsArrary:[{
//                     apti:apti
//                  }]
//              })
//          }
//      }
//  }

//  if(!localStorage.getItem("chooseOption") && "ans&mark"){
//     //  colorArray[0].apti[num-1] = "yellow"
//      if(chosenOptionsArrary.apti[num-1].currentStatus == "notVisited"){
//          let apti = this.state.chooseOpthion.apti
//          apti[num-1].currentStatus = "isVisited" 
//          this.setState({
//              markForReview : this.state.markForReview + 1,
//              notVisited : this.notVisited - 1,
//              chosenOptionsArrary:[{
//                  apti:apti
//              }]
//          })
//      }
//  }

//  if(chosenOptionsArrary.apti[num-1].chooseOption && "save&next"){
//     //  colorArray[0].apti[num-1] = "red";
//      if(chosenOptionsArrary.apti[num-1].currentStatus == "notVisited"){
//          let apti = this.state.chooseOpthion.apti
//          apti[num-1].currentStatus = "isVisited" 
//          this.setState({
//              notAnswered : this.state.notAnswered + 1,
//              notVisited : this.notVisited - 1,
//              chosenOptionsArrary:[{
//                  apti:apti
//              }]
//          })
//      }
//  }
 
//  localStorage.setItem("colorArray", colorArray)
 localStorage.removeItem("chooseOption")

                if (step) {
                    if (num != arrLength) {
                        let currentQues = num + 1
                        this.setState({ currentQues })
                    }
                }
                else {
                    if (num != 1) {
                        let currentQues = num - 1
                        this.setState({ currentQues })
                    }

                }
            }


            //for swich the section
            if (num == arrLength && step && !section) {
                return this.sectionHandler(1)
            }

            //for update current status
            let option = this.state.test.technical[num - 1].chooseOpthion
            if (btnType == "save&next" && option != null) {
                let currentStatus = this.state.test.technical[num - 1].currentStatus
                currentStatus = "answered"
                this.setState({ currentStatus })
            }
            if (btnType == "save&next" && option == null) {
                let currentStatus = this.state.test.technical[num - 1].currentStatus
                currentStatus = "notAnswered"
                this.setState({ currentStatus })
            }
            if (btnType == "ans&mark" && option != null) {
                let currentStatus = this.state.test.technical[num - 1].currentStatus
                currentStatus = "ansMarked"
                this.setState({ currentStatus })
            }
            if (btnType == "ans&mark" && option == null) {
                let currentStatus = this.state.test.technical[num - 1].currentStatus
                currentStatus = "markForReview"
                this.setState({ currentStatus })
            }

        }


    }
    setPaper = (id) => {
        let testId = id
        this.setState({ testId })
    }

    // ************************************componentDidMount ********************************************************

    componentDidMount() {
        // console.log("from component didi mou testhoemjfdkjfk", examID, "from did")
        // set header
        let token = localStorage.getItem("token")
        let examID = localStorage.getItem("examid")
        
        // console.log("from component didi mou testhoemjfdkjfk", examID, "from did000000000000000000000000000")
        const options = {
            method: "POST",
            headers: {
                "x-access-token": token,
            },
            url: "http://localhost:5000/gatescholar/getexam",
            data: { examid: examID },
        };
        axios(options)
            .then(res => {

                // console.log("fomdkjfkdjfdjfdkfjdkfjdjfdkfjdfkjdfjkdjfkdjkfdkfjdkfjdkfkdf")
                // console.log("from component didi moundfndfdfj", res.data);
                // let colorArray = {
                //     technical :["white"],
                //     apti : ["green"]
                // }
                // localStorage.setItem("colorArray", colorArray)

                this.setState({ test: res.data })
                
                
                ////////////color set
                // let colorArray = []
                // let i 
                // for (i = 0; i < 65; i++){
                //     colorArray[i] = "white"
                // }
                // localStorage.setItem(colorArray)
                // console.log(colorArray, "from render color arrar")
                    

            })
            .catch(err => {
                console.log(err);
            })


        ///////////////////clock///////////////
        this.myInterVal = setInterval(()=> {

            this.setState({
                clock : this.timeConvert(this.state.timeLeft - 1) 
            })
        }, 1000)



    }

        //////time conveter 
        timeConvert = (t) => {
            if (this.state.clock == "0:0") {
                clearInterval(this.myInterVal)
                return alert(this.state.clock, "time is up, submit test")
            }
            this.setState({ timeLeft: t })
            let min = Math.floor(t / 60)
            let sec = t % 60
            return min + ":" + sec   
        }
    

        
    /////clear interval 
    componentWillUnmount() {

        // window.onbeforeunload("are sure to submit the test///////////")
        console.log(localStorage.getItem("examid"), "examid wich is attemptd")
        alert("paper is submited")
        let token = localStorage.getItem("token")
        console.log( "from will unmount....................", this.state.chosenOptionsArrary)
        const options = {
            method: "POST",
            headers: {
                "x-access-token": token,
            },
            url: "http://localhost:5000/gatescholar/livetestupdate",
            data: {  test : this.state.chosenOptionsArrary,  myTime : this.state.clock, testAttempted : true },
        };
        axios(options)
            .then(res => {
                console.log(localStorage.getItem("examid"), "test submited")
                localStorage.removeItem("startTest")
                localStorage.removeItem("examid")
                window.close("http://localhost:3000/test"); 
            })
            .catch(err => {
                console.log(err);
            })

            // localStorage.removeItem("startTest")
            clearInterval(this.myInterVal)
            // window.close("http://localhost:3000/test");


            window.onbeforeunload = function(){
                return 'Are you sure you want to leave?';
              };
    }






    // ********************************************************************
    // ************************************************************************
    render() {
        // let hh = localStorage.getItem("colorArray")
        // console.log(hh.apti)
        const { test, section, currentQues, chosenOptionsArrary } = this.state;
        const { ansMarked, markForReview, notVisited, notAnswered, answered } = this.state;
        const { currentTypes } = this.state;
        let technical = test.technical;  /////////////////////////////////////////
        // console.log("technical.....................", technical)
        // console.log("form render ///////////////////", test.questions.technical);
        let apti = this.state.test.apti;
        return (
            <div className="testHomeContainter">
                <TestNav />
                <div className="testContent" >
                    {/* left side content */}
                    <Switch>
                        <Route exact path="/test" >
                            <TestLeftSection
                            
                                test={test}
                                section={section}
                                currentQues={currentQues}

                                sectionHandler={this.sectionHandler}
                                singleQuestionHandler={this.singleQuestionHandler}
                                clearResponseHandler={this.clearResponseHandler}

                                onValueChange={this.onValueChange}
                                chooseOpthion={this.state.chooseOpthion}

                                chosenOptionsArrary={chosenOptionsArrary}
                            />
                        </Route>
                        <Route path="/test/profile" ><Profile /></Route>
                        <Route path="/test/paper"><Full_QuestionPaper paper={test} /></Route>
                        <Route path="/test/instruction" component={Instructions} />
                        <Route path="*" component={E404} />

                    </Switch>

                    {/* right side content */}
                    <div className="TestContentRight">
                        {/* server Clock......... */}
                        <div className="serverClock" >

                            <div className="userImageTestHome" >
                                <img className="userImgTestHome" src={userImage} />
                            </div>
                            <div className="timerClock">
                                {/* user name  */}
                                <div className="userName" > <h4><span>Name : </span> Lakhn Malviya</h4> </div>
                                <div> <h1>Time : <span> {this.state.clock} </span></h1> </div>
                            </div>
                     
                        </div>


                        {/* question nevigation section which is content all the buttons and filter  */}
                        <div className="quesNavigation">

                            {/* question Palette section which content all number buttons */}
                            <div className="quesPalette" >
                                <h4>Question Palette :</h4>
                                <div className="ques_numBtn">

                                    {
                                        section ? <div> {
                                            apti.map((item, index) => {
                                                // if (currentTypes == item.currentStatus) {
                                                //     return <button className="rightSectionNumBtn" type="button" 
                                                //     onClick={() => this.quesNumHandler(index + 1) } >{index + 1}</button>
                                                // }
                                                // if (currentTypes == "All") {
                                                if (1) {
                                                    let colorArray = localStorage.getItem("colorArray")
                                                    // let color = "white"
                                                    // if(colorArray[index] != null){
                                                    //     color = colorArray[index]
                                                    // }
                                                    return <button key={index} className="rightSectionNumBtn" type="button"
                                                    // style={{
                                                    //     background:`${color}`
                                                    // }}
                                                    onClick={() =>  this.quesNumHandler(index + 1) } >{index + 1}</button>
                                                }
                                            })
                                        } </div> : <div>{
                                            technical.map((item, index) => {
                                                // if (currentTypes == item.currentStatus) { // this condition use for the filter mathod
                                                //     return <button className="rightSectionNumBtn" type="button" onClick={() => this.quesNumHandler(index + 1)} >{index + 1}</button>
                                                // }
                                                // if (currentTypes == "All") 
                                                if (1) {
                                                    let colorArray = localStorage.getItem("colorArray")
                                                    // let color = "white"
                                                    // if(colorArray[index] != null){
                                                    //     color = colorArray[index]
                                                    // }
                                                    return <button key={index} className="rightSectionNumBtn" type="button"
                                                    // style={{
                                                    //     background:`${color}`
                                                    // }}
                                                    onClick={() => this.quesNumHandler(index + 1)} >{index + 1}</button>
                                                }
                                            })
                                        } </div>
                                    }
                                </div>
                            </div>

                            {/* Legend  : which is content current status of the test  */}
                            <div className="legendBtn">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td> <button style={{ background: "green" }} > {answered} </button>  Answered </td>
                                            <td> <button style={{ background: "rgba(224, 38, 38, 0.801)" }} >{notAnswered} </button> Not Answered </td>
                                        </tr>
                                        <tr>
                                            <td> <button style={{ background: "rgb(73, 37, 156)" }} >{markForReview}  </button>  Marked </td>
                                            <td> <button  >{notVisited} </button>  Not Visited  </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2"> <button style={{ background: "rgb(68, 81, 196)" }} >{ansMarked}  </button> Answered & Mark for Review </td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                            {/* content filter and submit button */}
                            <div className="submitBtnSection">

                                {/* content filter */}
                                <div >
                                    <select className="quesFilter" value={currentTypes} onChange={this.currentTypesHandler} >
                                        <option key="0" value="all" >All</option>
                                        <option key="1" value="answered">Answered</option>
                                        <option key="2" value="notAnswered">Not Answered</option>
                                        <option key="3" value="markForReview">Marked For Review</option>
                                        <option key="4" value="ansMarked">Answered & Marked</option>
                                        <option key="5" value="notVisited">Not Visited</option>

                                    </select>
                                </div>

                                {/* Content submit button */}
                                <div className="testSubmitBtn">
                                    <div>
                                        <button className="itemRouteBtn" type="button" ><Link to="/test/paper" >Question Paper </Link> </button>
                                        <button className="itemRouteBtn" type="button"><Link to="/test/instruction" >Instructions </Link> </button>
                                    </div>
                                    <div>
                                        <button className="itemRouteBtn" type="button"><Link to="/test/profile" >Profile </Link> </button>
                                        <button className="itemRouteBtn" type="button" onClick={()=>{
                                            this.submitPaperHandler()
                                        }} >Submit </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}







export class TestLeftSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectValue: "",
            checked : false,
        }

    }
showCalHandler=(event)=>{
    console.log("clicked")
    this.setState({checked : event.target.checked})
}
    render() {
        // console.log(isShowCalculator, "calculator")
        // console.log(currentQues, chosenOptionsArrary)
        const { test, currentQues, section, chosenOptionsArrary } = this.props
        const { sectionHandler } = this.props
        const { singleQuestionHandler } = this.props
        // console.log(test)
        // console.log(currentQues, chosenOptionsArrary, "from senderdjf")
        // console.log("this is section", section)
        // console.log("this is current question index ", currentQues)
        // console.log(this.props)
        // console.log("from testHome value of chosen option array ...", chosenOptionsArrary)
        return (
            <div className="testContentLeft">
    <input id="toggle"      style={{display:"none"}}
                            type="checkbox"
                            checked={this.state.checked}
                            onChange={this.showCalHandler}
                            // onClick={this.showCalHandler}
                             /> 
                {/* test left side header which is content test name and calculater */}
                <div className="testLeftHeader">
                    <div className='testHeading'>
                        <h2> GATE {test.examName} </h2>
                    </div>
                    <div className="testCalculter, tooltip">

                        <h4> <label htmlFor="toggle" > <i className="fas fa-calculator"></i> </label></h4>
                        <span className="tooltiptext"><i className="fas fa-caret-up"></i>Calculator</span>
                   
                    </div>

                    {/* <GateCalculator /> */}
                    {/* <button onClick={this.showCalHandler} >clicked</button> */}
    {/* <input type="checkbox" onClick={this.showCalHandler} checked={this.state.checked} /> */}

                    {
                        this.state.checked ? <GateCalculator checked={this.state.checked} showCalHandler={this.showCalHandler} /> : null
                    }
                </div>
                {/* test box which is content test navigation and single question box */}
                <div className="leftQuestionBox" >
                    {/* test navigation, content technical and apti  */}
                    <div className="sectionNav">
                        <button className="sectionHandlerBtn" type="button" onClick={() => sectionHandler(0)} > Technical </button>
                        <button className="sectionHandlerBtn" type="button" onClick={() => sectionHandler(1)}> Aptitude </button>
                    </div>

                    {/* single question content */}
                    {
                        section ? <TestBox
                            paper={test.apti}
                            currentQues={currentQues}
                            chooseOption={this.state.selectValue}
                            // onValueChange={this.onValueChange}

                            singleQuestionHandler={singleQuestionHandler}
                            // clearResponseHandler={clearResponseHandler}

                            chosenOptionsArrary={chosenOptionsArrary}

                            section={section}

                        /> : <TestBox
                                paper={test.technical}
                                currentQues={currentQues}
                                chooseOption={this.state.selectValue}
                                // onValueChange={this.onValueChange}


                                singleQuestionHandler={singleQuestionHandler}
                                // clearResponseHandler={clearResponseHandler}
                                chosenOptionsArrary={chosenOptionsArrary}

                                section={section}
                            />
                    }

                    {/* footer navigation buttons
                    <div className="footerNav" >
                        <div>
                            <button type="button" onClick={() => singleQuestionHandler(currentQues, 1, "ans&mark")} >Mark for Review & Next</button>
                            <button type="button"  onClick={() => clearResponseHandler(currentQues)}  >Clear Response</button>
                        </div>
                        <div>
                            <button type="button" onClick={() => singleQuestionHandler(currentQues, 0, "save&next")} >Save & Previous</button>
                            <button type="button" onClick={() => singleQuestionHandler(currentQues, 1, "save&next")} >Save & Next</button>
                        </div>
                    </div> */}
                </div>

            </div>
        )
    }
}





export class GateCalculator extends Component {
    render() {

        return (
            <div className="gatecalculator" >
                <button className="closeCalculator" onClick={this.props.showCalHandler} />
                <iframe scrolling="no" frameBorder="0" className="inFrame" src="https://www.tcsion.com/OnlineAssessment/ScientificCalculator/Calculator.html#nogo" />
            </div>
        )
    }
}

{/* <i className="fas fa-times"></i> */}