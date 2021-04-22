import React from 'react';
import '../style/LandingPage.css';

// import svgs
import list from '../assets/list.svg';
import pick from '../assets/pick.svg';
import share from '../assets/share.svg';
import pay from '../assets/pay.svg';

export default class CycleSelect extends React.Component {
  constructor(props) {
    super(props);

    this.displayHidden = 'opacity-0'
    this.displayShow="opacity-1"
    this.divUnselected = 'text-gray-300 border-gray-300'
    this.divSelected = 'text-gray-100 bg-black border-black'

    this.state = {
      div1: this.divSelected,
      div2: this.divUnselected,
      div3: this.divUnselected,
      div4: this.divUnselected,
      display1: '',
      display2: this.displayHidden,
      display3: this.displayHidden,
      display4: this.displayHidden
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let value = e.currentTarget.getAttribute('data-value');
    var newState = {};

    switch (value) {
      case '1':
        newState = {
          div1: this.divSelected,
          div2: this.divUnselected,
          div3: this.divUnselected,
          div4: this.divUnselected,
          display1: this.displayShow,
          display2: this.displayHidden,
          display3: this.displayHidden,
          display4: this.displayHidden,
        }
        break;
      case '2':
        newState = {
          div1: this.divUnselected,
          div2: this.divSelected,
          div3: this.divUnselected,
          div4: this.divUnselected,
          display1: this.displayHidden,
          display2: '',
          display3: this.displayHidden,
          display4: this.displayHidden,
        }
        break;
      case '3':
        newState = {
          div1: this.divUnselected,
          div2: this.divUnselected,
          div3: this.divSelected,
          div4: this.divUnselected,
          display1: this.displayHidden,
          display2: this.displayHidden,
          display3: '',
          display4: this.displayHidden,
        }
        break;
      case '4':
        newState = {
          div1: this.divUnselected,
          div2: this.divUnselected,
          div3: this.divUnselected,
          div4: this.divSelected,
          display1: this.displayHidden,
          display2: this.displayHidden,
          display3: this.displayHidden,
          display4: '',
        }
        break;
      default:
        return;
    }

    this.setState(newState);
  }

  render() {
    return (
      <div className={"flex w-full " + this.props.className}>
        <div className="w-2/5 flex items-center">
          <div className="flex flex-col">
            <div data-value="1" onClick={this.handleClick} className={"cycle-select-box transition duration-200 ease-in-out mb-6 border rounded-lg p-3 " + this.state.div1}>
              <div className="flex flex-col">
                <h3 className="questrial text-2xl font-bold">View nonprofits</h3>
                <p className="mt-2">We handpick outstanding local nonprofits that you can fundraise for</p>
              </div>
            </div>
            <div data-value="2" onClick={this.handleClick} className={"cycle-select-box transition duration-200 ease-in-out mb-6 border rounded-lg p-3 " + this.state.div2}>
              <div className="flex flex-col">
                <h3 className="questrial text-2xl font-bold">Pick your favorite</h3>
                <p className="mt-2">Click on a nonprofit to view their mission, fundraising goals, and more</p>
              </div>
            </div>
            <div data-value="3" onClick={this.handleClick} className={"cycle-select-box transition duration-200 ease-in-out mb-6 border rounded-lg p-3 " + this.state.div3}>
              <div className="flex flex-col">
                <h3 className="questrial text-2xl font-bold">Begin fundraising</h3>
                <p className="mt-2">Sign up to be a fundraiser and we’ll send you your unique fundraising link</p>
              </div>
            </div>
            <div data-value="4" onClick={this.handleClick} className={"cycle-select-box transition duration-200 ease-in-out border rounded-lg p-3 " + this.state.div4}>
              <div className="flex flex-col">
                <h3 className="questrial text-2xl font-bold">Get paid</h3>
                <p className="mt-2">At the end of the fundraising campaign, Benefact will pay you based on the total amount that you fundraised</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/5 flex justify-center items-center">
          <div className="grid">
            <div className={"transition duration-300 ease-in-out layer-image " + this.state.display1}>
              <img src={list} alt="list" className="select-image"></img>
            </div>
            <div className={"transition duration-300 ease-in-out layer-image " + this.state.display2}>
              <img src={pick} alt="pick" className="select-image"></img>
            </div>
            <div className={"flex transition duration-300 ease-in-out layer-image " + this.state.display3}>
              <img src={share} alt="share" className="select-image"></img>
            </div>
            <div className={"transition duration-300 ease-in-out layer-image " + this.state.display4}>
              <img src={pay} alt="pay" className="select-image"></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
