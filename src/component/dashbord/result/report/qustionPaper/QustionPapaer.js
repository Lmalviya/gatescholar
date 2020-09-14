import React, { Component } from 'react';
import './QuestionPaper.scss';
import { Redirect } from 'react-router-dom';
import BottonBox from './ButtonBox';
import PaperContentBox from './PaperContentBox';
import axios from 'axios';

export default class QustionPapaer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentId: 1,
            paperItem: [],
            paperError: [],
            bookMark : [],
       
            clickCount : true,
            markColor : "white",


        }

        this.quesChangeHandler = this.quesChangeHandler.bind(this);
        this.quesNumBtnChangeHandler = this.quesNumBtnChangeHandler.bind(this);
        this.setColorBookmark = this.setColorBookmark.bind(this)

        // this.bookMarkColorHandler = this.bookMarkColorHandler.bind(this)
    }

    setColorBookmark(){
        console.log("grreennen back................")
        if(this.state.clickCount){
            this.setState({
        markColor : "green",
        clickCount : false
            })
        }
        else{
            this.setState({
                markColor : "white",
                clickCount : true
            })
        }
    
    
    }
    clearBookMarkColor=()=>{
        this.setState({
            markColor : "white",
            clickCount : true
        })
    }

    bookMarkColorHandler = (markId) => {
        this.setColorBookmark()
        console.log(this.state.bookMark)
        if(this.state.clickCount){
            let bookMarkArray = this.state.bookMark
            bookMarkArray[markId] = {
                questionId : markId,
                color : "green" 
            }
          this.setState({
              bookMark : bookMarkArray,
              clickCount : false
          })
        }
        else{
            let bookMarkArray = []
            bookMarkArray[markId] = {
                questionId : markId,
                color : "white"
            }
          this.setState({
              bookMark : bookMarkArray,
              clickCount : true
          })
        }

    }

    quesNumBtnChangeHandler(currentID) {
       
        console.log("from question paper box", currentID)
        this.setState({
            currentId: currentID
        })
    }

    quesChangeHandler(currentID, direction) {
        
     this.clearBookMarkColor()
        const totalQuestions = this.state.paperItem.length
        console.log('totalQuestions', totalQuestions)
        if (direction) {
            if (currentID < totalQuestions) {

                this.setState({
                    currentId: currentID + 1
                })
            }

        }
        else {
            if (currentID > 1) {
                this.setState({
                    currentId: currentID - 1
                })
            }

        }

    }


    async componentDidMount() {

        let token = localStorage.getItem("token")
        let examid = localStorage.getItem("examid")
        const options = {
            method: "POST",
            headers: {
                "x-access-token": token,
            },
            url: "http://localhost:5000/gatescholar/getques",
            data: { examid: examid },
        };
        const res = await axios(options);

        this.setState({
            paperItem: res.data,
            paperError: res.data[0]
        })
        // console.log(this.state.paperItem.options[0], "from did")
    }

    // async componentWillUnmount() {

    //     let token = localStorage.getItem("token")
    //     let examid = localStorage.getItem("examid")
    //     const options = {
    //         method: "POST",
    //         headers: {
    //             "x-access-token": token,
    //         },
    //         url: "",
    //         data: { bookMark: this.state.bookMark, examid:examid },
    //     };
    //     const res = await axios(options);

    //     this.setState({
    //         paperItem: res.data,
    //         paperError: res.data[0]
    //     })
    //     // console.log(this.state.paperItem.options[0], "from did")
    // }


    render() {
        // console.log(this.state.paperItem, "from paper")
        if (this.state.paperItem.length !== 0) {
            // console.log(this.state.paperItem[0], "from render.....")
            // console.log(this.state.paperItem[11].ques.quesImage)

            const { paperItem, currentId } = this.state
            // console.log(paperItem)
            return (
                <div>
                    
                    <div className="qPaperContainer">
                        <div className='qPaperContent'>
                            <div>
                                <PaperContentBox
                                    paperItem={paperItem}
                                    
                                    // bkBtn={bkBtn}
                                    currentQuesID={currentId}
                                    quesChangeHandler={this.quesChangeHandler}
                                bookMarkColorHandler={this.bookMarkColorHandler}
                                bookMark={this.state.bookMark}
                                markColor = {this.state.markColor}
                                />
                            </div>

                            <div className='navContent'>
                                <div className="navContentInner">

                                    {
                                        paperItem.map((item, index) => <BottonBox
                                            key={index}
                                            index={index}
                                            // id={navItem.id}
                                            // quesNum={navItem.examDetails.quesNumber}
                                            // quesNum={index + 1}
                                            // bkBtn={navItem.bkBtn}
                                            // ansColor={navItem.solutionInfo.ansStatus.ansColor}
                                            // bookmark={navItem.bookMark}
                                            quesNumBtnChangeHandler={this.quesNumBtnChangeHandler}
                                        />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
        )
                </div>
            )


        }
        return null
    }




}

