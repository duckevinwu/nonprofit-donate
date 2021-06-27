import React from 'react';
import '../style/Preloader.css';

export default class Preloader extends React.Component {
  render() {
    return (
      <div className={`${this.props.className} flex justify-center items-center`}>
        <div className="loader"></div>
      </div>
    )
  }
}
