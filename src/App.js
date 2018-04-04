import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import {Function1} from './components/utils/function';
import HomeIndex from './components/Index';
import MessageIndex from './components/MessageIndex';

class App extends Component {
  componentWillMount(){
    Function1();
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeIndex} />
          <Route path="/test" component={HomeIndex} />
          <Route exact path="/message" component={MessageIndex} />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
