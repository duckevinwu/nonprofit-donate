import React from 'react';
import { withRouter } from 'react-router-dom';

class HCCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleRedirect(e) {
    let url = e.currentTarget.getAttribute('data-url');
    this.props.history.push(url);
  }

  render() {
    return (
      <div data-url={this.props.redirect} onClick={this.handleRedirect} className={`${this.props.className} flex flex-col sm:flex-row p-6 bg-white border items-center rounded-md shadow-md help-center transition duration-300 ease-in-out cursor-pointer hover:shadow-xl`}>
        <div className="flex justify-center items-center">
          <i className={`${this.props.icon} text-green-400 text-4xl p-8`}></i>
        </div>
        <div className="pr-0 sm:pr-12">
          <h3 className="font-bold questrial text-xl mb-2">{this.props.title}</h3>
          <p className="text-gray-700">{this.props.description}</p>
        </div>
      </div>
    )
  }
}

export default withRouter(HCCard);
