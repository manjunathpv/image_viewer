import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../screens/login/Login';
import Home from '../screens/home/Home';

class Controller extends Component {

  constructor() {
    super();
    this.baseUrl = "https://api.instagram.com/v1/users/self/";
    this.access_token = "8661035776.d0fcd39.39f63ab2f88d4f9c92b0862729ee2784";
  }

  render() {
    return (
      <Router>
        <div className="main-container">
          <Route exact path='/' render={(props) => <Login {...props} />} />
          <Route exact path='/home' render={(props) => <Home {...props} baseUrl={this.baseUrl} accessToken={this.access_token} />} />
        </div>
      </Router>
    )
  }
}

export default Controller;