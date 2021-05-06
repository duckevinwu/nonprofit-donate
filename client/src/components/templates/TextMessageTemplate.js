import React from 'react';
import '../../style/Campaign.css';

export default class TextMessageTemplate extends React.Component {
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
      <div className={`${this.props.className} w-5/6`}>
        <div className="flex flex-col">
          <div className="text-message from-me simple last">
            <p className="scroll-div lg:h-80 lg:overflow-y-scroll" ref={this.textBody}>
              Hey John! Long time no see, hope you’re doing well :)
              I’m running an online fundraiser for Sharing Excess, a nonprofit that rescues wasted food in Philly, and I was wondering if you’d be willing to chip in?
              Every dollar donated equals 8 meals to families in need, and we even have neat donation perks, such as a personalized note from the CEO.
              If you’re interested, all you have to do is text “D2SE” to (202) 858-1233 or visit this link: <font className="underline">[insert your unique link]</font>.
            </p>
          </div>
          <div className="text-message text-message-copy simple">
            <div className="flex items-center">
              <i onClick={this.handleCopy} className="bi-files text-2xl shadow text-red-500 p-2 my-3 bg-red-100 rounded hover:bg-red-500 hover:text-white cursor-pointer transition"></i>
              <p className={`transition ${this.state.copy} ml-2 text-red-500`}>Text copied!</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
