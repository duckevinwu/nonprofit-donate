import React from 'react';
import NonprofitCard from './NonprofitCard';

export default class NonprofitCenter extends React.Component {
  render() {
    return (
      <div className="landing-wrapper bg-gray-900">
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Master Cleanse Reliac Heirloom</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
            </div>
            <div className="grid justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-20">
              <NonprofitCard/>
              <NonprofitCard/>
              <NonprofitCard/>
              <NonprofitCard/>
            </div>
          </div>
        </section>
      </div>
    )
  }

}
