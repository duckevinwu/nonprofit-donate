import React from 'react';
import { withRouter } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style/LandingPage.css';
import CycleSelect from './CycleSelect';
import Navbar from './Navbar';
import RevenueCalulator from './RevenueCalculator';

// import svgs
import hero from '../assets/hero.svg';
import problem from '../assets/problem.svg';
import solution from '../assets/solution.svg';
import list from '../assets/list.svg';
import pick from '../assets/pick.svg';
import share from '../assets/share.svg';
import pay from '../assets/pay.svg';
import work from '../assets/work.svg';
import free from '../assets/free.svg';
import community from '../assets/community.svg';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      partnerModal: 'modal-closed'
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    document.body.style.overflowY = 'hidden';
    this.setState({
      partnerModal: ''
    })
  }

  closeModal() {
    document.body.style.overflowY = 'auto';
    this.setState({
      partnerModal: 'modal-closed'
    })
  }

  componentDidMount() {
    AOS.init({
      disable: 'mobile',
      duration: 1000
    })
  }

  render() {
    return (
      <>
        <section className="hero-section">
          <div className="container mx-auto px-3 lg:px-5">
            <Navbar/>
            <div className="hero-info-container flex items-center justify-center">
              <div className="flex flex-col items-center lg:flex-row">
                <div className="text-center lg:text-left lg:mr-10 mb-16 lg:mb-0 flex items-center lg:w-1/2">
                  <div>
                    <h1 className="text-4xl md:text-5xl questrial mb-6 font-bold">Get paid to <font className="text-green-400 questrial">help nonprofits</font></h1>
                    <p className="sm:text-lg leading-relaxed mb-6 text-gray-800">
                      Benefact is where anyone can get paid to raise money for nonprofits.
                    </p>
                    <a href="/nonprofits">
                      <button className="transition duration-300 ease-in-out text-white bg-black border-0 py-3 px-6 focus:outline-none rounded hover:bg-green-400 hover:text-black cursor-pointer">Get started <i className="bi-chevron-right ml-6"></i></button>
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-center lg:w-1/2">
                  <img data-aos="zoom-in" alt="hero" src={hero} className="hero-image"></img>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="divider-section md:block hidden"></div>
        <section className="bg-black">
          <div className="container mx-auto px-3 py-12 lg:px-5">
            <h1 className="questrial uppercase text-gray-400 tracking-widest">Our solution</h1>
            <div className="pt-6 lg:flex lg:items-center" data-aos="fade-up">
              <div className="lg:w-1/2 lg:flex lg:justify-center">
                <div className="flex flex-col">
                  <h2 className="questrial font-bold text-white text-4xl">We all know what's wrong</h2>
                  <p className="text-gray-300 border-l-4 border-gray-300 pl-2 mt-6">
                    Nonprofits are doing crucial work for society, but they are underfunded.
                  </p>
                  <p className="text-gray-300 border-l-4 border-gray-300 pl-2 mt-6">
                    People want to help nonprofits fundraise, but there’s no economic incentive that values the time and effort that goes into fundraising.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img className="mt-8 lg:mt-0 solution-image" src={problem} alt="problem"></img>
              </div>
            </div>
            <div className="mt-24 lg:flex lg:flex-row-reverse lg:items-center" data-aos="fade-up" data-aos-delay="250">
              <div className="lg:w-1/2 lg:flex lg:justify-center">
                <div className="flex flex-col">
                  <h2 className="questrial font-bold text-white text-4xl">Benefact solves both problems</h2>
                  <p className="text-gray-300 border-l-4 border-gray-300 pl-2 mt-6">
                    We enable anyone to fundraise for nonprofits and get paid to do so.
                  </p>
                  <p className="text-gray-300 border-l-4 border-gray-300 pl-2 mt-6">
                    Our goal is to make fundraising a collaborative effort and to compensate fundraisers for their time and effort.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img className="mt-8 lg:mt-0 solution-image" src={solution} alt="solution"></img>
              </div>
            </div>
          </div>
        </section>
        <div className="divider-section-reverse md:block hidden"></div>
        <section className="mb-12">
          <div className="container mx-auto px-3 pt-12 lg:px-5">
            <h3 className="questrial uppercase text-gray-600 tracking-widest">For anyone</h3>
            <h2 className="questrial text-4xl mt-6 mb-12 font-bold">Support amazing nonprofits and earn money.</h2>
            <CycleSelect className="hidden lg:flex"/>
            <div className="lg:hidden flex flex-col">
              <div className="pb-12">
                <div className="bg-green-50 h-28 w-28 rounded-full flex justify-center items-center">
                  <img className="w-28 h-28" src={list} alt="list"></img>
                </div>
                <div className="flex flex-col py-6">
                  <h3 className="questrial text-2xl font-bold border-l-4 pl-2 border-black">View nonprofits</h3>
                  <p className="mt-2 text-gray-600">We handpick outstanding local nonprofits that you can fundraise for</p>
                </div>
              </div>
              <div className="pb-12">
                <div className="bg-green-50 h-28 w-28 rounded-full flex justify-center items-center">
                  <img className="w-28 h-28" src={pick} alt="pick"></img>
                </div>
                <div className="flex flex-col py-6">
                  <h3 className="questrial text-2xl font-bold border-l-4 pl-2 border-black">Pick your favorite</h3>
                  <p className="mt-2 text-gray-600">Click on a nonprofit to view their mission, fundraising goals, and more</p>
                </div>
              </div>
              <div className="pb-12">
                <div className="bg-green-50 h-28 w-28 rounded-full flex justify-center items-center">
                  <img className="w-28 h-28" src={share} alt="share"></img>
                </div>
                <div className="flex flex-col py-6">
                  <h3 className="questrial text-2xl font-bold border-l-4 pl-2 border-black">Begin fundraising</h3>
                  <p className="mt-2 text-gray-600">Sign up to be a fundraiser and we’ll send you your unique fundraising link</p>
                </div>
              </div>
              <div className="pb-12">
                <div className="bg-green-50 h-28 w-28 rounded-full flex justify-center items-center">
                  <img className="w-28 h-28" src={pay} alt="pay"></img>
                </div>
                <div className="flex flex-col py-6">
                  <h3 className="questrial text-2xl font-bold border-l-4 pl-2 border-black">Get paid</h3>
                  <p className="mt-2 text-gray-600">At the end of the fundraising campaign, Benefact will pay you based on the total amount that you fundraised</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:mt-12">
            <a href="/nonprofits">
              <button className="transition duration-300 ease-in-out text-white bg-green-500 border-0 py-3 px-6 focus:outline-none rounded hover:bg-green-400 cursor-pointer">View nonprofits <i className="bi-chevron-right ml-6"></i></button>
            </a>
          </div>
        </section>
        <section className="bg-gray-100">
          <div className="container mx-auto px-3 lg:px-5 pt-16 pb-12 flex justify-center">
            <RevenueCalulator className="lg:w-1/2 md:w-2/3 w-full"/>
          </div>
        </section>
        <section id="nonprofits" className="bg-green-50 pt-12">
          <div className="container mx-auto px-3 lg:px-5">
            <h3 className="questrial uppercase text-gray-600 tracking-widest">For nonprofits</h3>
            <h2 className="questrial text-4xl mt-6 mb-12 font-bold">Raise money effortlessly.</h2>
            <div className="flex flex-col lg:flex-row">
              <div className="pb-12 lg:w-1/3 lg:pr-4" data-aos="fade-up">
                <img className="w-28 h-28" src={work} alt="work"></img>
                <div className="flex flex-col py-6">
                  <h3 className="questrial text-2xl font-bold border-l-4 pl-2 border-black">We handle everything</h3>
                  <p className="mt-2 text-gray-600">We will create your online campaign, pay your fundraisers, and deliver your donations straight to your bank account</p>
                </div>
              </div>
              <div className="pb-12 lg:w-1/3 lg:pr-4" data-aos="fade-up" data-aos-delay="250">
                <img className="w-28 h-28" src={free} alt="free"></img>
                <div className="flex flex-col py-6">
                  <h3 className="questrial text-2xl font-bold border-l-4 pl-2 border-black">Zero risk</h3>
                  <p className="mt-2 text-gray-600">We only get paid if you raise money. So if you don’t raise money through our platform, then you won’t pay us a dime</p>
                </div>
              </div>
              <div className="pb-12 lg:w-1/3" data-aos="fade-up" data-aos-delay="500">
                <img className="w-28 h-28" src={community} alt="community"></img>
                <div className="flex flex-col py-6">
                  <h3 className="questrial text-2xl font-bold border-l-4 pl-2 border-black">Engage the community</h3>
                  <p className="mt-2 text-gray-600">Engage anyone (students, teachers, churches, companies, etc.) to fundraise for your nonprofit. Peer-to-peer fundraising is all about community members coming together for a mutual cause</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center pb-12">
            <button onClick={this.openModal} className="transition duration-300 ease-in-out text-white bg-black border-0 py-3 px-6 focus:outline-none rounded hover:bg-green-400 hover:text-gray-700 cursor-pointer">Partner with us <i className="bi-chevron-right ml-6"></i></button>
          </div>
        </section>
        <section className="bg-black">
          <div className="container mx-auto px-3 lg:px-5 pt-16 pb-8">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:w-1/2 text-white text-center questrial text-4xl font-bold mb-8 md:mb-0">Ready to get started?</div>
              <div className="md:w-1/2 flex flex-col items-center">
                <a href="/nonprofits">
                  <div className="w-60 flex items-center transition duration-300 ease-in-out text-black bg-white border border-white py-3 px-6 focus:outline-none rounded hover:bg-green-300 hover:border-green-300 cursor-pointer">
                    <p>Support a nonprofit</p>
                    <i className="bi-chevron-right ml-auto"></i>
                  </div>
                </a>
                <div onClick={this.openModal} className="mt-6 w-60 flex items-center transition duration-300 ease-in-out text-white bg-black border border border-white py-3 px-6 focus:outline-none rounded hover:border-green-300 hover:text-green-300 cursor-pointer">
                  <p>Become our partner</p>
                  <i className="bi-chevron-right ml-auto"></i>
                </div>
              </div>
            </div>
            <div className="text-center text-white mt-12">© 2021 Benefact</div>
          </div>
        </section>
        <div className={'modal ' + this.state.partnerModal}>
          <button className="close" onClick={this.closeModal}>&times;</button>
          <div className="center text-center launch-form">
            <iframe title="nonprofit-form" className="launch-form" loading="lazy" src="https://docs.google.com/forms/d/e/1FAIpQLSf7Trj71qyJwUGkvnDk3HLFVPauBpwvhZEUXwm1L-m2pRfJTA/viewform?embedded=true" width="100%" height="1110" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(LandingPage);
