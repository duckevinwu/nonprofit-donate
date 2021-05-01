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
      <div className={`${this.props.className} border shadow-lg email-template`}>
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
            <p>Dear [insert name],</p>
            <div className="mt-3"></div>
            <p>You might have heard that I&rsquo;m fundraising to [insert reason why you&rsquo;re fundraising]. This cause is very important to me because [supply a personal reason that appeals to the reader&rsquo;s emotions].</p>
            <div className="mt-3"></div>
            <p>I&rsquo;m encouraged by the support I&rsquo;ve already received, but I still need help reaching my fundraising goal of [insert dollar amount].</p>
            <div className="mt-3"></div>
            <p>Would you be willing to make a contribution to my fundraiser? A gift of any amount would mean the world to me.</p>
            <div className="mt-3"></div>
            <p>To donate, simply click the link to my fundraiser below:</p>
            <div className="mt-3"></div>
            <p>[Insert link to fundraiser]</p>
            <div className="mt-3"></div>
            <p>It would also mean a lot if you could share my fundraiser link on social media. The more exposure I get, the faster I will reach my fundraising goal.</p>
            <div className="mt-3"></div>
            <p>I&rsquo;d love to talk to you in person about my fundraiser, so please don&rsquo;t hesitate to reach out.</p>
            <div className="mt-3"></div>
            <p>With love/Sincerely,</p>
            <div className="mt-3"></div>
            <p>[Your name]</p>
          </div>
          <div className="p-2 flex items-center">
            <i onClick={this.handleCopy} className="fas fa-copy text-2xl text-black my-2 hover:text-green-500 cursor-pointer transition"></i>
            <p className={`transition ${this.state.copy} ml-2 text-green-500`}>Text copied!</p>
          </div>
        </div>
      </div>
    )
  }
}
