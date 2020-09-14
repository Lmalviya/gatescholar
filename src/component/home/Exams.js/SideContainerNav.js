import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class SideContainerNav extends Component {
    render() {
        return (
            <div className="sidecontainerNav" >
                <ul>
                    <li><Link to="/gate">Gate </Link> </li>
                    <li><Link to="/isro">Isro </Link> </li>
                    <li><Link to="/barc">Barc </Link> </li>
                    <li><Link to="/drdo">Drdo </Link> </li>
                </ul>
            </div>
        )
    }
}
