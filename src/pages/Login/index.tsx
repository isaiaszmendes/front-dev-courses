import React, { Component } from 'react';
import './index.css';

// Container
import LoginContainer from './container';

class Login extends Component {
  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    return (
      <LoginContainer />
    );
  }
}

export default Login;
