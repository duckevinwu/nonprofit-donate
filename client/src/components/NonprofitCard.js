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
    e.stopPropagation();
    this.props.history.push(this.props.redirect);
  }

  render() {

    return (
      <div className="w-full nonprofit-card relative">
        <div className="absolute w-full card-front">
          <LazyLoadImage
            alt={"challenge-cover"}
            src={'https://i.ibb.co/8MX9c0p/eprize-card.png'}
            effect="blur"
            className="nonprofit-image"
            wrapperProps={{
              style: {
                position: 'relative',
                height: '100%'
              }
            }}
          />
        </div>
      </div>
    )
  }


}

export default withRouter(NonprofitCard);
