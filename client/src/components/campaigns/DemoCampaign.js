import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../../style/Campaign.css';

export default class DemoCampaign extends React.Component {
  render() {
    return (
      <>
        <section className="h-full min-h-100vh">
          <div className="container mx-auto px-3 lg:px-5">
            <div className="flex flex-col">
              <LazyLoadImage
                alt={"challenge-cover"}
                src={'https://i.ibb.co/8MX9c0p/eprize-card.png'}
                effect="blur"
                className="w-full h-full object-cover"
                wrapperClassName=""
              />
              <div>Title of the campaign</div>
              <div>Description of the campaign that is a bit longer than just a few words.</div>
              <div className="info-card"></div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
