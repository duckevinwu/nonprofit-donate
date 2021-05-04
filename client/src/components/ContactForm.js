import React from 'react';
import '../style/Campaign.css';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    })
  }

  handleMessageChange(e) {
    this.setState({
      message: e.target.value
    })
  }

  sendMessage(e) {
    e.preventDefault();
    console.log(this.state);
    fetch("https://formsubmit.co/ajax/386adb56430b04a0bbea6cbdb5c9243a ", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          message: this.state.message
      })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className={`flex justify-center ${this.props.className}`}>
        <form className="w-full lg:w-10/12 py-4 sm:p-6 bg-green-50 rounded-lg shadow-md" onSubmit={this.sendMessage}>
          <div className="flex justify-center mb-6 sm:mb-12 p-3 text-center">
            <h2 className="questrial text-4xl font-bold">Get in touch!</h2>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col lg:w-2/5 p-3">
              <label className="font-bold questrial text-lg mb-1" htmlFor="name">Name</label>
              <input className="transition border-2 border-gray-200 rounded p-2 focus:outline-none focus:border-green-500" placeholder="Jane Doe" type="text" id="name" value={this.state.name} onChange={this.handleNameChange} required></input>
              <label className="font-bold questrial text-lg mb-1 mt-6" htmlFor="email">Email</label>
              <input className="transition border-2 border-gray-200 rounded p-2 focus:outline-none focus:border-green-500" placeholder="name@example.com" type="email" id="email" value={this.state.email} onChange={this.handleEmailChange} required></input>
            </div>
            <div className="flex flex-col lg:w-3/5 p-3">
              <label className="font-bold questrial text-lg mb-1" htmlFor="message">Message</label>
              <textarea className="transition border-2 border-gray-200 rounded p-2 focus:outline-none focus:border-green-500 contact-textarea h-60 p-2 scroll-div" id="message" placeholder="Your message" value={this.state.message} onChange={this.handleMessageChange} required></textarea>
            </div>
          </div>
          <div className="flex justify-center mt-6 p-3">
            <button className="transition duration-300 ease-in-out text-white bg-black border-0 py-3 px-6 focus:outline-none rounded hover:bg-green-400 hover:text-black cursor-pointer">Send Message</button>
          </div>
        </form>
      </div>
    )
  }
}
