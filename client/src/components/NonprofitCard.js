import React from 'react';
import { withRouter } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../style/NonprofitCenter.css';

class NonprofitCard extends React.Component {
  constructor(props) {
    super(props)

    this.visitNonprofit = this.visitNonprofit.bind(this);
  }

  visitNonprofit(e) {
    this.props.history.push(this.props.redirect);
  }

  render() {
    return (
      <div className="flex flex-col rounded-lg shadow-xl">
        <div className="np-image-container">
          <LazyLoadImage
            alt={"nonprofit-cover"}
            src={this.props.imageUrl}
            effect="blur"
            className="object-cover h-full w-full rounded-t-xl"
            wrapperClassName="np-image h-full w-full"
          />
        </div>
        <div className="bg-white -mt-6 z-10 relative rounded-t-2xl border-t border-gray-200">
          <div className="p-4 flex flex-col">
            <div className="flex flex-col">
              <h2 className="questrial font-bold text-2xl tracking-wide">{this.props.name}</h2>
              <div className="flex text-gray-500 text-sm my-2">
                <i className="bi-geo-alt"></i>
                <p className="ml-1">{this.props.geoLocation}</p>
              </div>
              <p className="text-gray-900 line-clamp-2 overflow-hidden text-sm">
                {this.props.description}
              </p>
            </div>
            <div className="flex items-center justify-center h-6 my-2">
              <div className="border-t-2 border-gray-200 w-full"></div>
            </div>
            <div className="flex flex-col w-full mb-2">
              <div className="flex mb-2">
                <div className="w-1/2 mr-2">
                  <p className="font-semibold text-green-400 truncate text-lg">{this.props.raised}</p>
                  <p className="text-xs text-gray-700">raised</p>
                </div>
                <div className="w-1/2">
                  <p className="font-semibold truncate text-lg">{this.props.impactAmount}</p>
                  <p className="text-xs text-gray-700">{this.props.impactMetric}</p>
                </div>
              </div>
              <div className="flex">
                <div className="w-1/2 mr-2">
                  <p className="font-semibold text-lg">{this.props.advocates}</p>
                  <p className="text-xs text-gray-700">Advocates</p>
                </div>
                <div className="w-1/2">
                  <p className="font-semibold text-lg">{this.props.share}</p>
                  <p className="text-xs text-gray-700">share</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-auto">
          <button onClick={this.visitNonprofit} className="w-full rounded-b-xl transition duration-300 ease-in-out text-white bg-black border-0 py-3 px-8 focus:outline-none hover:bg-green-400 hover:text-black cursor-pointer">Learn more</button>
        </div>
      </div>
    )
  }


}

export default withRouter(NonprofitCard);
