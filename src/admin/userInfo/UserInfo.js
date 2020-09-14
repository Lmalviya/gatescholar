import React, { Component } from 'react';
import axios from "axios";
import "./UserInfo.scss";

export default class UserInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [
                {
                    studentName: 'lakhan malviya',
                    email: "lakhan4797@gmail.com",
                    rank: "5",
                    givenTest: "10",
                    failTest: "6",
                    passTest: '4',
                    admissionDate: "20/20/2019"
                },

            ]
        }
    }

    componentDidMount() {
        axios.get("kjdkfdjfdfkdf")
            .then(res => {
                let items = res.data
                this.setState({ items })
            })
    }
    render() {
        const { items } = this.state
        return (
            <div className="UserInfoContainer" >
                <table id="customers">
                    <tr>
                        <th>S.No.</th>
                        <th>Student Name</th>
                        <th>Email</th>
                        <th>Rank</th>
                        <th>Given Test</th>
                        <th>Fail In Test</th>
                        <th>Pass In Test</th>
                        <th>Admission Date</th>
                    </tr>
                    {
                        items.map((res, index) => <tr>
                            <td>{index + 1}.</td>
                            <td>{res.studentName}</td>
                            <td>{res.email}</td>
                            <td>{res.rank}</td>
                            <td>{res.givenTest}</td>
                            <td>{res.failTest}</td>
                            <td>{res.passTest}</td>
                            <td>{res.admissionDate}</td>
                        </tr>)

                    }

                </table>
            </div>
        )
    }
}
