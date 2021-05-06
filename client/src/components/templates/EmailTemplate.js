import React from 'react';

export default class EmailTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      copy: 'opacity-0'
    }

    this.emailBody = React.createRef();
    this.handleCopy = this.handleCopy.bind(this);
  }

  handleCopy() {
    let emailBodyText = this.emailBody.current.innerText;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(emailBodyText);
    } else {
      var textField = document.createElement('textarea')
      textField.innerText = emailBodyText;
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
      <div className={`${this.props.className} border shadow-lg email-template bg-white`}>
        <div className="flex flex-col">
          <div className="bg-gray-500 flex p-2">
            <div className="text-white font-bold">Subject</div>
          </div>
          <div className="p-2">
            <div className="border-b border-gray-300">
              <div className="my-1 text-gray-500">To</div>
            </div>
          </div>
          <div className="p-2">
            <div className="border-b border-gray-300">
              <div className="my-1 text-gray-500">Subject</div>
            </div>
          </div>
          <div className="p-2 scroll-div lg:h-80 lg:overflow-y-auto text-sm default-font" ref={this.emailBody}>
            <p>Hey John,</p>
            <div className="mt-3"></div>
            <p>Long time no see — hope school has been going well in New York!</p>
            <div className="mt-3"></div>
            <p>I know this is a little out of the blue, but I’m running a fundraising campaign for Sharing Excess and I was wondering if you’d be willing to chip in?</p>
            <div className="mt-3"></div>
            <p>Sharing Excess is a nonprofit that rescues wasted food in Philadelphia and donates it to those in need. They’ve rescued 2.2 million pounds of food to date, and your donation would help them reach 3 million pounds by the end of the year!</p>
            <div className="mt-3"></div>
            <p>Their mission means a bunch to me, as I’ve seen dozens of hungry families in Philly, and I figured that you might care enough to chip in as well. Every dollar donated equates to 8 meals for families in need.</p>
            <div className="mt-3"></div>
            <p>There’s also some unique perks if you donate — you could get your name on Sharing Excess’s website, a personalized note from the CEO, and more. Here’s the <font className="text-blue-500 underline default-font">link</font> to donate!</p>
            <div className="mt-3"></div>
            <p>Regardless of whether you donate or not, it’d be awesome if you could help me spread the word. Here’s a <font className="text-blue-500 underline default-font">Tweet</font> and <font className="text-blue-500 underline default-font">Facebook post</font> you can share. You can also tell your friends or family to donate via text by texting “D2SE” to (202) 858-1233.</p>
            <div className="mt-3"></div>
            <p>If you have any questions, just hit me up! Thanks so much John, I really appreciate any support you can give. We should catch up next time you’re in town?</p>
            <div className="mt-3"></div>
            <p>Best,</p>
            <p>[Your name]</p>
          </div>
          <div className="p-2 flex items-center">
            <i onClick={this.handleCopy} className="bi-files text-2xl shadow text-green-500 p-2 bg-green-50 rounded my-2 hover:bg-green-500 hover:text-white cursor-pointer transition"></i>
            <p className={`transition ${this.state.copy} ml-2 text-green-500`}>Text copied!</p>
          </div>
        </div>
      </div>
    )
  }
}
