import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../style/HelpCenter.css';

class HCNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let route = e.currentTarget.getAttribute('data-route');
    this.props.history.push(route);
  }

  render() {
    return (
      <nav className="bg-black text-white">
        <div className="container mx-auto px-3 py-10 help-center">
          <div className="flex flex-col-reverse sm:flex-row items-center">
            <div data-route="/help" onClick={this.handleClick} className="flex items-center cursor-pointer">
              <img className="h-12 w-12" alt="logo" src="https://i.ibb.co/wBHTLK9/169087307-1111438542694589-1773721679902646600-n.png"></img>
              <div className="questrial text-lg lg:text-xl font-bold tracking-wider">Benefact</div>
              <h1 className="ml-1">| Help Center</h1>
            </div>
            <div className="mb-4 sm:mb-0 sm:ml-auto"><a target="_blank" href="/" className="transition text-sm hover:text-green-400"><i className="bi-box-arrow-up-right mr-2"></i>Go to Benefact</a></div>
          </div>
          <div className="flex justify-center text-center sm:justify-start text-left mt-6">
            <h2 className="text-2xl">Advice and answers from the Benefact team</h2>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(HCNavbar);
