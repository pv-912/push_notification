import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import HomeIndex from './components/Index';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeIndex} />
          <Route path="/test" component={HomeIndex} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
