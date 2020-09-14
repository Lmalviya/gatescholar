import React, { Component } from 'react';
import './UploadPhoto.scss';
import axios from 'axios'



const imageMaxSize = 10
export default class UploadPhoto extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedFile: undefined,
            isProgress : 0,
            uploalRespons : '',
            uploadError : '',
        }
    }


    fileSelectedHandler = (e) => {
        console.log(e.target.files[0]);

        this.setState({
            selectedFile: e.target.files[0],
            
        })
    }



    // flieUplaodHandler = () => {
    //     let profileImage = this.state.selectedFile;
    //     let fd = new FormData();
    //     fd.append("image", profileImage)
    //     console.log(profileImage, "from user pick image")
    //     let token = localStorage.getItem("token")
    //     const options = {
    //         method: "PUT",
    //         headers: {
    //             "x-access-token": token,
    //         },
    //         url: "http://localhost:5000/gatescholar/updateprofileimage",
    //         data: {file : fd}
    //         // onUploadProgress: ProgressEvent => {
    //         //     console.log("upload progress" + Math.round(ProgressEvent.loaded/ProgressEvent.total*100))
    //         //     this.setState({
    //         //         isProgress : Math.round(ProgressEvent.loaded/ProgressEvent.total*100)
    //         //     })
    //         // }
    //     };
    //     axios(options)
    //         .then(res => {
    //             console.log(res.data)
    //             this.setState({
    //                 uploadError : res.data
    //             })

    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })

    // }




    render() {

        const { isShow, isPosition } = this.props;
        console.log(this.state.selectedFile)
        return (
            <div className="popContainer"
                style={{
                    top: `${isPosition}px`,
                    opacity: `${isShow}`,
                    transition: "all 0.5s ease-in-out",

                }}
            >
                <div className="popContent">

                    <div className="popHeading">
                        <h2> Upload Image </h2>

                    </div>


                    <div className="popMain">

                        <div>
                            {
                                
                            }
                        </div>
                        <div className="imgPreview">

                            {
                            this.state.selectedFile == undefined ?
                              <img src={this.state.selectedFile} alt="user photo" />  :
                              <img src={this.state.selectedFile.name} alt="user photo" /> 
                            }
                       
                        </div>

                        <div className="popMainBtnBox">
                            <div>
                                {/* <input className="popUserImg" type="file" onChange={this.fileSelectedHandler} /> */}

                                <input className="popUserImg" style={{ display: "none" }}
                                    ref={fileInput => this.fileInput = fileInput}
                                    type="file" onChange={this.fileSelectedHandler} />



                            </div>

                            <div className="mainBtn">

                                <button id="pickFile" className="profile-btn" onClick={() => this.fileInput.click()} >Pick file</button>
                                <button className="profile-btn  main-btn" onClick={this.flieUplaodHandler} >Upload Image</button>

                            </div>
                        </div>
                    </div>

                    <div className="popfooter">
                        <button className="profile-btn footerBtn" onClick={() => this.props.onClickChange(0, -1000)}>Close</button>

                    </div>
                </div>
            </div>
        )
    }
}
