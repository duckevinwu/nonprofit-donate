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
          <p className="text-message from-me">Hello</p>
          <p className="text-message from-them">Who is this</p>
          <p className="text-message from-me">Your old friend</p>
          <p className="text-message from-them">Wow it's been a long time</p>
          <div className="text-message from-me last">
            <p className="scroll-div lg:h-48 lg:overflow-y-scroll" ref={this.textBody}>
              Here is a long block of text that introduces the nonprofit and what it does.
              After explaining this, ask the person to do donate and possibly share the message with as many people as they can to filler filler filler filler.
              This is a third sentence to make this text pretty long so we can see how the scrolling capabilities works.
            </p>
          </div>
          <div className="text-message text-message-copy">
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
