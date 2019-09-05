import React, {Component} from 'react';
import '../scss/App.scss';
import {HashRouter, Switch, Route} from "react-router-dom";
import Home from '../components/Home'
import NotFound from '../components/NotFound'
class App extends Component{
  render() {
    return(
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </HashRouter>
    )
  }
}

export default App;
