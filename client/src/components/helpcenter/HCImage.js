import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../../style/HelpCenter.css';

export default class HCImage extends React.Component {
  render() {
    return (
      <div className={`${this.props.className} grid`}>
        <LazyLoadImage
          alt={"step-1"}
          src={this.props.src}
          effect="blur"
          className="object-cover"
          wrapperClassName="layer"
        />
        <a className="layer image-link" href={this.props.src} target="_blank" rel="noopener noreferrer"></a>
      </div>

    )
  }
}
