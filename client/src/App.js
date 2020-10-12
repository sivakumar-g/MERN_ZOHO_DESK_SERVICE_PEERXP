import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import { store } from "./actions/store";
import { Container, AppBar, Typography } from "@material-ui/core";
import ButterToast,{ POS_RIGHT,POS_TOP } from "butter-toast";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login';
import Signup from './components/signup';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

import Ticket from './components/Ticket';
import { useState,useContext } from 'react';
import { useEffect } from 'react';
 import {useSelector} from 'react-redux';



function App(props) {
const [logged, setlogged] = useState(true);
  const islogin = useSelector(state => state.loginSucccess);


const logout = () =>
  {
    localStorage.clear();

    props.history.push('/sign-in')
  }
/*
  useEffect(() => {
    console.log("mounted");
  }, [islogin])

*/ 

if(localStorage.getItem('token'))
return(  <Router>
  <div className="App">
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>PeerXP</Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
    
            <li className="nav-item" >
              <Link className="nav-link" to={"/"}  onClick={logout}>Logout</Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link" to={"/ticket"}  onClick={Ticket}>Raise Ticket</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>


    <div className="auth-wrapper">
      <div className="auth-inner">
        <Switch>
          <Route exact path="/" component={Ticket} />
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={Signup} />
          <Route path="/ticket" component={Ticket} />
        </Switch>
      </div>
    </div>
  </div></Router> 
  )
else
  return (
    
      <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>PeerXP</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              
              <li className="nav-item" >
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
    
            </ul>
          </div>
        </div>
      </nav>

  
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={Signup} />
            <Route path="/ticket" component={Ticket} />
          </Switch>
        </div>
      </div>
    </div></Router> 
      
  
  );
}

export default withRouter(App);
