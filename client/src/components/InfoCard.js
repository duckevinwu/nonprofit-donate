import React from 'react';

export default class InfoCard extends React.Component {
  render() {
    switch(this.props.status) {
      case 'register':
        return (
          <div>Please register for an account</div>
        )
      case 'verify':
        return (
          <div>Please verify your email</div>
        )
      default:
        return (<div></div>)
    }
  }
}
