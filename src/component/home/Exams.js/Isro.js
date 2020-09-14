import React, { Component } from 'react';
import './Exams.scss';
import SideContainerNav from './SideContainerNav';

export default class Isro extends Component {
    render() {
        return (
            <div className="examContainer">
                <div className="mainContainer">
                    <div id="isro-rec">
                        <h3>ISRO Recruitment 2017 for Scientist / Engineers </h3>
                        <p><b> Indian Space Researce Organisation</b> (ISRO), Department of Space, Government of India, has liberated the notification regarding the ISRO Scientist / Engineer Jobs 2016 to fill about 111 vacant positions for the position of Scientist/Engineer 'SC' in Level 10 of Pay Matrix to following engineering disciplines:-</p>
                        <ul>
                            <li>Mechanical</li>
                            <li>Electronics </li>
                            <li>Computer Science </li>
                        </ul>
                    </div>
                    <div id="about-org">
                        <h3>ISRO Recruitment 2017 - About the Organisation </h3>
                        <p><b>Indian Space Research Organization</b> is engaged in Research and Development activities in the development of Space Application, Space Science and Technology for the benefit of society and serving the nation by achieving self-reliance and developing the capacity to design and build Launch Vehicles and Communication/Remote Sensing Satellites and thereafter launch them. ISRO strives to serve the nation in the areas of television broadcast, Location based services, telecommunication, meteorological application and in the </p>
                        <p> ISRO strives to serve the nation in the areas of television broadcast, Location based services, telecommunication, meteorological application and in management of our natural resources. The Indian space pprogramcontinues to pursue successful goals on all fronts in meeting the objective of achieving self-reliance in space technology and its applications for national development.</p>
                    </div>
                    <div id="eligibilityExam">
                        <h3>ISRO Recruitment 2017-Eligibility Criteria </h3>
                        <ul>
                            <li><b>BE/B.Tech or equivalent qualification</b> in first class with an aggregate minimum of <b>65% marks </b>or CGPA <b>6.84/10</b> (average of all semesters for which results are available). </li>
                            <li> Minimum of 65% marks or CGPA 6.84 in section B alone for candidates with AMIE/Grad IETE qualification.</li> 
                            <li>Candidates who are going to complete the above course in the academic year 2016-17 are also eligible to apply provided final Degree is available by 31 August 2017. </li>
                        </ul>
                    </div>
                    <div id="ageLimit">
                        <h3>ISRO Recruitment 2017-Age Limit: </h3>
                        <ul>
                            <li>Maximum age of 35 years as on<b> 7th March 2017</b>. </li>
                            <li>Ex-Servicemen and Persons with Disabilities are eligible for age relaxation as per Govt. of India orders. </li>
                        </ul>
                    </div>
                    <div id="selectionPro">
                        <h3>ISRO Recruitment 2017-Selection Process: </h3>
                        <ul>
                            <li>The written test will be conducted on <b>7th May 2017</b> at twelve venues viz.,<b> Ahmedabad, Bengaluru, Bhopal, Chandigarh, Chennai, Guwahati, Hyderabad, Kolkata, Lucknow, Mumbai, New Delhi and Thiruvananthapuram</b> </li>
                            <li>The call letters for the written test to the short- listed candidates will be sent only by e-mail during the<b> third/last week of April 2017</b>. </li>
                            <li> The written test paper consists of<b> 90 objective type questions</b> carrying equal marks.</li>
                            <li>Based on the performance in the Written Test, candidates will be short-listed for interview, the schedule and venue of which will be notified. </li>
                            <li>Final selection will be based on the performance of the candidates in the <b>Interview</b> and those who secure<b> minimum 60% marks</b> in the interview will be eligible for consideration for empanelment in the selection panel, in the order of merit. </li>
                        </ul>
                    </div>
                    <div id="appliFee">
                        <h3>ISRO Recruitment 2017-Application Fee </h3>
                        <ul>
                            <li> An Application Fee of Rs. 100/- (Rupees One Hundred Only) for each application.</li>
                            <li>Candidates may make the payment 'online' using Internet Banking/Debit Card or 'Offline' by visiting nearest SBI Branch. Candidates after submitting their application can pay application fee immediately or any day before the last date for fee payment i.e. 08.03.2017 (11.59) pm. </li>
                            <li>All Women candidates/Scheduled Castes (SC)/ Scheduled Tribes (ST); Ex-servicemen [EX] and Persons with Disabilities (PWD) candidates are exempted from payment of Application Fee. </li>
                        </ul>
                    </div>
                    <div id="impDate">
                        <h3>ISRO Recruitment 2017- Important Dates </h3>
                        <ul>
                            <li>Starting Date of Online Application : <b>15th February 2017</b> </li>
                            <li> Closing Date for Online Application : <b>7th March 2017 </b></li>
                            <li> Last date for fee payment:<b> 8th March 2017 (11.59) pm </b></li>
                            <li> Written Exam Date :<b> 11th May 2017 </b></li>
                        </ul>
                    </div>
                </div>



                <div className="sideContainer">
                    <div className="sideContainerInner">
                    <div className="scrollNav">
                        <ul>
                            <li><a href="#isro-rec">ISRO Recruitment 2017 </a></li>
                            <li><a href="#about-org"> About the Organisation </a></li>
                            <li><a href="#eligibilityExam"> Eligibility Criteria</a></li>
                            <li><a href="#ageLimit"> Age Limit</a></li>
                            <li><a href="#selectionPro">Selection Process</a></li>
                            <li><a href="#appliFee">Application Fee</a></li>
                            <li><a href="#impDate"> Important Dates</a></li>
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
