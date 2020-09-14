import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./SideNav.scss";

export default class SideNav extends Component {
    render() {
        return (
            <div className="adminSideNavContainer">
                <div className="adminHeading" >
                    <h1>Admin</h1>
                </div>
                <div className="adminLinks">
                    <ul className="sidenavLinks">
                        <li className="sidenavLink"><Link to='/admin'>Dashbord</Link></li>
                        <li className="sidenavLink"><Link to='/admin/updatetest'>Update Test</Link></li>
                        <li className="sidenavLink"><Link to='/admin/userinfo'>User Info</Link></li>
                        <li className="sidenavLink"><Link to='/admin/uploadtest'>Upload Test</Link></li>
                    </ul>

                </div>
            </div>
        )
    }
}
