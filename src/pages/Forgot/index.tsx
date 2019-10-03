import React, { Component } from 'react';
import './index.css';

// Container
import ForgotContainer from './container';

interface Props {
  onFormSubmit(): void
}

interface State {
  email: string
}

class Forgot extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  componentDidMount() {
    console.log('componentDidMount');
  }

  onFormSubmit = (e: Event): any => {
    e.preventDefault();
    console.log('clicou em mim', this.state);
  }

  handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    this.setState({
      email: target.value,
    });
  }

  render() {
    const { email } = this.state;
    return (
      <ForgotContainer
        email={email}
        onFormSubmit={this.onFormSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

export default Forgot;
