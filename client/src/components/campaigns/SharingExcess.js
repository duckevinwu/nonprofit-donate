import React from 'react';
import Navbar from '../Navbar';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../../style/Campaign.css';
import '../../style/Tooltip.css';
import '../../style/Modal.css';

import OnlineResourcesSimple from '../OnlineResourcesSimple.js';

// import svgs
import community from '../../assets/community.svg';

export default class SharingExcess extends React.Component {
  constructor(props) {
    super(props);

    const videoEmbed = (
      <div className="video-wrapper">
        <iframe src="https://www.youtube.com/embed/SmEW3C7tkLc" title="Cover video" frameBorder="0" load="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    )

    this.state = {
      coverImageUrl: 'https://givebutter.s3.amazonaws.com/media/DjjZmr1GGQaqXi4m2bBzngYNH3RycWev4Qa6ZNsF.jpg',
      logoImageUrl: '',
      hidden: 'hidden',
      coverVideo: videoEmbed,
      advocateModal: 'modal-closed',
      isLoaded: false,
      nonprofitObj: {}
    }

    this.stickyNav = React.createRef();
    this.tabPanels = React.createRef();
    this.handleStickyScroll = this.handleStickyScroll.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleStickyScroll() {
    const stickyNavY = this.stickyNav.current.offsetTop;
    const windowY = window.pageYOffset;

    if (windowY >= stickyNavY - 10) {
      if (this.state.hidden === 'hidden') {
        this.setState({
          hidden: ''
        })
      }
    } else {
      if (this.state.hidden === '') {
        this.setState({
          hidden: 'hidden'
        })
      }
    }
  }

  handleTabChange() {
    let tabTop = this.tabPanels.current.offsetTop;
    let navHeight = this.stickyNav.current.offsetHeight;

    const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;

    if (!supportsNativeSmoothScroll) {
      window.scrollTo(0, tabTop - navHeight);
      return;
    }

    window.scrollTo({
      top: tabTop - navHeight,
      left: 0,
      behavior: 'smooth'
    })
  }

  openModal() {
    document.body.style.overflowY = 'hidden';
    this.setState({
      advocateModal: ''
    })
  }

  closeModal() {
    document.body.style.overflowY = 'auto';
    this.setState({
      advocateModal: 'modal-closed'
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleStickyScroll);
    fetch("/api/nonprofit/1",
    {
      method: 'GET'
    }).then(res => {
      return res.json();
    }, err => {
      console.log(err);
    }).then(nonprofitRes => {
      const nonprofitObj = nonprofitRes.record;
      if (!nonprofitObj) return;

      this.setState({
        nonprofitObj: nonprofitObj,
        isLoaded: true
      });
    }, err => {
      console.log(err);
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleStickyScroll);
  }


  render() {
    return (
      <>
        <section>
          <div className="container mx-auto px-3 lg:px-5">
            <Navbar/>
          </div>
        </section>
        <section className="h-full lg:mb-20">
          <div className="container mx-auto px-3 py-8 lg:py-12 lg:px-5">
            <div className="lg:hidden">
              <div className="flex flex-col">
                {this.state.coverVideo}
                <div className="text-4xl sm:text-5xl questrial font-bold mt-8 tracking-wide">Let's free food</div>
                <div className="mt-2">
                  Sharing Excess is on a mission to bridge the gap between food excess and scarcity. By partnering with grocery stores, restaurants, and wholesalers, we are able to efficiently deliver surplus food to a network of community organizations aimed at alleviating local food insecurity.
                  <br/>
                  <br/>
                  For every dollar that is raised we are able to deliver 10 pounds of food (approximately 8 meals) to community members in need. Your contribution will help us address the reality that 126 billion pounds of food is wasted every year, while over 40 million Americans continue to face food insecurity.
                </div>
                <div className="flex flex-col md:flex-row md:mt-8">
                  <div className="my-8 md:my-0 md:w-1/2 md:mr-4">
                    <a href="https://www.sharingexcess.com" target="_blank" rel="noopener noreferrer">
                      <div className="transition border rounded shadow flex flex-col p-3 hover:shadow-lg">
                        <div>
                          <img src="https://images.squarespace-cdn.com/content/5ac3e0a85417fc6763844546/1610569439154-CE22600W6FASG64C0965/IMG_6851-5.PNG?format=1500w&content-type=image%2Fpng" alt="nonprofit-logo" className="nonprofit-logo"></img>
                        </div>
                        <div className="font-bold questrial text-lg">Sharing Excess</div>
                        <div className="text-sm"><i className="bi-globe"></i> sharingexcess.com</div>
                        <div className="text-sm"><i className="bi-geo-alt"></i> Philadelphia, PA</div>
                      </div>
                    </a>
                  </div>
                  <div className="flex flex-col md:w-1/2 md:justify-center">
                    <div className="w-full h-6">
                      <div className="border-t-2 border-r-2 h-full ml-auto"></div>
                    </div>
                    <div className="flex flex-col mb-6">
                      <div className="flex w-full mb-4">
                        <div className="mr-4 w-1/2 flex flex-col">
                          {(this.state.isLoaded) ?
                          <div className="text-lg font-semibold text-green-400 truncate">{this.state.nonprofitObj.raised}</div>
                          :
                          <span className="bg-gray-300 h-4 mt-1 mb-2 w-16 animate-pulse"></span>
                          }
                          <div className="text-xs text-gray-700">raised</div>
                        </div>
                        <div className="w-1/2 mr-4 flex flex-col">
                          {(this.state.isLoaded) ?
                          <div className="text-lg font-semibold text-gray-800">{this.state.nonprofitObj.advocates}</div>
                          :
                          <span className="bg-gray-300 h-4 mt-1 mb-2 w-16 animate-pulse"></span>
                          }
                          <div className="text-xs text-gray-700 flex">
                            <div className="border-b border-gray-400 border-dotted" data-tooltip="A Benefact Fundraiser earns money by raising money for a nonprofit">
                              fundraisers
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex w-full">
                        <div className="w-1/2 flex flex-col">
                          {(this.state.isLoaded) ?
                          <div className="text-lg font-semibold">{this.state.nonprofitObj.impactAmount}</div>
                          :
                          <span className="bg-gray-300 h-4 mt-1 mb-2 w-16 animate-pulse"></span>
                          }
                          <div className="text-xs text-gray-700">meals delivered</div>
                        </div>
                        <div className="w-1/2 flex flex-col">
                          {(this.state.isLoaded) ?
                          <div className="text-lg font-semibold text-gray-800">{this.state.nonprofitObj.share}</div>
                          :
                          <span className="bg-gray-300 h-4 mt-1 mb-2 w-16 animate-pulse"></span>
                          }
                          <div className="text-xs text-gray-700 flex">
                            <div className="border-b border-gray-400 border-dotted" data-tooltip="Benefact will pay you 5% of the total amount you fundraise">share</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button onClick={this.openModal} className="transition duration-300 ease-in-out text-white bg-black border-0 py-3 px-6 focus:outline-none rounded hover:bg-green-400 hover:text-black cursor-pointer">Become a Fundraiser</button>
                    <a href="https://givebutter.com/sharingexcessdemo" target="_blank" rel="noopener noreferrer" className="mt-4">
                      <button className="w-full transition duration-300 ease-in-out text-white bg-green-500 border-0 py-3 px-6 focus:outline-none rounded hover:bg-green-400 cursor-pointer">View our campaign</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex">
              <div className="flex flex-col">
                <div className="flex">
                  <div className="flex flex-col w-2/3 mr-6">
                    <div className="text-6xl questrial font-bold tracking-wide">Let's free food</div>
                    <div className="mt-4">
                      Sharing Excess is on a mission to bridge the gap between food excess and scarcity. By partnering with grocery stores, restaurants, and wholesalers, we are able to efficiently deliver surplus food to a network of community organizations aimed at alleviating local food insecurity.
                      <br/>
                      <br/>
                      For every dollar that is raised we are able to deliver 10 pounds of food (approximately 8 meals) to community members in need. Your contribution will help us address the reality that 126 billion pounds of food is wasted every year, while over 40 million Americans continue to face food insecurity.
                    </div>
                  </div>
                  <div className="w-1/3">
                    <a href="https://www.sharingexcess.com" target="_blank" rel="noopener noreferrer">
                      <div className="transition border rounded shadow w-full hover:shadow-lg">
                        <div className="flex flex-col p-3">
                          <div>
                            <img src="https://images.squarespace-cdn.com/content/5ac3e0a85417fc6763844546/1610569439154-CE22600W6FASG64C0965/IMG_6851-5.PNG?format=1500w&content-type=image%2Fpng" alt="nonprofit-logo" className="nonprofit-logo"></img>
                          </div>
                          <div className="font-bold questrial text-lg">Sharing Excess</div>
                          <div className="text-sm text-gray-700"><i className="bi-globe"></i> sharingexcess.com</div>
                          <div className="text-sm text-gray-700"><i className="bi-geo-alt"></i> Philadelphia, PA</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="flex mt-12">
                  <div className="w-2/3 mr-6">
                    {this.state.coverVideo}
                  </div>
                  <div className="w-1/3">
                    <div className="flex flex-col">
                      <div className="w-full h-6">
                        <div className="border-t-2 border-r-2 h-full ml-auto"></div>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex flex-col">
                          {(this.state.isLoaded) ?
                          <div className="text-4xl font-semibold text-green-400">{this.state.nonprofitObj.raised}</div>
                          :
                          <span className="bg-gray-300 h-6 mt-1 mb-2 w-16 animate-pulse"></span>
                          }
                          <div className="text-sm text-gray-700">raised</div>
                        </div>
                        <div className="flex flex-col mt-6">
                          {(this.state.isLoaded) ?
                          <div className="text-2xl font-semibold text-gray-800">{this.state.nonprofitObj.impactAmount}</div>
                          :
                          <span className="bg-gray-300 h-6 mt-1 mb-2 w-16 animate-pulse"></span>
                          }
                          <div className="text-sm text-gray-700">meals delivered</div>
                        </div>
                        <div className="flex flex-col mt-6">
                          {(this.state.isLoaded) ?
                          <div className="text-2xl font-semibold text-gray-800">{this.state.nonprofitObj.advocates}</div>
                          :
                          <span className="bg-gray-300 h-6 mt-1 mb-2 w-16 animate-pulse"></span>
                          }
                          <div className="text-sm text-gray-700 flex">
                            <div className="border-b border-gray-400 border-dotted" data-tooltip="A Benefact Fundraiser earns money by raising money for a nonprofit">
                              fundraisers
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col mt-6">
                          {(this.state.isLoaded) ?
                          <div className="text-2xl font-semibold text-gray-800">{this.state.nonprofitObj.share}</div>
                          :
                          <span className="bg-gray-300 h-6 mt-1 mb-2 w-16 animate-pulse"></span>
                          }
                          <div className="text-sm text-gray-700 flex">
                            <div className="border-b border-gray-400 border-dotted" data-tooltip="Benefact will pay you 5% of the total amount you fundraise">share</div>
                          </div>
                        </div>
                      </div>
                      <button onClick={this.openModal} className="mt-6 transition duration-300 ease-in-out text-white bg-black border-0 py-3 px-6 focus:outline-none rounded hover:bg-green-400 hover:text-black cursor-pointer">Become a Fundraiser</button>
                      <a href="https://givebutter.com/sharingexcessdemo" target="_blank" rel="noopener noreferrer" className="mt-4">
                        <button className="w-full transition duration-300 ease-in-out text-white bg-green-500 border-0 py-3 px-6 focus:outline-none rounded hover:bg-green-600 cursor-pointer">View our campaign</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="tabset">
          <input type="radio" name="tabset" id="tab1" aria-controls="tab1" defaultChecked/>
          <input type="radio" name="tabset" id="tab2" aria-controls="tab2"/>
          <input type="radio" name="tabset" id="tab3" aria-controls="tab3"/>
          <input type="radio" name="tabset" id="tab4" aria-controls="tab4"/>
          <input type="radio" name="tabset" id="tab5" aria-controls="tab5"/>
          <input type="radio" name="tabset" id="tab6" aria-controls="tab6"/>

          <div className="sticky navbar flex" ref={this.stickyNav}>
            <div className="nav-tabs container mx-auto px-3 lg:px-5 flex items-center">
              <label htmlFor="tab1" id="tab1-label" onClick={this.handleTabChange} className="tab1-icon">Why fundraise for us?</label>
              <label htmlFor="tab2" id="tab2-label" onClick={this.handleTabChange} className="tab2-icon">How it works</label>
              <label htmlFor="tab3" id="tab3-label" onClick={this.handleTabChange} className="tab3-icon">How to fundraise</label>
              <label htmlFor="tab4" id="tab4-label" onClick={this.handleTabChange} className="tab4-icon">Join our community</label>
              <div className={`ml-auto hidden lg:flex lg:${this.state.hidden}`}>
                <button onClick={this.openModal} className="nav-advocate-button transition duration-300 ease-in-out text-white bg-black border-0 py-2 px-6 focus:outline-none rounded hover:bg-green-400 hover:text-black cursor-pointer">Become a Fundraiser</button>
              </div>
            </div>
          </div>
          <div className="tab-panels" ref={this.tabPanels}>
            <section id="tab1" className="tab-panel min-h-100vh">
              <div className="container mx-auto px-3 lg:px-5">
                <div className="flex justify-center">
                  <div className="flex flex-col lg:w-1/2 md:w-3/4 w-full mt-20 mb-12">
                    <h3 className="mb-12 questrial text-5xl tracking-wide font-bold">Get paid to <font className="text-green-500 questrial">Free the Food</font> with Sharing Excess</h3>
                    <LazyLoadImage
                      alt={"se-cover"}
                      src={'https://i.ibb.co/tYtZ8tQ/image1.png'}
                      effect="blur"
                      className=""
                      wrapperClassName=""
                    />
                    <div className="mt-8 text-lg">
                      <p className="">
                        In the United States, over 120 billion pounds of food ends up in landfills each year; enough to fill more than 700 NFL stadiums from the ground to the very top with uneaten food.
                        All the while, upwards of 40 million Americans experience food insecurity in our country.
                      </p>
                      <p className="mt-6">
                        Sharing Excess aims to solve this broken equation with innovative last-mile delivery, and big ideas that spread love, happiness, and compassion.
                        To date, Sharing Excess has provided 3 million meals for Philadelphians.
                        We hope to hit 4 million meals by the end of this year and we cannot do it without you!
                      </p>
                    </div>
                    <LazyLoadImage
                      alt={"se-banner"}
                      src={'https://i.ibb.co/qpFPkpr/103555.png'}
                      effect="blur"
                      className=""
                      wrapperClassName="my-8"
                    />
                    <div className="text-lg">
                      <p className="">
                        By becoming a fundraiser, you’ll get paid to raise money for us.
                        But this is so much more than another income stream for you — every dollar you raise amounts to 8 meals for families in need!
                        You’ll be making a direct impact on the lives of families in Philadelphia while getting compensated for your time and effort — it’s a win-win.
                      </p>
                    </div>
                    <div className="border-l-6 border-black pl-3 my-8">
                      <h4 className="questrial font-bold text-3xl">
                        If you want to reduce food insecurity and get paid to do so, become a fundraiser today!
                      </h4>
                    </div>
                    <div className="flex justify-center">
                      <button onClick={this.openModal} className="mt-6 transition duration-300 ease-in-out text-white bg-black border-0 py-3 px-6 focus:outline-none rounded hover:bg-green-400 hover:text-black cursor-pointer">Become a Fundraiser</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="tab2" className="tab-panel min-h-100vh">
              <div className="container mx-auto px-3 lg:px-5 flex justify-center">
                <div className={`grid grid-cols-1 py-20 w-full lg:w-3/4`}>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full sm:w-1/2 md:w-1/3 h-60 bg-red-50 p-4 flex flex-col rounded-lg shadow-lg">
                      <div className="flex">
                        <div className="text-red-500 text-8xl font-bold questrial">1</div>
                        <i className="ml-auto bi-box-arrow-in-right text-4xl text-red-500"></i>
                      </div>
                      <div className="mt-auto questrial text-2xl font-bold">Sign up to be a Fundraiser</div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-2/3 md:pl-6 md:pt-0 pt-8">
                      <p className="text-gray-600">All you have to do is fill out a simple form with your name, email, and other basic details.</p>
                      <button onClick={this.openModal} className="mt-6 questrial text-black text-lg font-bold transition duration-150 hover:text-green-500 cursor-pointer">Become a Fundraiser <i className="bi-chevron-right"></i></button>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center mt-12">
                    <div className="w-full sm:w-1/2 md:w-1/3 h-60 bg-yellow-50 p-4 flex flex-col rounded-lg shadow-lg">
                      <div className="flex">
                        <div className="text-yellow-500 text-8xl font-bold questrial">2</div>
                        <i className="ml-auto bi-envelope text-4xl text-yellow-500"></i>
                      </div>
                      <div className="mt-auto questrial text-2xl font-bold">Receive your welcome email</div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-2/3 md:pl-6 md:pt-0 pt-8">
                      <p className="text-gray-600">We'll send you an email with your unique campaign link and all of our tips and tricks to become a successful fundraiser.</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center mt-12">
                    <div className="w-full sm:w-1/2 md:w-1/3 h-60 bg-blue-50 p-4 flex flex-col rounded-lg shadow-lg">
                      <div className="flex">
                        <div className="text-blue-500 text-8xl font-bold questrial">3</div>
                        <i className="ml-auto bi-people text-4xl text-blue-500"></i>
                      </div>
                      <div className="mt-auto questrial text-2xl font-bold">Launch your campaign</div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-2/3 md:pl-6 md:pt-0 pt-8">
                      <p className="text-gray-600">
                        Rack up those donations by directing anyone to donate via your unique link!
                        The more money you raise, the more you earn.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center mt-12">
                    <div className="w-full sm:w-1/2 md:w-1/3 h-60 bg-green-50 p-4 flex flex-col rounded-lg shadow-lg">
                      <div className="flex">
                        <div className="text-green-500 text-8xl font-bold questrial">4</div>
                        <i className="ml-auto bi-cash-stack text-4xl text-green-500"></i>
                      </div>
                      <div className="mt-auto questrial text-2xl font-bold">Get paid</div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-2/3 md:pl-6 md:pt-0 pt-8">
                      <p className="text-gray-600">
                        At the end of your campaign, Benefact will pay you directly.
                        We'll also send you an Impact Report detailing the amount of money you raised and the impact that you made with Sharing Excess.
                      </p>
                      <a href="/help/payout" target="_blank">
                        <button className="mt-6 questrial text-black text-lg font-bold transition duration-150 hover:text-green-500 cursor-pointer">Learn about payouts <i className="bi-chevron-right"></i></button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="tab3" className="tab-panel min-h-100vh or-section">
              <div className="container mx-auto px-3 lg:px-5 pb-12 pt-20">
                <OnlineResourcesSimple className="mt-12"/>
              </div>
            </section>
            <section id="tab4" className="tab-panel min-h-100vh">
              <div className="container mx-auto px-3 lg:px-5 py-12">
                <div className="flex justify-center">
                  <img src={community} alt="community" className="lg:w-1/2"></img>
                </div>
                <div className="flex justify-center">
                  <div className="flex flex-col w-full lg:w-3/4 px-4 sm:px-8 py-8 rounded-md shadow-lg bg-gray-50 bg-opacity-90 mt-12 sm:-mt-24">
                    <h2 className="questrial font-bold text-4xl lg:text-5xl mb-4 text-center">Our <font className="text-green-400 questrial">commmunity</font> is here to support you</h2>
                    <div className="mt-4 mb-8">
                      <p className="text-md">
                        We want to foster a welcoming and supportive group of fundraisers, so please feel free to join our Discord server or chat with us now!
                        In our Discord, you can ask questions to our fundraiser community, discover unique fundraising ideas, and chat with the Benefact admin team.
                        If you have a quick question or comment, click the bubble in the bottom right to speak with us now!
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <div className="">
                        <a href="https://discord.gg/WVDEebeFpt" target="_blank" rel="noopener noreferrer">
                          <div className="bg-black py-4 px-8 rounded-lg shadow-lg hover:bg-green-400 transition duration-200 cursor-pointer flex items-center justify-center">
                            <i className="text-white bi-discord text-4xl mr-3"></i>
                            <p className="text-center text-white text-xl questrial">Join our Discord</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>
        </div>
        <div className={'modal ' + this.state.advocateModal}>
          <button className="close" onClick={this.closeModal}>&times;</button>
          <div className="center text-center launch-form">
            <iframe title="advocate-form" className="launch-form" loading="lazy" src="https://docs.google.com/forms/d/e/1FAIpQLSeCmX3skh2AuTsJ-PM2vqUbpWfNj5iwBliloDBpbJodOTt4wA/viewform?embedded=true" width="100%" height="1225" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
          </div>
        </div>
      </>
    )
  }
}
