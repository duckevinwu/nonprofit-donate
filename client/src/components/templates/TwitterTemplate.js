import React from 'react';
import '../../style/Campaign.css';

export default class TwitterTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      copy: 'opacity-0'
    }

    this.textBody = React.createRef();
    this.handleCopy = this.handleCopy.bind(this);
  }

  handleCopy() {
    let bodyText = this.textBody.current.innerText;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(bodyText);
    } else {
      var textField = document.createElement('textarea')
      textField.innerText = bodyText;
      document.body.appendChild(textField)
      textField.select()
      document.execCommand('copy')
      textField.remove()
    }

    if (this.state.copy === 'opacity-0') {
      this.setState({ copy: 'opacity-1' }, function() {
        setTimeout(() => {
          this.setState({ copy: 'opacity-0' });
        }, 2000);
      })
    }
  }

  render() {
    return (
      <div className={`${this.props.className} border shadow-lg email-template rounded-xl`}>
        <div className="flex flex-col">
          <div className="flex items-center p-2">
            <img className="w-16 h-16 rounded-full object-cover" alt="facebook-template-profile" src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png"/>
            <div className="flex flex-col ml-2">
              <p className="font-bold text-sm">First Last</p>
              <p className="text-gray-600 text-sm">@firstlast</p>
            </div>
          </div>
          <p className="px-2 my-3 text-md" ref={this.textBody}>
            Please consider donating to my fundraiser for Sharing Excess! Every dollar donated = 8 lbs of food rescued.
            We even have fun donation perks! Here's the link to chip in: <font className="underline text-blue-500">[insert your unique link]</font>
          </p>
          <div className="p-2 border-t border-gray-300">
            <div className="flex items-center">
              <i onClick={this.handleCopy} className="fas fa-copy text-2xl text-black my-2 hover:text-green-500 cursor-pointer transition"></i>
              <p className={`transition ${this.state.copy} ml-2 text-green-500`}>Text copied!</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
