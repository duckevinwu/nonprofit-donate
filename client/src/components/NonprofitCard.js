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
      <div className="grid nonprofit-card">
        <div className="layer card-front">
          <LazyLoadImage
            alt={"challenge-cover"}
            src={'https://i.ibb.co/8MX9c0p/eprize-card.png'}
            effect="blur"
            className="w-full h-full object-cover"
            wrapperClassName="w-full h-full"
          />
        </div>
        <div className="layer card-back">hello</div>
        <div className="pseudo"></div>
      </div>
    )
  }


}

export default withRouter(NonprofitCard);
