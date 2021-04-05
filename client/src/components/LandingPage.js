import React from 'react';
import '../style/LandingPage.css';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      nonprofitModal: 'modal-closed',
      forprofitModal: 'modal-closed'
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal(e) {
    let modalName = e.target.value
    let modalObj = {}

    switch(modalName) {
      case 'nonprofit':
        modalObj = { nonprofitModal: '' }
        break
      case 'forprofit':
        modalObj = { forprofitModal: '' }
        break
      default:
        break
    }

    document.body.style.overflowY = 'hidden';
    this.setState(modalObj)
  }

  closeModal(e) {
    let modalName = e.target.value
    let modalObj = {}

    switch(modalName) {
      case 'nonprofit':
        modalObj = { nonprofitModal: 'modal-closed' }
        break
      case 'forprofit':
        modalObj = { forprofitModal: 'modal-closed' }
        break
      default:
        break
    }

    document.body.style.overflowY = 'auto';
    this.setState(modalObj)
  }

  render() {
    return (
      <>
        <div className="landing-wrapper bg-gray-900">
          <div className="w-full logo-container flex items-center">
            <div className="container mx-auto flex items-center mt-6">
              <img className="h-16 w-16" alt="logo" src="https://i.ibb.co/wBHTLK9/169087307-1111438542694589-1773721679902646600-n.png"></img>
              <div className="text-white ubuntu text-xl">Benefact</div>
            </div>
          </div>
          <div className="top-section-wrapper flex items-center">
            <div className="absolute dot-grid md:w-3/5 md:block hidden top-0 right-0"></div>
            <section className="text-gray-400 body-font z-10 w-full">
              <div className="container mx-auto flex px-5 pt-24 pb-36 md:flex-row flex-col items-center relative">
                <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <h1 className="playfair text-4xl md:text-5xl mb-6 font-medium text-white">
                    Raise. Impact. Together.
                  </h1>
                  <p className="text-xl leading-relaxed">
                    Benefact unites nonprofits and for-profits to raise money and increase impact.
                  </p>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 opacity-0 md:block hidden">
                  <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
                </div>
              </div>
            </section>
            <div className="arrow-container">
              <div className="arrow-down"></div>
            </div>
          </div>
          <section className="text-gray-400 body-font pt-24">
            <div className="container mx-auto flex px-5 pb-36 md:flex-row flex-col md:justify-center">
              <div className="md:w-5/12">
                <div className="flex flex-col">
                  <h2 className="playfair text-white text-3xl">We all know what's wrong.</h2>
                  <p className="border-l-2 border-gray-400 pl-2 mt-4">Nonprofits are doing crucial work for society, but they are underfunded.</p>
                  <p className="border-l-2 border-gray-400 pl-2 mt-4">For-profits want to help nonprofits and hit Corporate Social Responsibility (CSR) goals, but they don’t want to harm their bottom line in the process.</p>
                </div>
                <div className="mt-8 md:mt-16 flex justify-center h-full">
                  <img className="object-cover object-center rounded img1" alt="problem" src="https://i.ibb.co/fChGK80/volunteer.jpg"/>
                </div>
              </div>
              <div className="md:w-5/12 md:flex md:flex-col-reverse md:ml-auto">
                <div className="flex flex-col mt-24 md:mt-16">
                  <h2 className="playfair text-white text-3xl text-right">Benefact solves both problems.</h2>
                    <p className="border-r-2 border-gray-400 pr-2 mt-4 text-right">We help for-profits support nonprofits through tech-enabled campaigns instead of direct donations.</p>
                    <p className="border-r-2 border-gray-400 pr-2 mt-4 text-right">Our outcome: Nonprofits raise more money and for-profits hit CSR goals without harming their bottom line.</p>
                </div>
                <div className="mt-8 md:mt-0 flex justify-center h-full">
                  <img className="object-cover object-center rounded img1" alt="solution" src="https://i.ibb.co/nkzkrhC/corporate.jpg"/>
                </div>
              </div>
            </div>
          </section>
          <section className="text-gray-400 body-font bg-gray-800">
            <div className="container mx-auto flex px-5 py-24 flex-col">
              <div className="uppercase tracking-widest text-lg">For nonprofits</div>
              <div className="text-white playfair text-3xl mb-6">Start raising money with zero effort.</div>
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col md:w-1/3 py-6">
                  <div className="w-16 h-16 flex justify-center items-center bg-gray-700 rounded-full mb-2">
                    <i className="fas fa-ban text-green-300 text-4xl"></i>
                  </div>
                  <div className="text-white text-xl pl-2 my-3 border-l-4 border-white">Zero risk</div>
                  <div>You don't pay unless you raise money</div>
                </div>
                <div className="flex flex-col md:w-1/3 md:px-6 py-6">
                  <div className="w-16 h-16 flex justify-center items-center bg-gray-700 rounded-full mb-2">
                    <i className="fas fa-clock text-green-300 text-4xl"></i>
                  </div>
                  <div className="text-white text-xl pl-2 my-3 border-l-4 border-white">Minimal time burden</div>
                  <div>We do all the heavy lifting so you can get back to your core mission</div>
                </div>
                <div className="flex flex-col md:w-1/3 py-6">
                  <div className="w-16 h-16 flex justify-center items-center bg-gray-700 rounded-full mb-2">
                    <i className="far fa-handshake text-green-300 text-4xl"></i>
                  </div>
                  <div className="text-white text-xl pl-2 my-3 border-l-4 border-white">New partnerships</div>
                  <div>Develop new relationships with for-profits that go beyond our donation campaigns</div>
                </div>
              </div>
            </div>
          </section>
          <section className="text-gray-400 body-font bg-gray-800">
            <div className="container mx-auto flex px-5 py-24 flex-col border-t-2 border-gray-500">
              <div className="uppercase tracking-widest text-lg">For for-profits</div>
              <div className="text-white playfair text-3xl mb-6">The new way to hit your CSR goals.</div>
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col md:w-1/3 py-6">
                  <div className="w-16 h-16 flex justify-center items-center bg-gray-700 rounded-full mb-2">
                    <i className="fas fa-sort-amount-up text-blue-300 text-4xl"></i>
                  </div>
                  <div className="text-white text-xl pl-2 my-2 border-l-4 border-white">Advance CSR goals</div>
                  <div>Support local, national, or international nonprofits without harming your bottom line</div>
                </div>
                <div className="flex flex-col md:w-1/3 md:px-6 py-6">
                  <div className="w-16 h-16 flex justify-center items-center bg-gray-700 rounded-full mb-2">
                    <i className="fas fa-tasks text-blue-300 text-4xl"></i>
                  </div>
                  <div className="text-white text-xl pl-2 my-2 border-l-4 border-white">Mission alignment</div>
                  <div>We find nonprofits that that align with your core business</div>
                </div>
                <div className="flex flex-col md:w-1/3 py-6">
                  <div className="w-16 h-16 flex justify-center items-center bg-gray-700 rounded-full mb-2">
                    <i className="fas fa-users text-blue-300 text-4xl"></i>
                  </div>
                  <div className="text-white text-xl pl-2 my-2 border-l-4 border-white">Beyond direct donations</div>
                  <div>Our campaigns foster the next generation of donors and altruistic-minded individuals</div>
                </div>
              </div>
            </div>
          </section>
          <section className="text-gray-400 body-font bg-gray-900">
            <div className="container mx-auto flex px-5 py-24 lg:flex-row flex-col items-center md:items-start lg:items-center">
              <div className="text-center md:text-left">
                <div className="text-white playfair text-3xl mb-6">What are you waiting for?</div>
                <p className="mb-8 lg:mb-0 text-lg">
                  Contact us today to start raising money and expanding your impact!
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start md:flex-row lg:ml-auto">
                <button value={'nonprofit'} onClick={this.openModal} className="transition duration-150 ease-in-out mb-8 md:mb-0 md:mr-6 inline-flex text-white bg-gray-600 border-0 py-3 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg">I'm a nonprofit</button>
                <button value={'forprofit'} onClick={this.openModal} className="transition duration-150 ease-in-out inline-flex text-gray-700 bg-gray-100 border-0 py-3 px-6 focus:outline-none hover:bg-gray-500 hover:text-white rounded text-lg">I'm a for-profit</button>
              </div>
            </div>
          </section>
        </div>
        <div className={'modal ' + this.state.nonprofitModal}>
          <button className="close" value={'nonprofit'} onClick={this.closeModal}>&times;</button>
          <div className="center text-center launch-form">
            <iframe title="nonprofit-form" className="launch-form" loading="lazy" src="https://docs.google.com/forms/d/e/1FAIpQLScU7b4drHN-CJW3ksXxARAxbL99Ikhcn0lGaKlTRMWJTtc3QQ/viewform?embedded=true" width="100%" height="987" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
          </div>
        </div>
        <div className={'modal ' + this.state.forprofitModal}>
          <button className="close" value={'forprofit'} onClick={this.closeModal}>&times;</button>
          <div className="center text-center launch-form">
            <iframe title="forprofit-form" className="launch-form" loading="lazy" src="https://docs.google.com/forms/d/e/1FAIpQLSe_DhMmWeb1lBC5WmBwYVWRu801YtJ-wF2X4wysZzlujv_N2Q/viewform?embedded=true" width="100%" height="987" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
          </div>
        </div>
      </>
    )
  }
}
