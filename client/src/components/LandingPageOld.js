import React from 'react';
import '../style/LandingPage.css';

export default class LandingPageOld extends React.Component {
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
                    A new way to give back.
                  </h1>
                  <p className="text-xl leading-relaxed">
                    Raise money for nonprofits that you care about and get paid to do so.
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
                  <p className="border-l-2 border-gray-400 pl-2 mt-4">People want to help nonprofits fundraise, but there’s no economic incentive that values the time and effort that goes into peer-to-peer fundraising.</p>
                </div>
                <div className="mt-8 md:mt-16 flex justify-center h-full">
                  <img className="object-cover object-center rounded img1" alt="problem" src="https://i.ibb.co/fChGK80/volunteer.jpg"/>
                </div>
              </div>
              <div className="md:w-5/12 md:flex md:flex-col-reverse md:ml-auto">
                <div className="flex flex-col mt-24 md:mt-16">
                  <h2 className="playfair text-white text-3xl text-right">Benefact solves both problems.</h2>
                    <p className="border-r-2 border-gray-400 pr-2 mt-4 text-right">We enable anyone to fundraise for nonprofits and get paid to do so.</p>
                    <p className="border-r-2 border-gray-400 pr-2 mt-4 text-right">Our mission is to make fundraising a collaborative effort and reward fundraisers for their time and effort.</p>
                </div>
                <div className="mt-8 md:mt-0 flex justify-center h-full">
                  <img className="object-cover object-center rounded img1" alt="solution" src="https://i.ibb.co/nkzkrhC/corporate.jpg"/>
                </div>
              </div>
            </div>
          </section>
          <section className="text-gray-400 body-font bg-gray-800">
            <div className="container mx-auto flex px-5 py-24 flex-col">
              <div className="uppercase tracking-widest text-lg">How it works</div>
              <div className="text-white playfair text-3xl mb-6">Support amazing nonprofits and earn money.</div>
              <div className="flex flex-col md:flex-row md:flex-wrap">
                <div className="flex flex-col md:w-1/2 md:pr-2 lg:w-1/4 py-6">
                  <div className="w-16 h-16 flex justify-center items-center bg-gray-700 rounded-full mb-2">
                    <i className="fas fa-tasks text-blue-300 text-4xl"></i>
                  </div>
                  <div className="text-white text-xl pl-2 my-3 border-l-4 border-white">View nonprofits</div>
                  <div>We handpick outstanding local nonprofits that you can fundraise for</div>
                </div>
                <div className="flex flex-col md:w-1/2 lg:w-1/4 lg:pl-6 py-6">
                  <div className="w-16 h-16 flex justify-center items-center bg-gray-700 rounded-full mb-2">
                    <i className="far fa-hand-point-up text-red-300 text-4xl"></i>
                  </div>
                  <div className="text-white text-xl pl-2 my-3 border-l-4 border-white">Pick your favorite</div>
                  <div>Click on a nonprofit to view their mission, fundraising goals, and more</div>
                </div>
                <div className="flex flex-col md:w-1/2 md:pr-2 lg:w-1/4 lg:px-6 py-6">
                  <div className="w-16 h-16 flex justify-center items-center bg-gray-700 rounded-full mb-2">
                    <i className="fas fa-sort-amount-up text-purple-300 text-4xl"></i>
                  </div>
                  <div className="text-white text-xl pl-2 my-3 border-l-4 border-white">Begin fundraising</div>
                  <div>Sign up to be a fundraiser and we’ll send you your unique fundraising link</div>
                </div>
                <div className="flex flex-col md:w-1/2 lg:w-1/4 py-6">
                  <div className="w-16 h-16 flex justify-center items-center bg-gray-700 rounded-full mb-2">
                    <i className="fas fa-money-bill text-green-300 text-4xl"></i>
                  </div>
                  <div className="text-white text-xl pl-2 my-3 border-l-4 border-white">Get paid</div>
                  <div>At the end of the fundraising campaign, you’ll get a 4% cut of the amount that you fundraised</div>
                </div>
              </div>
            </div>
          </section>
          <section className="text-gray-400 body-font bg-gray-900">
            <div className="container mx-auto flex px-5 py-24 lg:flex-row flex-col items-center md:items-start lg:items-center">
              <div className="text-center md:text-left">
                <div className="text-white playfair text-3xl mb-6">What are you waiting for?</div>
                <p className="mb-8 lg:mb-0 text-lg">
                  Start raising money and expanding your impact today!
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start md:flex-row lg:ml-auto">
                <button className="transition duration-150 ease-in-out mb-8 md:mb-0 md:mr-6 inline-flex text-white bg-gray-600 border-0 py-3 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg">Get started</button>
                <button className="transition duration-150 ease-in-out inline-flex text-gray-700 bg-gray-100 border-0 py-3 px-6 focus:outline-none hover:bg-gray-500 hover:text-white rounded text-lg">Learn more</button>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
}
