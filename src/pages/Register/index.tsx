import React, { Component } from 'react';
import './index.css';

// Container
import RegisterContainer from './container';

class Register extends Component {
  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    return (
      <RegisterContainer />
    );
  }
}

export default Register;
