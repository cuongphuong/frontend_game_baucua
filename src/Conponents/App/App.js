import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from '../AppRoute/AppRoute';
import './App.css';
import { connect } from 'react-redux';
class App extends Component {

  getCookie = (cname) => {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  checkCookie() {
    if (this.getCookie("baucua_username") !== "") {
      var username = this.getCookie("baucua_username");
      var { dispatch } = this.props;

      var obj = {
        'login': true,
        'name': username
      };

      dispatch({
        type: 'ADD_INFO_USER',
        item: obj
      });
    }
  }

  componentWillMount() {
    this.checkCookie();
  }


  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <AppRoute></AppRoute>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(function (state) {
  return { StateInfoUser: state.StateInfoUser }
})(App);
