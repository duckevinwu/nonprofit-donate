import React from 'react';
import '../style/LandingPage.css';

// import svgs
import list from '../assets/list.svg';
import pick from '../assets/pick.svg';
import share from '../assets/share.svg';
import pay from '../assets/pay.svg';
import report from '../assets/report.svg';

export default class CycleSelect extends React.Component {
  constructor(props) {
    super(props);

    this.displayHidden = 'opacity-0'
    this.displayShow="opacity-1"
    this.divUnselected = 'text-gray-400 border-gray-300'
    this.divSelected = 'text-gray-100 bg-black border-black'

    this.state = {
      selected: '1'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let value = e.currentTarget.getAttribute('data-value');
    this.setState({
      selected: value
    })
  }

  render() {
    return (
      <div className={"flex w-full " + this.props.className}>
        <div className="w-2/5 flex items-center">
          <div className="flex flex-col">
            <div data-value="1" onClick={this.handleClick} className={`${this.state.selected === '1' ? this.divSelected : this.divUnselected} cycle-select-box transition duration-200 ease-in-out mb-6 border rounded-lg shadow-md p-3`}>
              <div className="flex flex-col">
                <h3 className="questrial text-2xl font-bold">View nonprofits</h3>
                <p className="mt-2">We handpick outstanding local nonprofits that you can fundraise for</p>
              </div>
            </div>
            <div data-value="2" onClick={this.handleClick} className={`${this.state.selected === '2' ? this.divSelected : this.divUnselected} cycle-select-box transition duration-200 ease-in-out mb-6 border rounded-lg shadow-md p-3`}>
              <div className="flex flex-col">
                <h3 className="questrial text-2xl font-bold">Pick your favorite</h3>
                <p className="mt-2">Click on a nonprofit to view their mission, fundraising goals, and more</p>
              </div>
            </div>
            <div data-value="3" onClick={this.handleClick} className={`${this.state.selected === '3' ? this.divSelected : this.divUnselected} cycle-select-box transition duration-200 ease-in-out mb-6 border rounded-lg shadow-md p-3`}>
              <div className="flex flex-col">
                <h3 className="questrial text-2xl font-bold">Begin fundraising</h3>
                <p className="mt-2">Sign up to be a fundraiser and we’ll send you your unique fundraising link</p>
              </div>
            </div>
            <div data-value="4" onClick={this.handleClick} className={`${this.state.selected === '4' ? this.divSelected : this.divUnselected} cycle-select-box transition duration-200 ease-in-out mb-6 border rounded-lg shadow-md p-3`}>
              <div className="flex flex-col">
                <h3 className="questrial text-2xl font-bold">Get paid</h3>
                <p className="mt-2">At the end of the fundraising campaign, Benefact will pay you based on the total amount that you fundraised</p>
              </div>
            </div>
            <div data-value="5" onClick={this.handleClick} className={`${this.state.selected === '5' ? this.divSelected : this.divUnselected} cycle-select-box transition duration-200 ease-in-out border rounded-lg shadow-md p-3`}>
              <div className="flex flex-col">
                <h3 className="questrial text-2xl font-bold">See your impact</h3>
                <p className="mt-2">We'll send you an Impact Report detailing the real-world impact you had on your nonprofit</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/5 flex justify-center items-center">
          <div className="grid">
            <div className={`${this.state.selected === '1' ? this.displayShow : this.displayHidden} transition duration-300 ease-in-out layer-image`}>
              <img src={list} alt="list" className="select-image"></img>
            </div>
            <div className={`${this.state.selected === '2' ? this.displayShow : this.displayHidden} transition duration-300 ease-in-out layer-image`}>
              <img src={pick} alt="pick" className="select-image"></img>
            </div>
            <div className={`${this.state.selected === '3' ? this.displayShow : this.displayHidden} flex transition duration-300 ease-in-out layer-image`}>
              <img src={share} alt="share" className="select-image"></img>
            </div>
            <div className={`${this.state.selected === '4' ? this.displayShow : this.displayHidden} transition duration-300 ease-in-out layer-image`}>
              <img src={pay} alt="pay" className="select-image"></img>
            </div>
            <div className={`${this.state.selected === '5' ? this.displayShow : this.displayHidden} transition duration-300 ease-in-out layer-image`}>
              <img src={report} alt="report" className="select-image"></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
