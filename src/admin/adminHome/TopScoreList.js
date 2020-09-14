import React, { Component } from 'react';
import axios from "axios";

export default class UserInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [
                {
                    studentName: 'lakhan malviya',
                    rank:1,
                    marks:80,
                    email: "lakhan4797@gmail.com",
                    
                },

            ]
        }
    }

    componentDidMount() {
        const {testId} = this.props
        axios.post("kjdkfdjfdfkdf", testId)
            .then(res => {
                let items = res.data
                this.setState({ items })
            })
    }
    render() {
        const { items } = this.state
        return (
            <div className="topListContainer" >
                <table id="customers">
                    <tr>
                        <th>S.No.</th>
                        <th>Student Name</th>
                        <th>Rank</th>
                        <th>marks</th>
                        <th>Email</th>
                    </tr>
                    {
                        items.map((res, index) => <tr>
                            <td>{index + 1}.</td>
                            <td>{res.studentName}</td>
                            <td>{res.rank}</td>
                            <td>{res.marks}</td>
                            <td>{res.email}</td>
                        </tr>)

                    }

                </table>
            </div>
        )
    }
}
