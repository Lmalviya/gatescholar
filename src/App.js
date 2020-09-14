import React, { Component } from 'react';
import "./App.scss";
import {Switch, Route,} from "react-router-dom";
import Home from './component/home/Home';
import Dashbord from './component/dashbord/Dashbord'
import About from './component/about/About';
import Login from "./component/login/Login";
import NavBar from './component/homeNav/Navbar';
import Gate from './component/home/Exams.js/Gate';
import Barc from './component/home/Exams.js/Barc';
import Isro from './component/home/Exams.js/Isro';
import Drdo from './component/home/Exams.js/Drdo';
import Logout from "./component/login/Logout";
import error from './component/404/E404';
import Admin from './admin/Admin';
import Authentication from './Authetication';


export default class App extends Component {

  render() {
    let testStart = localStorage.getItem("startTest")
    // console.log(testStart)
    return (
      <div className='Container' >

        {
          testStart === "examStart" ? null : <NavBar />
        }
        
         
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
          <Route path="/gate" component={Gate} />
          <Route path="/barc" component={Barc} />
          <Route path="/isro" component={Isro} />
          <Route path="/drdo" component={Drdo} />
          <Route path="/dashbord" > <Authentication Comp={Dashbord} /> </Route>
          <Route path="/about" component={About} />
          {/* <Route path="/login" > <Authentication Comp={Login} /> </Route>  */}
          <Route path="/login" component={Login} /> 
          <Route path="/logout" component={Logout} /> 
          {
            testStart === "examStart" ? null : <Route path="*" component={error} />
  }
        </Switch>

      </div>
    )
  }
};

{/* <Route path="/dashbord" ><Dashbord /></Route>
<Route path="/login" component={Login} /> 
<Route path="/logout" component={Logout} /> */}