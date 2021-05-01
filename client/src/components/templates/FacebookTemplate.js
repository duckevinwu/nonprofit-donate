import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../../style/Campaign.css';

export default class FacebookTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      copy: 'opacity-0'
    }

    this.textBody = React.createRef();
    this.handleCopy = this.handleCopy.bind(this);
  }

  handleCopy() {
    let bodyText = this.textBody.current.innerText;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(bodyText);
    } else {
      var textField = document.createElement('textarea')
      textField.innerText = bodyText;
      document.body.appendChild(textField)
      textField.select()
      document.execCommand('copy')
      textField.remove()
    }

    if (this.state.copy === 'opacity-0') {
      this.setState({ copy: 'opacity-1' }, function() {
        setTimeout(() => {
          this.setState({ copy: 'opacity-0' });
        }, 2000);
      })
    }
  }

  render() {
    return (
      <div className={`${this.props.className} border shadow-lg email-template`}>
        <div className="flex flex-col">
          <div className="flex items-center p-2">
            <img className="w-16 h-16 rounded-full object-cover" alt="facebook-template-profile" src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png"/>
            <div className="flex flex-col ml-2">
              <p className="font-bold text-lg">First Last</p>
              <p className="text-gray-600 text-sm">April 30, 2021</p>
            </div>
          </div>
          <p className="px-2 my-3 scroll-div lg:h-40 lg:overflow-y-auto text-sm facebook-font" ref={this.textBody}>
            Here is a paragraph of text that is the body text for this Facebook post.
            Here is a paragraph of text that is the body text for this Facebook post.
            Here is a paragraph of text that is the body text for this Facebook post.
            Here is a paragraph of text that is the body text for this Facebook post.
            Here is a paragraph of text that is the body text for this Facebook post.
            Here is a paragraph of text that is the body text for this Facebook post.
            Here is a paragraph of text that is the body text for this Facebook post.
            Here is a paragraph of text that is the body text for this Facebook post.
          </p>
          <LazyLoadImage
            alt={"facebook-template-post"}
            src={'https://www.gardeningknowhow.com/wp-content/uploads/2020/12/lonely-japanese-cherry.jpg'}
            effect="blur"
            className="w-full h-60 object-cover"
            wrapperClassName="w-full h-full"
          />
          <div className="p-2 border-t border-gray-300">
            <div className="flex items-center">
              <i onClick={this.handleCopy} className="fas fa-copy text-2xl text-black my-2 hover:text-green-500 cursor-pointer transition"></i>
              <p className={`transition ${this.state.copy} ml-2 text-green-500`}>Text copied!</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
