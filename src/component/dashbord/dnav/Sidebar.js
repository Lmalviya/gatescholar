import React from 'react';
import './Sidebar.scss';
import {Link, withRouter} from "react-router-dom";


class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // activePath: props.location.pathname,
            items: [
                {
                    path: '/dashbord',
                    name: 'Dashbord',
                    icon: <i className="fas fa-home"></i>,
                },
                {
                  path: '/dashbord/profile', /* path is used as id to check which NavItem is active basically */
                  name: 'Profile',
                  icon: <i className="fas fa-user"></i>,
                },
                {
                  path: '/dashbord/result',
                  name: 'Result',
                  icon: <i className="fas fa-medal"></i>,
                },
                {
                  path: '/dashbord/mytest',
                  name: 'My Test',
                  icon: <i className="fas fa-chart-bar"></i>,
                },
                {
                    path: '/dashbord/bookmark',
                    name: 'Bookmark',
                    icon: <i className="fas fa-bookmark"></i>,
                  },
              ]
        }
    }

    render() {
        const { items, activePath } = this.state;
        return(
            <div >
                {
                    items.map((item, index) => {
                        return (
                            <NavItem
                                key={index}
                                path={item.path}
                                name={item.name}
                                icon={item.icon}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

const RouterSideNav = withRouter(SideNav); 

class NavItem extends React.Component {
    
    render() {
        return(
            <div>
            <ul className="nav-lists">
                <li>
                <Link className ="nav-list" to={this.props.path} >
                <span> {this.props.icon} </span>
                {this.props.name}
                </Link>
                </li>
            </ul>
            </div>
        );
    }
}

export default class Sidebar extends React.Component {
    render() {
        return (
            <div >
                <RouterSideNav></RouterSideNav>
            </div>
        );
    }
}