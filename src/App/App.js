import React, {Component} from 'react';
import '../scss/App.scss';
import {HashRouter, Switch, Route} from "react-router-dom";
import Home from '../components/Home'
import NotFound from '../components/NotFound'
import Login from '../components/Login'
import Register from "../components/Register";
import Logout from "../components/Logout";
class App extends Component{
  render() {
    return(
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/logout' component={Logout}/>
          <Route component={NotFound}/>
        </Switch>
      </HashRouter>
    )
  }
}

export default App;
