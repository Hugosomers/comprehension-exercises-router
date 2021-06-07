import React, { Component } from 'react'
import { Redirect } from 'react-router';

export default class StrictAccess extends Component {
  render() {
    const { user } = this.props;
    if (user.username === 'João' && user.password === '1234') {
      return (<p> Welcome João! </p>)
    }
    alert('Chama no xampson')
    return (
      <Redirect to="/" />
    );
  }
}
