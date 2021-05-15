import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-black py-12">
        <div className="container mx-auto px-3 lg:px-5 flex sm:flex-row sm:flex-no-wrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center align-center justify-center text-gray-900" href="/">
              <img src="https://i.ibb.co/wBHTLK9/169087307-1111438542694589-1773721679902646600-n.png" className="h-10" alt="logo"></img>
              <span className="ml-1 text-xl text-white questrial font-bold tracking-wider">Benefact</span>
            </a>
            <p className="mt-2 text-sm text-gray-300 text-center">© 2021 Benefact</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/3 w-full px-4"></div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-10 md:mb-0">
              <div>
                <h2 className="font-bold font-medium text-white tracking-widest text-sm mb-3 uppercase">For Advocates</h2>
                <nav className="list-none">
                  <li className="">
                    <a href="/nonprofits"className="text-sm text-gray-200 hover:text-green-400 cursor-pointer">Explore Nonprofits</a>
                  </li>
                </nav>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div>
                <h2 className="font-bold font-medium text-white tracking-widest text-sm mb-3 uppercase">For Nonprofits</h2>
                <nav className="list-none">
                  <li className="mb-1">
                    <a href="/" className="text-sm text-gray-200 hover:text-green-400">Partner with us</a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
