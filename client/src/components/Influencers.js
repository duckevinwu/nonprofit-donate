import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../style/LandingPage.css';

import support from '../assets/support.svg';
import share from '../assets/share.svg';
import community from '../assets/community.svg';
import pay from '../assets/pay.svg';

export default class Influencers extends React.Component {
  render() {
    return (
      <>
        <section>
          <div className="container mx-auto px-3 lg:px-5">
            <Navbar/>
          </div>
        </section>
        <section className="mt-12">
          <div className="container mx-auto px-3 py-12 lg:px-5">
            <div className="flex flex-col md:flex-row w-full">
              <div className="w-full md:w-1/2 md:mr-6 flex flex-col justify-center">
                <p className="border-l-4 border-gray-400 pl-2 text-lg sm:text-xl text-gray-600">Benefact Ambassador Program</p>
                <h2 className="mt-6 questrial font-bold text-4xl sm:text-5xl lg:text-6xl">Get <font className="questrial font-bold text-green-400">paid</font> to support a nonprofit</h2>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <img className="h-96 w-96" alt="support" src={support}></img>
              </div>
            </div>
          </div>
        </section>
        <section id="nonprofits" className="bg-green-50 pt-12">
          <div className="container mx-auto px-3 lg:px-5">
            <h3 className="questrial uppercase text-gray-600 tracking-widest">For Youtubers</h3>
            <h2 className="questrial text-4xl mt-6 mb-16 font-bold">Make more by giving back.</h2>
            <div className="flex flex-col lg:flex-row">
              <div className="pb-12 lg:w-1/3 lg:pr-6">
                <img className="w-28 h-28" src={share} alt="share"></img>
                <div className="flex flex-col py-6">
                  <h3 className="questrial text-2xl font-bold border-l-4 pl-2 border-black">Support a nonprofit</h3>
                  <p className="mt-2 text-gray-600">We'll make sure you're matched with a nonprofit that relates to your channel. For example, if you make food videos, we’ll pair you with a food-related nonprofit (food rescue, distribution, hunger relief, etc.)</p>
                </div>
              </div>
              <div className="pb-12 lg:w-1/3 lg:pr-6">
                <img className="w-28 h-28" src={community} alt="community"></img>
                <div className="flex flex-col py-6">
                  <h3 className="questrial text-2xl font-bold border-l-4 pl-2 border-black">Spread the word</h3>
                  <p className="mt-2 text-gray-600">Just like your sponsorships or brand deals, all you have to do is talk about the nonprofit in your video, including a link in your video description, post about it on your socials, or anything else! </p>
                </div>
              </div>
              <div className="pb-12 lg:w-1/3">
                <img className="w-28 h-28" src={pay} alt="pay"></img>
                <div className="flex flex-col py-6">
                  <h3 className="questrial text-2xl font-bold border-l-4 pl-2 border-black">Get paid</h3>
                  <p className="mt-2 text-gray-600">We will pay you 5% of the amount that you fundraise — simple as that.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-50">
          <div className="container mx-auto px-3 py-24 lg:px-5">
            <div className="pt-6 lg:flex lg:items-center">
              <div className="lg:w-1/2 lg:flex lg:justify-center lg:mr-12">
                <div className="flex flex-col">
                  <h2 className="questrial font-bold text-4xl">Instead of doing another brand deal, support a nonprofit</h2>
                  <p className="text-gray-600 border-l-4 border-gray-600 pl-2 mt-6">
                    Our Ambassador program works exactly like your brand deals or sponsorships.
                  </p>
                  <p className="text-gray-600 border-l-4 border-gray-600 pl-2 mt-6">
                    Instead of supporting another brand deal, you’ll be supporting a great cause and get paid to do so.
                  </p>
                </div>
              </div>
              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <LazyLoadImage
                  alt={"support-nonprofit"}
                  src="https://i.ibb.co/fChGK80/volunteer.jpg"
                  effect="blur"
                  className="solution-image object-cover h-full w-full rounded-md shadow-2xl"
                  wrapperClassName=""
                />
              </div>
            </div>
            <div className="mt-32 lg:flex lg:flex-row-reverse lg:items-center">
              <div className="lg:w-1/2 lg:flex lg:justify-center">
                <div className="flex flex-col">
                  <h2 className="questrial font-bold text-4xl">Better than Youtube Giving fundraisers</h2>
                  <p className="text-gray-600 border-l-4 border-gray-600 pl-2 mt-6">
                    Unlike Youtube Giving fundraisers, we won’t change the thumbnail or look of your videos.
                  </p>
                  <p className="text-gray-600 border-l-4 border-gray-600 pl-2 mt-6">
                    Youtube Giving fundraisers take a lot of time and effort to set up, while we plug-in to your channel like any other brand deal.
                  </p>
                </div>
              </div>
              <div className="mt-8 lg:mt-0 lg:w-1/2 lg:mr-12">
                <LazyLoadImage
                  alt={"youtube"}
                  src="https://i.ibb.co/dJdS1K8/105371521.jpg"
                  effect="blur"
                  className="solution-image object-cover h-full w-full rounded-md shadow-2xl"
                  wrapperClassName=""
                />
              </div>
            </div>
            <div className="mt-32 lg:flex lg:items-center">
              <div className="lg:w-1/2 lg:flex lg:justify-center lg:mr-12">
                <div className="flex flex-col">
                  <h2 className="questrial font-bold text-4xl">The best fundraising campaign out there</h2>
                  <p className="text-gray-600 border-l-4 border-gray-600 pl-2 mt-6">
                    Our fundraising campaigns include perks for donors, just like Kickstarter includes gifts for supporters.
                  </p>
                  <p className="text-gray-600 border-l-4 border-gray-600 pl-2 mt-6">
                    Every time one of your followers donates, they’ll receive a neat perk and make an impact on a local nonprofit.
                  </p>
                </div>
              </div>
              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <LazyLoadImage
                  alt={"fundraising"}
                  src="https://i.ibb.co/vds4N54/110571521.png"
                  effect="blur"
                  className="solution-image object-cover h-full w-full rounded-md shadow-2xl"
                  wrapperClassName=""
                />
              </div>
            </div>
            <div className="mt-32 lg:flex lg:flex-row-reverse lg:items-center">
              <div className="lg:w-1/2 lg:flex lg:justify-center">
                <div className="flex flex-col">
                  <h2 className="questrial font-bold text-4xl">Get started in one minute</h2>
                  <p className="text-gray-600 border-l-4 border-gray-600 pl-2 mt-6">
                    If you’re on this page, you probably received an email from one of our Benefact representatives.
                  </p>
                  <p className="text-gray-600 border-l-4 border-gray-600 pl-2 mt-6">
                    Just shoot them an email back to express your interest — we’ll get you up and running in no time!
                  </p>
                </div>
              </div>
              <div className="mt-8 lg:mt-0 lg:w-1/2 lg:mr-12">
                <LazyLoadImage
                  alt={"get-started"}
                  src="https://i.ibb.co/w6KrwFy/105871521.jpg"
                  effect="blur"
                  className="solution-image object-cover h-full w-full rounded-md shadow-2xl"
                  wrapperClassName=""
                />
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </>
    )
  }
}
