import React from 'react';
import '../style/LandingPage.css';
import { appendScript } from '../js/AppendScript.js';

// import svgs
import hero from '../assets/hero.svg';

export default class LinkDemo extends React.Component {
  componentDidMount() {
      appendScript('https://cdn.jsdelivr.net/gh/duckevinwu/benefact-public@v0.2-alpha/benefactlink.min.js');
  }

  render() {
    return (
      <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/duckevinwu/benefact-public@v0.2-alpha/benefactlink.min.css"/>
        <section className="hero-section">
          <div className="container mx-auto px-3 lg:px-5">
            <div className="navbar-container flex items-center">
              <a href="/">
                <div className="flex items-center cursor-pointer">
                  <img className="h-12 w-12" alt="logo" src="https://i.ibb.co/BC0YYDZ/benefact-logo.png"></img>
                  <div className="questrial text-lg lg:text-xl font-bold tracking-wider">Benefact</div>
                </div>
              </a>
              <div className="ml-auto flex items-center">
                <button data-multiple="true" id="bl-button" className="bl-button sm:flex transition duration-300 ease-in-out p-3 border border-black rounded hover:border-green-400 hover:text-green-400 cursor-pointer">Open Link</button>
              </div>
            </div>
            <div className="hero-info-container flex items-center justify-center">
              <div className="flex flex-col items-center lg:flex-row">
                <div className="text-center lg:text-left lg:mr-10 mb-16 lg:mb-0 flex items-center lg:w-1/2">
                  <div>
                    <h1 className="text-4xl md:text-5xl questrial mb-6 font-bold">Get paid to <font className="text-green-400 questrial">help nonprofits</font></h1>
                    <p className="sm:text-lg leading-relaxed mb-6 text-gray-800">
                      Benefact is where anyone can get paid to raise money for nonprofits.
                    </p>
                    <button id="bl-button" className="bl-button transition duration-300 ease-in-out text-white bg-black border-0 py-3 px-6 focus:outline-none rounded hover:bg-green-400 hover:text-black cursor-pointer">Open Link</button>
                  </div>
                </div>
                <div className="flex items-center justify-center lg:w-1/2">
                  <img alt="hero" src={hero} className="hero-image"></img>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="absolute left-6 bottom-6">
          <button id="bl-button" className="bl-button bg-black text-white rounded-full h-16 w-16 hover:bg-green-400 transition duration-300"><i className="bi-cash-coin text-3xl"></i></button>
        </div>
      </>
    )
  }
}
