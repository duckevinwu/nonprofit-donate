import React from 'react';
import '../style/LandingPage.css';

export default class RevenueCalulator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sliderValue: "0",
      raised: "0",
      earned: "0"
    }

    this.handleSliderChange = this.handleSliderChange.bind(this);
  }

  handleSliderChange(e) {
    let value = e.target.value;
    let earned = Math.max(value * 0.05 - 1, 0);
    earned = earned.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let raised = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    this.setState({
      sliderValue: value,
      raised: raised,
      earned: earned
    })
  }

  render() {
    return (
      <div className={`${this.props.className} flex flex-col text-center`}>
        <h3 className="text-4xl questrial font-bold">See how much you could earn with Benefact</h3>
        <p className="mt-8 text-center md:text-left">Anyone can fundraise for our nonprofit partners and get paid by Benefact - all you need is a bank account!</p>
        <div className="flex flex-col mt-12">
          <div className="flex">
            <p className="text-lg w-3/5 text-left sm:w-full">Total amount fundraised</p>
            <p className="ml-auto text-lg">{`$${this.state.raised}`}</p>
          </div>
          <div className="slidecontainer mt-2">
            <input className="slider" type="range" min="0" max="20000" value={this.state.sliderValue} onChange={this.handleSliderChange}/>
          </div>
        </div>
        <div className="mt-12 mb-6">
          <h4 className="text-3xl questrial mb-6">Your payout</h4>
          <div className="p-6 shadow-lg bg-black rounded-md">
            <p className="text-green-400 text-6xl">{`$${this.state.earned}`}</p>
          </div>
        </div>
        <div className="mb-12">
          <p className="text-sm text-gray-500 sm:mx-6">
            *This calculator only goes up to $20,000 raised, but that is in no way a limit.
            You can certainly raise more than this and thus earn more as well.
          </p>
        </div>
        <a href="/nonprofits">
          <button className="transition duration-300 ease-in-out text-white bg-green-500 border-0 py-3 px-6 focus:outline-none rounded hover:bg-green-400 cursor-pointer">Get started <i className="bi-chevron-right ml-6"></i></button>
        </a>
      </div>
    )
  }
}
