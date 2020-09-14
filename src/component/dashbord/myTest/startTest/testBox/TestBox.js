import React, { Component } from 'react';
import "./TestBox.scss";
import NumPad from 'react-numpad';
import styled from 'styled-components'



export default class TestBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedOption: false,
            countNum: 2,
            enterInput: '',
  
        }
        this.setOptionLocal = this.setOptionLocal.bind(this)
    }

    setOptionLocal() {

        let markOption = this.state.selectedOption
        localStorage.setItem("chooseOption", markOption)
        return this.clearHandler()
    }

    setEnterLocal() {

        let enter = this.state.enterInput
        localStorage.setItem("chooseOption", enter)
        this.clearEnterInput()
    }
    clearHandler = () => {
        this.setState({ selectedOption: false })
    }

    clearEnterInput = () => {
        this.setState({ enterInput: "" })
      
    }

    onValueChange = (event) => {
        // console.log(event.target.value, "from test box")
        this.setState({
            selectedOption: event.target.value
        });

    }

    enterInputHandler = (value) => {
        this.setState({
            enterInput: value
        })
        localStorage.setItem("chooseOption", value)
    }

    
    render() {


        // console.log("not render.......................")
        if (this.state.countNum < 0) {
            clearInterval(this.myFunction)
        }
        // clearInterval(this.myFunction)
        // console.log("from render///////////////")
        // console.log(this.props.chosenOptionsArrary)
        const { paper } = this.props
        const { currentQues } = this.props
        const { singleQuestionHandler } = this.props
        // console.log("from paper box", paper, currentQues)

        return (
            <div>
                <div className="testPaperBox" >
                    <div className="ques_info_nav">

                        <p>Question No. <span> {currentQues} </span></p>
                        <p>Right Mark : <span style={{ color: "Green" }} > {paper[currentQues - 1].quesMarksPositive} </span></p>
                        <p>Negative Mark : <span style={{ color: "red" }} > {paper[currentQues - 1].quesMarksNegative}  </span></p>


                    </div>

                    {/* content single Question */}
                    <div className="single_ques">
                        <p>{paper[currentQues - 1].ques.quesStatement} </p>

                        <p>
                            {
                                paper[currentQues - 1].ques.quesImage ? null : paper[currentQues - 1].ques.quesImage
                            }
                        </p>
                        {
                            paper[currentQues - 1].quesType == "Integer" ? <>
                                <p className="integerInput" >
                                    
                            <NumPad.Number className="integerInputFleid"
                                        onChange={(value) => this.enterInputHandler(value)}
                                        label={'Enter Your Answer'}
                                        placeholder={'Enter Answer'}
                                        value={this.state.enterInput}
                                        decimal={2}
                                    />
                                </p>

        
                            </> : <>
                                    <div className="optionsBox" >
                                        <form>
                                            <div className="radio">
                                                <label>
                                                    <input
                                                        className="radioInput"
                                                        type="radio"
                                                        value="A"
                                                        checked={this.state.selectedOption === "A"}
                                                        onChange={this.onValueChange}
                                                    />
                                                    {paper[currentQues - 1].quesOption.A}
                                                </label>
                                            </div>

                                            <div className="radio">
                                                <label>
                                                    <input
                                                        className="radioInput"
                                                        type="radio"
                                                        value="B"
                                                        checked={this.state.selectedOption === "B"}
                                                        onChange={this.onValueChange}
                                                    />
                                                    {paper[currentQues - 1].quesOption.B}
                                                </label>
                                            </div>

                                            <div className="radio">
                                                <label>
                                                    <input
                                                        className="radioInput"
                                                        type="radio"
                                                        value="C"
                                                        checked={this.state.selectedOption === "C"}
                                                        onChange={this.onValueChange}
                                                    />
                                                    {paper[currentQues - 1].quesOption.C}
                                                </label>
                                            </div>

                                            <div className="radio">
                                                <label>
                                                    <input
                                                        className="radioInput"
                                                        type="radio"
                                                        value="D"
                                                        checked={this.state.selectedOption === "D"}
                                                        onChange={this.onValueChange}
                                                    />
                                                    {paper[currentQues - 1].quesOption.D}
                                                </label>
                                            </div>
                                        </form>
                                    </div>
                                </>
                        }


                    </div>
                </div>

                {
                    paper[currentQues - 1].quesType == "Integer" ? <div className="footerNav" >
                        <div>
                            <button type="button"
                                onClick={() => {
                                    singleQuestionHandler(currentQues, 1, "ans&mark");
                                    // this.clearEnterInput();
                                    this.setEnterLocal(currentQues);
                                }} >Mark for Review & Next</button>
                            <button type="button" onClick={this.clearEnterInput}  >Clear Response</button>
                        </div>
                        <div>
                            <button type="button"
                                onClick={() => {
                                    singleQuestionHandler(currentQues, 0, "save&next");
                                    // this.clearEnterInput();
                                    this.setEnterLocal(currentQues);
                                }} >Save & Previous</button>
                            {/* <button type="button" onClick={() => singleQuestionHandler(currentQues, 1, "save&next")} >Save & Next</button> */}
                            <button type="button"
                                onClick={() => {
                                    singleQuestionHandler(currentQues, 1, "save&next");
                                    //  this.clearEnterInput();
                                    this.setEnterLocal(currentQues);
                                }} >Save & Next</button>

                        </div>
                    </div> : <div className="footerNav" >
                            <div>
                                <button type="button"
                                    onClick={() => {
                                        singleQuestionHandler(currentQues, 1, "ans&mark");
                                        // this.clearHandler();
                                        this.setOptionLocal(currentQues);
                                    }} >Mark for Review & Next</button>
                                <button type="button" onClick={this.clearHandler}  >Clear Response</button>
                            </div>
                            <div>
                                <button type="button"
                                    onClick={() => {
                                        singleQuestionHandler(currentQues, 0, "save&next");
                                        this.clearHandler();
                                    }} >Save & Previous</button>
                                {/* <button type="button" onClick={() => singleQuestionHandler(currentQues, 1, "save&next")} >Save & Next</button> */}
                                <button type="button"
                                    onClick={() => {
                                        singleQuestionHandler(currentQues, 1, "save&next");
                                        //  this.clearHandler();
                                        this.setOptionLocal(currentQues);
                                    }} >Save & Next</button>

                            </div>
                        </div>
                }


            </div>
        )
    }
}
