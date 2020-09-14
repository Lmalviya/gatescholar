import React, { Component } from 'react';
import './Exams.scss';
import SideContainerNav from './SideContainerNav';


export default class Drdp extends Component {
    render() {
        return (
            <div className="examContainer">
                <div className="mainContainer">
                    <h3>DRDO Recruitment 2020 for Engineers, Apply Online for DRDO Scientific Officer </h3>
                    <p><b>DRDO recruitment 2020 notification out!</b> Department of Atomic Energy (DAE) invites online application for <b>recruitment of Trainee Scientific Officer (TSO)</b> for the 2020 academic session of BARC Training School through their separate Online Examination or GATE 2020/2019 score. Selected candidates after completing the Training program, TSO's will be absorbed as Scientific Officers in DAE. </p>
                    <div id="impDate" style={{ marginTop: "30px" }}>
                        <h3>DRDO Recruitment 2020: Important Dates </h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Events </th>
                                    <th>Important Dates</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Online Application Process  </td>
                                    <td>6th January 2020 </td>
                                </tr>
                                <tr>
                                    <td> Last date of DRDO Application Form 2020</td>
                                    <td>3rd Feb 2020 </td>
                                </tr>
                                <tr>
                                    <td> Last date for Submission of DRDO Online Application</td>
                                    <td>4th February, 2020 </td>
                                </tr>
                                <tr>
                                    <td>DRDO Admit Card Download Date </td>
                                    <td>	25th February, 2020 </td>
                                </tr>
                                <tr>
                                    <th>DRDO Exam Date 2020 </th>
                                    <td>13th March-19th March, 2020 </td>
                                </tr>

                                <tr>
                                    <td>Display of List of candidates short-listed for Interview on Online Application Portal </td>
                                    <td>15th April, 2020 </td>
                                </tr>
                                <tr>
                                    <td>Availability based option on Online Application Portal to select Interview Slot for qualified candidates </td>
                                    <td> 17th - 20th April, 2020</td>
                                </tr>
                                <tr>
                                    <td> Selection Interviews</td>
                                    <td>14th May-13th June, 2020 </td>
                                </tr>
                                <tr>
                                    <td>Display of List of Candidates finally selected for OCES-2020 on Online </td>
                                    <td>Last week of June, 2020 </td>
                                </tr>
                                <tr>
                                    <td> Last Date for Selected OCES-2020 Candidates desirous of DGFS to give details of M.Tech I M.Chem. Engg. admission in a DGFS institute</td>
                                    <td> 5th July, 2020</td>
                                </tr>
                                <tr>
                                    <td>Declaration of List of Applicants Selected for DGFS-2020 on Online Application Portal </td>
                                    <td> 2nd week of July, 2020 </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="eligibilityExam">
                        <h3>Eligibility Criteria for DRDO Recruitment 2020 for Engineers </h3>
                        <ul>
                            <li> B.E. / B.Tech. / B.Sc. (Engineering) / 5-year Integrated M.Tech. with a minimum of<b> 60% aggregate marks</b>.</li>
                            <li>Applicants opting to be considered on the basis of a GATE Score must have a valid GATE-2019 or GATE-2020 Score in the same engineering discipline as the qualifying degree discipline. </li>
                            <li>Qualifying degree in branches like Aerospace, Automobile, Industrial Production, Reliability, Ceramics, Architecture, Geology, Mining, Bio-Medical Electronics/ Instruments, Communication, Information Technology, Master of Computer Applications, Dyes & Dye Intermediates, Electrochemical, Energy Systems, Oils & Fats, Paints & Varnishes, Petrochemicals, Plastics, Paper, Sugar Technology, Textiles, Mechatronics, etc. are not eligible. </li>
                            <li> Candidates awaiting final results and/or due to appear for GATE-2020 may also apply</li>
                        </ul>
                    </div>
                </div>




                <div className="sideContainer">
                    <div className="sideContainerInner">
                        <div className="scrollNav">
                            <ul>
                                <li><a href="#impDate">Important Dates </a></li>
                                <li><a href="#eligibilityExam"> Eligibility Criteria </a></li>

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
