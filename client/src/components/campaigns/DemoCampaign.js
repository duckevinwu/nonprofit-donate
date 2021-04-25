import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../../style/Campaign.css';

export default class DemoCampaign extends React.Component {
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
      coverVideo: videoEmbed
    }

    this.stickyNav = React.createRef();
    this.tabPanels = React.createRef();
    this.handleStickyScroll = this.handleStickyScroll.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleStickyScroll() {
    const stickyNavY = this.stickyNav.current.offsetTop;
    const windowY = window.scrollY;

    if (windowY === stickyNavY) {
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

    window.scrollTo({
      top: tabTop - navHeight,
      left: 0,
      behavior: 'smooth'
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleStickyScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleStickyScroll);
  }


  render() {
    return (
      <>
        <section className="h-full lg:mb-20">
          <div className="container mx-auto px-3 py-8 lg:py-12 lg:px-5">
            <div className="lg:hidden">
              <div className="flex flex-col">
                {this.state.coverVideo}
                <div className="text-4xl sm:text-5xl questrial font-bold mt-8 tracking-wide">Let's free food</div>
                <div className="mt-2">
                  Sharing Excess rescues wasted food from local businesses and delivers it to at-risk community members in Philadelphia. We are striving to hit 3 million pounds of food donated by November of 2021, and we can’t do it without your support!
                </div>
                <div className="flex flex-col md:flex-row md:mt-8">
                  <div className="my-8 md:my-0 md:w-1/2 md:mr-4">
                    <div className="border rounded shadow flex flex-col p-3">
                      <div>
                        <img src="https://images.squarespace-cdn.com/content/5ac3e0a85417fc6763844546/1610569439154-CE22600W6FASG64C0965/IMG_6851-5.PNG?format=1500w&content-type=image%2Fpng" alt="nonprofit-logo" className="nonprofit-logo"></img>
                      </div>
                      <div className="font-bold questrial text-lg">Sharing Excess</div>
                      <div className="text-sm"><i className="bi-globe"></i> sharingexcess.com</div>
                      <div className="text-sm"><i className="bi-geo-alt"></i> Philadelphia, PA</div>
                    </div>
                  </div>
                  <div className="flex flex-col md:w-1/2 md:justify-center">
                    <div className="grid w-full h-2">
                      <div className="layer bg-gray-200 w-full h-2"></div>
                      <div className="layer bg-green-400" style={{ width: "40%" }}></div>
                    </div>
                    <div className="flex mt-2 mb-6">
                      <div className="w-1/3 flex flex-col">
                        <div className="text-lg font-semibold text-green-400 truncate">$4,000</div>
                        <div className="text-xs text-gray-700">raised of $10,000 goal</div>
                      </div>
                      <div className="w-1/3 px-2 flex flex-col">
                        <div className="text-lg font-semibold">24</div>
                        <div className="text-xs text-gray-700">advocates</div>
                      </div>
                      <div className="w-1/3 flex flex-col">
                        <div className="text-lg font-semibold">57</div>
                        <div className="text-xs text-gray-700">days to go</div>
                      </div>
                    </div>
                    <button className="transition duration-300 ease-in-out text-white bg-black border-0 py-3 px-6 focus:outline-none rounded hover:bg-green-400 hover:text-black cursor-pointer">Become an Advocate</button>
                    <button className="mt-4 transition duration-300 ease-in-out text-white bg-green-500 border-0 py-3 px-6 focus:outline-none rounded hover:bg-green-400 cursor-pointer">View this campaign</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <div className="flex flex-col w-3/4 mr-6">
                    <div className="text-6xl questrial font-bold tracking-wide">Let's free food</div>
                    <div className="mt-4">
                      Sharing Excess rescues wasted food from local businesses and delivers it to at-risk community members in Philadelphia. We are striving to hit 3 million pounds of food donated by November of 2021, and we can’t do it without your support!
                    </div>
                  </div>
                  <div className="border rounded shadow w-1/4">
                    <div className="flex flex-col p-3">
                      <div>
                        <img src="https://images.squarespace-cdn.com/content/5ac3e0a85417fc6763844546/1610569439154-CE22600W6FASG64C0965/IMG_6851-5.PNG?format=1500w&content-type=image%2Fpng" alt="nonprofit-logo" className="nonprofit-logo"></img>
                      </div>
                      <div className="font-bold questrial text-lg">Sharing Excess</div>
                      <div className="text-sm text-gray-700"><i className="bi-globe"></i> sharingexcess.com</div>
                      <div className="text-sm text-gray-700"><i className="bi-geo-alt"></i> Philadelphia, PA</div>
                    </div>
                  </div>
                </div>
                <div className="flex mt-12">
                  <div className="w-2/3 mr-6">
                    {this.state.coverVideo}
                  </div>
                  <div className="w-1/3">
                    <div className="flex flex-col">
                      <div className="grid w-full h-2">
                        <div className="layer bg-gray-200 w-full h-2"></div>
                        <div className="layer bg-green-400" style={{ width: "40%" }}></div>
                      </div>
                      <div className="flex flex-col mt-4">
                        <div className="flex flex-col">
                          <div className="text-3xl font-semibold text-green-400">$4,000</div>
                          <div className="text-sm text-gray-700">raised of $10,000 goal</div>
                        </div>
                        <div className="flex flex-col mt-6">
                          <div className="text-3xl font-semibold text-gray-800">24</div>
                          <div className="text-sm text-gray-700">advocates</div>
                        </div>
                        <div className="flex flex-col mt-6">
                          <div className="text-3xl font-semibold text-gray-800">57</div>
                          <div className="text-sm text-gray-700">days to go</div>
                        </div>
                      </div>
                      <button className="mt-6 transition duration-300 ease-in-out text-white bg-black border-0 py-3 px-6 focus:outline-none rounded hover:bg-green-400 hover:text-black cursor-pointer">Become an Advocate</button>
                      <button className="mt-4 transition duration-300 ease-in-out text-white bg-green-500 border-0 py-3 px-6 focus:outline-none rounded hover:bg-green-600 cursor-pointer">View this campaign</button>
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
              <label htmlFor="tab1" id="tab1-label" onClick={this.handleTabChange} className="tab1-icon">Story</label>
              <label htmlFor="tab2" id="tab2-label" onClick={this.handleTabChange} className="tab2-icon">Get Started</label>
              <label htmlFor="tab3" id="tab3-label" onClick={this.handleTabChange} className="tab3-icon">Community</label>
              <div className={`ml-auto hidden md:flex md:${this.state.hidden}`}>
                <button className="nav-advocate-button transition duration-300 ease-in-out text-white bg-black border-0 py-2 px-6 focus:outline-none rounded hover:bg-green-400 hover:text-black cursor-pointer">Become an Advocate</button>
              </div>
            </div>
          </div>
          <div className="tab-panels" ref={this.tabPanels}>
            <section id="tab1" className="tab-panel min-h-100vh">
              <div className="container mx-auto px-3 lg:px-5">tab 1</div>
            </section>
            <section id="tab2" className="tab-panel min-h-100vh">
              <div className="container mx-auto px-3 lg:px-5">tab 2</div>
            </section>
            <section id="tab3" className="tab-panel min-h-100vh">
              <div className="container mx-auto px-3 lg:px-5">tab 3</div>
            </section>
          </div>
          <div className={`${this.state.hidden} fixed bottom-4 z-0 flex w-full justify-center md:hidden`}>
            <button className="transition duration-300 ease-in-out text-white bg-black border-0 py-3 px-6 focus:outline-none rounded hover:bg-green-400 hover:text-black cursor-pointer">Become an Advocate</button>
          </div>
        </div>
      </>
    )
  }
}
