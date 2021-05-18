import React from 'react';
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let value = e.currentTarget.getAttribute('data-route');
    this.props.history.push(value);
  }

  render() {
    return (
      <div className="navbar-container flex items-center">
        <a href="/">
          <div className="flex items-center cursor-pointer">
            <img className="h-12 w-12" alt="logo" src="https://i.ibb.co/BC0YYDZ/benefact-logo.png"></img>
            <div className="questrial text-lg lg:text-xl font-bold tracking-wider">Benefact</div>
          </div>
        </a>
        <div className="ml-auto flex items-center">
          <a href="/nonprofits" className="hidden sm:flex transition duration-300 ease-in-out p-3 border border-black rounded hover:border-green-400 hover:text-green-400 cursor-pointer">Explore nonprofits<i className="bi-chevron-right ml-2"></i></a>
          <a href="/nonprofits" className="sm:hidden transition duration-300 ease-in-out border border-black rounded px-3 py-2 cursor-pointer hover:text-green-400 hover:border-green-400">Nonprofits<i className="bi-chevron-right ml-2"></i></a>
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar);
