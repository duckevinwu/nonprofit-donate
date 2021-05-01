import React from 'react';
import '../style/Campaign.css';

// templates
import EmailTemplate from './templates/EmailTemplate.js';
import TextMessageTemplate from './templates/TextMessageTemplate.js';
import FacebookTemplate from './templates/FacebookTemplate.js';
import TwitterTemplate from './templates/TwitterTemplate.js';

export default class OnlineResources extends React.Component {
  constructor(props) {
    super(props);

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
        <div className="hidden lg:w-2/5 lg:flex items-center justify-center">
          <div className="flex flex-col w-3/4">
            <div data-value="1" onClick={this.handleClick} className={`or-text ${this.state.selected === '1' ? 'or-selected' : ''}`}>
              <div className="flex p-3">
                <i className="bi-envelope text-xl"></i>
                <div className="text-xl font-bold ml-2 questrial">Email</div>
              </div>
            </div>
            <div data-value="2" onClick={this.handleClick} className={`or-text ${this.state.selected === '2' ? 'or-selected' : ''}`}>
              <div className="flex p-3">
                <i className="bi-chat text-xl"></i>
                <div className="text-xl font-bold ml-2 questrial">Text Message</div>
              </div>
            </div>
            <div data-value="3" onClick={this.handleClick} className={`or-text ${this.state.selected === '3' ? 'or-selected' : ''}`}>
              <div className="flex p-3">
                <i className="bi-facebook text-xl"></i>
                <div className="text-xl font-bold ml-2 questrial">Facebook</div>
              </div>
            </div>
            <div data-value="4" onClick={this.handleClick} className={`or-text ${this.state.selected === '4' ? 'or-selected' : ''}`}>
              <div className="flex p-3">
                <i className="bi-twitter text-xl"></i>
                <div className="text-xl font-bold ml-2 questrial">Twitter</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/5 flex justify-center items-center">
          <div className="lg:grid w-full">
            <div className={`or-resource first ${this.state.selected === '1' ? 'or-selected' : ''}`}>
              <div className="flex flex-col">
                <h2 className="text-4xl questrial font-bold">Email</h2>
                <p className="mt-2">
                  Keep your emails straightforward and genuine. When you sign up for a campaign, we'll send you an email template specific to the nonprofit that you're supporting. You can modify our template as you please. Start with your 5-10 closest contacts, then branch out to more distant ones. Here's an example of an email geared towards a friend:
                </p>
                <div className="flex justify-center">
                  <EmailTemplate className="mt-6"/>
                </div>
              </div>
            </div>
            <div className={`or-resource ${this.state.selected === '2' ? 'or-selected' : ''}`}>
              <div className="flex flex-col">
                <h2 className="text-4xl questrial font-bold">Text Message</h2>
                <p className="mt-2">
                  Here is a paragraph of text that describes how to send text messages for fundraising. Here is some filler text to extend the line
                </p>
                <div className="flex justify-center">
                  <TextMessageTemplate className="mt-6"/>
                </div>
              </div>
            </div>
            <div className={`or-resource ${this.state.selected === '3' ? 'or-selected' : ''}`}>
              <div className="flex flex-col">
                <h2 className="text-4xl questrial font-bold">Facebook</h2>
                <p className="mt-2">
                  Here is a paragraph of text that describes how to post on Facebook for fundraising. Here is some filler text to extend the line
                </p>
                <div className="flex justify-center">
                  <FacebookTemplate className="mt-6"/>
                </div>
              </div>
            </div>
            <div className={`or-resource ${this.state.selected === '4' ? 'or-selected' : ''}`}>
              <div className="flex flex-col">
                <h2 className="text-4xl questrial font-bold">Twitter</h2>
                <p className="mt-2">
                  Here is a paragraph of text that describes how to post on Twitter for fundraising. Here is some filler text to extend the line
                </p>
                <div className="flex justify-center">
                  <TwitterTemplate className="mt-6"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
