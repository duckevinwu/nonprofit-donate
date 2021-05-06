import React from 'react';
import '../style/Campaign.css';

// templates
import EmailTemplate from './templates/EmailTemplate.js';
import TextMessageTemplate from './templates/TextMessageTemplate.js';
import TwitterTemplate from './templates/TwitterTemplate.js';

export default class OnlineResourcesSimple extends React.Component {
  render() {
    return (
      <div className={"flex flex-col " + this.props.className}>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2">
            <div className="lg:w-11/12">
              <div className="flex items-center">
                <i className="shadow-md p-3 bg-green-50 rounded-lg text-4xl text-green-500 font-bold bi-envelope mr-3"></i>
                <h2 className="lg:text-white text-4xl questrial font-bold">Email</h2>
              </div>
              <div className="mt-8 border-l-4 border-green-500 pl-4 bg-gray-50 lg:bg-gray-700 p-3 rounded shadow">
                <h3 className="font-bold questrial text-xl lg:text-gray-200">
                  Make it personal
                </h3>
                <p className="text-gray-700 lg:text-gray-300 mt-2">Explain why you care about Sharing Excess</p>
              </div>
              <div className="mt-8 border-l-4 border-green-500 pl-4 bg-gray-50 lg:bg-gray-700 p-3 rounded shadow">
                <h3 className="font-bold questrial text-xl lg:text-gray-200">
                  Keep it casual
                </h3>
                <p className="text-gray-700 lg:text-gray-300 mt-2">Talk to your friends like you talk to your friends</p>
              </div>
              <div className="mt-8 border-l-4 border-green-500 pl-4 bg-gray-50 lg:bg-gray-700 p-3 rounded shadow">
                <h3 className="font-bold questrial text-xl lg:text-gray-200">
                  Don't forget the incentives
                </h3>
                <p className="text-gray-700 lg:text-gray-300 mt-2">Everyone likes a fun donation perk, so make sure you mention ours!</p>
              </div>
              <div className="mt-8 border-l-4 border-green-500 pl-4 bg-gray-50 lg:bg-gray-700 p-3 rounded shadow">
                <h3 className="font-bold questrial text-xl lg:text-gray-200">
                  Less is more
                </h3>
                <p className="text-gray-700 lg:text-gray-300 mt-2">The more concise your email is, the better</p>
              </div>
            </div>
          </div>
          <div className="w-full mt-12 lg:w-1/2 lg:mt-0">
            <div className="flex flex-col items-center">
              <div className="mb-3 text-center">
                <p className="text-gray-600">An email that you can send to friends</p>
                <i className="bi-chevron-down"></i>
              </div>
              <EmailTemplate />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center mt-36">
          <div className="w-full lg:w-1/2">
            <div className="lg:w-11/12">
              <div className="flex items-center">
                <i className="shadow-md p-3 bg-blue-50 rounded-lg text-4xl text-blue-500 font-bold bi-twitter mr-3"></i>
                <h2 className="lg:text-white text-4xl questrial font-bold">Social Media</h2>
              </div>
              <div className="mt-8 border-l-4 border-blue-500 pl-4 bg-gray-50 lg:bg-gray-700 p-3 rounded shadow">
                <h3 className="font-bold questrial text-xl lg:text-gray-200">
                  Leverage any social media site out there
                </h3>
                <p className="text-gray-700 lg:text-gray-300 mt-2">
                  Twitter, Facebook, LinkedIn, Instagram, Snapchat, TikTok, Youtube, Pinterest, Tumblr, Flickr, Reddit, WhatsApp, Medium, and more.
                </p>
              </div>
              <div className="mt-8 border-l-4 border-blue-500 pl-4 bg-gray-50 lg:bg-gray-700 p-3 rounded shadow">
                <h3 className="font-bold questrial text-xl lg:text-gray-200">
                  Keep your own style
                </h3>
                <p className="text-gray-700 lg:text-gray-300 mt-2">
                  No matter where you’re posting to, make sure to keep your own style and tone because that’s what your friends are used to
                </p>
              </div>
              <div className="mt-8 border-l-4 border-blue-500 pl-4 bg-gray-50 lg:bg-gray-700 p-3 rounded shadow">
                <h3 className="font-bold questrial text-xl lg:text-gray-200">
                  Keep it short and snappy
                </h3>
                <p className="text-gray-700 lg:text-gray-300 mt-2">
                  Everyone scrolls through social media at light-speed, so make sure your post catches their attention
                </p>
              </div>
              <div className="mt-8 border-l-4 border-blue-500 pl-4 bg-gray-50 lg:bg-gray-700 p-3 rounded shadow">
                <h3 className="font-bold questrial text-xl lg:text-gray-200">
                  Pics are great
                </h3>
                <p className="text-gray-700 lg:text-gray-300 mt-2">If you want, feel free to add a Sharing Excess pic. Any pictures from our website or Instagram are yours to use!</p>
              </div>
              <div className="mt-8 border-l-4 border-blue-500 pl-4 bg-gray-50 lg:bg-gray-700 p-3 rounded shadow">
                <h3 className="font-bold questrial text-xl lg:text-gray-200">
                  Get creative
                </h3>
                <p className="text-gray-700 lg:text-gray-300 mt-2">
                  There are so many ways that you can spread the word on social media besides a post. You can use Instagram stories, Twitter Spaces, Facebook stories, and more! The more creative you get, the better.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mt-12 lg:w-1/2 lg:mt-0">
            <div className="flex flex-col items-center">
              <div className="mb-3 text-center">
                <p className="text-gray-600">A social media post for your friends and followers</p>
                <i className="bi-chevron-down"></i>
              </div>
              <TwitterTemplate />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center mt-36">
          <div className="w-full lg:w-1/2">
            <div className="lg:w-11/12">
              <div className="flex items-center">
                <i className="shadow-md p-3 bg-red-50 rounded-lg text-4xl text-red-500 font-bold bi-chat mr-3"></i>
                <h2 className="lg:text-white text-4xl questrial font-bold">Text Message</h2>
              </div>
              <div className="mt-8 border-l-4 border-red-500 pl-4 bg-gray-50 lg:bg-gray-700 p-3 rounded shadow">
                <h3 className="font-bold questrial text-xl lg:text-gray-200">
                  Use the network effect
                </h3>
                <p className="text-gray-700 lg:text-gray-300 mt-2">
                  Message your very close friends first, and if they donate, ask them to help spread the word as well
                </p>
              </div>
              <div className="mt-8 border-l-4 border-red-500 pl-4 bg-gray-50 lg:bg-gray-700 p-3 rounded shadow">
                <h3 className="font-bold questrial text-xl lg:text-gray-200">
                  Less is more
                </h3>
                <p className="text-gray-700 lg:text-gray-300 mt-2">
                  Just like emails, keep your texts very short and sweet
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mt-12 lg:w-1/2 lg:mt-0">
            <div className="flex flex-col items-center">
              <div className="mb-3 text-center">
                <p className="text-gray-600">A text message for your friends</p>
                <i className="bi-chevron-down"></i>
              </div>
              <TextMessageTemplate />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
