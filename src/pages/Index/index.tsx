import React, { Component } from 'react';

// container
import IndexContainer from './container';

class Index extends Component {
  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    return (
      <IndexContainer />
    );
  }
}

export default Index;
