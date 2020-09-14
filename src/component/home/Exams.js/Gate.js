import React, { Component } from 'react';
import './Exams.scss';
import SideContainerNav from './SideContainerNav';

export default class Gate extends Component {
    render() {
        return (
            <div className="examContainer" >
                <div className="mainContainer">
                    <div id="aboutExam">
                        <h3>What is GATE Exam?</h3>
                        <p>
                            The full form of the GATE Exam is 'Graduate Aptitude Test
                        Engineering'. <b>GATE is a national level entrance exam</b>
                         (All-India exam) for engineering which is administered in 8
                         zones (with approximately<b> 200 exam centres</b>) across the nation
                         on account of the National Coordination Board, Ministry of Human
                         Resource Development (MHRD), Department of Higher Education,
                         and Government of India (GOI).
                        </p>
                        <p>
                            Every year the IIT/IISc, Bangalore conducts GATE exam to test the aptitude of candidates applied for undergraduate subjects of Engineering, Technology or Architecture, and PG subjects of Science in an online mode. For GATE 2020, aspirants can apply for only one of the<b> 25 papers </b> available as options to get admission in IITs, NITs and other Centrally Funded Technical Institutions (CFTIs) in India. A new paper in GATE 2020 which is Biomedical has been added this year.
                        </p>
                    </div>
                    <div id="whyExam">
                        <h3>Why GATE 2020?</h3>
                        <ul>
                            <li>With the GATE 2020 score, you can get admission in Master of Engineering (M.E.)/Master of Technology (M.Tech) courses and PhD Programs at various IITs, NITs, IIS, GFTIs and other reputed Universities.</li>
                            <li>GATE score can be used to apply for prestigious jobs in PSUs, Central Government, GOI Organizations and Private Sector.</li>
                            <li>If you pass GATE 2020, you can join state-level or a national-level university/college for pursuing higher studies like M.Tech through GATE. You will be given a scholarship of <b>Rs 12400</b> for every month until the completion of two years of your course.</li>
                            <li>If you pass the GATE exam, your GATE score will remain valid for 3 years for joining in M.Tech.</li>
                            <li>For government jobs, your GATE Score will remain valid for the current year.</li>
                            <li>GATE 2020-21 will be conducted for 25 subjects and the subject<b> Biomedical</b> has been added recently in the list.</li>
                        </ul>
                    </div>
                    <div id="impDates">
                        <h3>GATE 2020: Important Dates</h3>
                        <table>
                            <thead>
                            <tr>
                                <th>Events</th>
                                <th>GATE Important Dates</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>GATE Notification 2020 Date</td>
                                <td>20th July 2019</td>
                            </tr>
                            <tr>
                                <td>GATE Application Form 2020</td>
                                <td>2nd September 2019</td>
                            </tr>
                            <tr>
                                <td>Last Date of GATE Registration</td>
                                <td>28th September 2019 (Extended)</td>
                            </tr>
                            <tr>
                                <td>GATE Application Correction Date</td>
                                <td>1st October 2019t</td>
                            </tr>
                            <tr>
                                <td>Last Date to Apply with Late Fees (Extended)</td>
                                <td>5th October 2019i</td>
                            </tr>
                            <tr>
                                <td>Last Date for Change of Exam City</td>
                                <td>15th November 2019</td>
                            </tr>
                            <tr>
                                <td>GATE Admit Card 2020 Download Date</td>
                                <td>3rd January 2020</td>
                            </tr>
                            <tr>
                                <td>GATE Exam Date 2020</td>
                                <td>1st, 2nd, 8th, and 9th February 2020</td>
                            </tr>
                            <tr>
                                <td>GATE Answer Key 2020</td>
                                <td>	18th February 2020</td>
                            </tr>
                            <tr>
                                <td>GATE Result Date 2020	</td>
                                <td>16th March 2020</td>
                            </tr>
                            <tr>
                                <td>GATE Score Card Date</td>
                                <td>3rd week of March to last week of May 2020</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="appli-Fee">
                        <h3>GATE 2020 Application Fees</h3>
                        <table>
                            <thead>
                            <tr>
                                <th>Category</th>
                                <th>Fee</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Women/SC/ST/PWD</td>
                                <td>₹ 750/-</td>
                            </tr>
                            <tr>
                                <td>Male Category (General/OBC)</td>
                                <td>	₹ 1500/-</td>
                            </tr>
                            <tr>
                                <td>Applicants from Addis Ababa, Dhaka, Colombo & Kathmandu</td>
                                <td>	US$ 50</td>
                            </tr>
                            <tr>
                                <td>Applicants from Dubai & Singapore</td>
                                <td>US$ 100</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="eligibilityExam">
                        <h3>GATE 2020 Eligibility Criteria</h3>
                        <p>The candidates who possess the following criteria are eligible to appear in GATE 2020.</p>
                        <div>
                            <h5>1. Educational Qualification</h5>
                            <p>To apply for GATE 2020, a candidate must possess either of the mentioned qualification(s).</p>
                            <ul>
                                <li>BE/B. Tech/B. Pharma</li>
                                <li>B.Arch</li>
                                <li>B.Sc (Research)/B.S</li>
                                <li>Professional Society Examination (equivalent to B.E./B. Tech/B. Arch)</li>
                                <li>M.Sc./M.A./MCA or equivalent</li>
                                <li>Integrated M.E/M.Tech (Post – B.Sc)</li>
                                <li>Integrated M.Sc./Integrated B.S-M.S</li>
                                <li>Integrated M.E./M.Tech or Dual Degree (after Diploma or 10+2)</li>
                            </ul>
                        </div>
                        <div>
                            <h5>2. Pass Percentage</h5>
                            <p>To apply for GATE 2020, there are<b> no minimum pass percentage</b> criteria defined.</p>
                        </div>
                        <div>
                            <h5>3. Age Limit</h5>
                            <p>There is<b> no age limit</b> defined to apply for GATE exam.</p>
                        </div>
                        <div>
                            <h5>4. Nationality</h5>
                            <p>You should have Indian nationality to apply for GATE 2020. Candidates belonging to Nepal, Bangladesh, Singapore, Sri Lanka, Ethiopia and the United Arab Emirates are also eligible for GATE 2020 exam.</p>
                        </div>
                    </div>
                    <div id='syllExam'>
                        <h3>GATE 2020 Syllabus</h3>
                        <div>
                            <h5>GATE Exam Pattern 2020</h5>
                            <table>
                                <thead>
                                <tr>
                                    <th>Section</th>
                                    <th>No. of Questions</th>
                                    <th>Marks</th>
                                    <th>Marks/Question</th>
                                    <th>Total Marks</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td rowSpan="2">General Aptitude</td>
                                    <td> 5</td>
                                    <td>5 </td>
                                    <td>1 </td>
                                    <td>5 </td>
                                </tr>
                                <tr>

                                    <td>5 </td>
                                    <td>5 </td>
                                    <td>2 </td>
                                    <td>10 </td>
                                </tr>
                                <tr>
                                    <td rowSpan="2">Technical, Engineering, Mathematics</td>
                                    <td>25 </td>
                                    <td>25 </td>
                                    <td>1 </td>
                                    <td>25 </td>
                                </tr>
                                <tr>

                                    <td> 30</td>
                                    <td>30 </td>
                                    <td>2 </td>
                                    <td>60 </td>
                                </tr>
                                <tr>
                                    <th>Total </th>
                                    <td>65 </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>100 </td>
                                </tr>
                                </tbody>
                            </table>
                            <p><b>Note: </b>1/3 marks will be deducted for the wrong answers i.e (0.33) marks for 1 mark questions and (0.66) marks will be deducted for questions carrying 2 marks. No mark will be deducted for the wrong answer to NAT questions. </p>
                        </div>
                        <div>
                            <h5> GATE 2020 Syllabus Branch-wise</h5>
                            <table>
                                <thead>
                                <tr>
                                    <th><a href="#">GATE CS Syllabus</a></th>
                                    <th><a href="#">GATE ME Syllabus</a></th>
                                    <th><a href="#">GATE EC Syllabus</a></th>
                                    <th><a href="#">GATE CE Syllabus</a></th>
                                    <th><a href="#">GATE EE Syllabus</a></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td >General Aptitude </td>
                                    <td rowSpan="3">Engineering Mathematics </td>
                                    <td >General Aptitude(GA)</td>
                                    <td >General Aptitude(GA)</td>
                                    <td >General Aptitude(GA)</td>
                                </tr>
                                <tr>
                                    <td >Engineering Mathematics </td>

                                    <td >Numerical Ability</td>
                                    <td >Engineering Mathematics</td>
                                    <td >Electric Circuits</td>
                                </tr>
                                <tr>
                                    <td >Digital Logic </td>

                                    <td >Structural Engineering)</td>
                                    <td >	Networks</td>
                                    <td >Electromagnetic Fields</td>
                                </tr>
                                <tr>
                                    <td>Computer Organization and Architecture </td>
                                    <td rowSpan="2">Applied Mechanics and Design </td>
                                    <td>Geotechnical Engineering </td>
                                    <td>Signals & Systems </td>
                                    <td>Signals and Systems </td>
                                </tr>
                                <tr>
                                    <td> Programming and Data Structures</td>

                                    <td> Water Resources Engineering	</td>
                                    <td>Electronic Devices & Circuits </td>
                                    <td>Electrical Machines </td>
                                </tr>
                                <tr>
                                    <td>Algorithms </td>
                                    <td rowSpan="3"> Fluid Mechanics and Thermal Sciences</td>
                                    <td rowSpan="2"> Environmental Engineering</td>
                                    <td>Analog Circuits </td>
                                    <td> Power Systems</td>
                                </tr>
                                <tr>
                                    <td>Theory of Computation </td>


                                    <td>Digital Circuits </td>
                                    <td>Control Systems </td>
                                </tr>
                                <tr>
                                    <td>Compiler Design </td>

                                    <td rowSpan="2">Transportation Engineering </td>
                                    <td>Control Systems </td>
                                    <td>Electrical and Electronic Measurements </td>
                                </tr>
                                <tr>
                                    <td>Operating System </td>
                                    <td rowSpan="3"> Materials, Manufacturing and Industrial Engineering</td>

                                    <td>Communications </td>
                                    <td> Analog and Digital Electronics</td>
                                </tr>
                                <tr>
                                    <td>Databases </td>

                                    <td rowSpan="2" >Geomatics Engineering </td>
                                    <td rowSpan="2"> 	Electromagnetics</td>
                                    <td rowSpan="2"> Power Electronics</td>
                                </tr>
                                <tr>
                                    <td>Computer Networks </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                    <div id="cutoffExam">
                            <h3>    </h3>
                            <table>
                                <thead>
                                <tr>
                                    <th>Branch </th>
                                    <th> 	Gen</th>
                                    <th>	OBC (NCL) </th>
                                    <th> 	SC/ST/PH</th>
                                </tr>
                                <tr>
                                    <td>Computer Science Engineering </td>
                                    <td> 29.5</td>
                                    <td>26.6 </td>
                                    <td> 	19.7</td>
                                </tr>
                                <tr>
                                    <td> Civil Engineering</td>
                                    <td>28.2 </td>
                                    <td>	25.4 </td>
                                    <td> 18.8</td>
                                </tr>
                                <tr>
                                    <td>Electrical Engineering </td>
                                    <td> 	39.6</td>
                                    <td> 35.6</td>
                                    <td>26.4 </td>
                                </tr>
                                <tr>
                                    <td> Electronics & Communication</td>
                                    <td>	26.7 </td>
                                    <td>24.0 </td>
                                    <td> 17.8</td>
                                </tr>
                                <tr>
                                    <td>Mechanical Engineering </td>
                                    <td>34.1 </td>
                                    <td> 30.7</td>
                                    <td> 22.7</td>
                                </tr>
                                </thead>
                            </table>
                        </div>
                </div>

                {/* *********************************navbar************************ */}
                <div className="sideContainer">
                    <div className="sideContainerInner">
                    <div className="scrollNav">
                        <ul>
                            <li><a href="#aboutExam">What is GATE Exam </a></li>
                            <li><a href="#whyExam"> Why GATE 2020 </a></li>
                            <li><a href="#impDates"> Important Dates</a></li>
                            <li><a href="#appli-Fee"> Application Fees</a></li>
                            <li><a href="#eligibilityExam"> Eligibility Criteria</a></li>
                            <li><a href="#syllExam">Syllabus</a></li>
                            <li><a href="#cutoffExam">GATE Cutoff</a></li>
                        </ul>
                    </div>
                    <div className="pageNav">
                    <SideContainerNav /> 
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
