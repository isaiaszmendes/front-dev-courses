import React, { Component } from 'react';

// container
import RecruiterContainer from './container';

class Recruiter extends Component {
  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    return (
      <RecruiterContainer />
    );
  }
}

export default Recruiter;
