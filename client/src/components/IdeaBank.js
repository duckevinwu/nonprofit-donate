import React from 'react';
import IdeaCard from './IdeaCard.js';
import Navbar from './Navbar';
import Footer from './Footer';
import '../style/Ideas.css';

// import svgs
import ideas from '../assets/ideas.svg';

export default class IdeaBank extends React.Component {
  constructor(props) {
    super(props);

    this.ideas = [
      {
        title: "Donate your birthday",
        description: "Instead of receiving conventional presents for your birthday, why not raise money for your nonprofit? With Benefact, it’s super easy — just direct people to your unique fundraising link. People love donating to nonprofits instead of giving usual presents.",
        icon: 'fas fa-birthday-cake',
        color: 'green'
      },
      {
        title: "Graduate for good",
        description: "Celebrate your high school or college graduation by asking friends and family to donate to your nonprofit. Donation gifts are always a headache to find, so you’ll be saving your friends and family some effort while raising money for a cause you care about — a win-win.",
        icon: 'fas fa-graduation-cap',
        color: 'purple'
      },
      {
        title: "Honor someone special",
        description: "To make your campaign extra special, you can dedicate your fundraiser to someone special. This can be someone you know or don’t know. For instance, if you’re fundraising for Habitat for Humanity, you can dedicate your fundraiser to your great-grandfather who was passionate about affordable housing. Or you could honor the late Millard Fuller, co-founder of Habitat for Humanity, who passed away in 2009. To dedicate your fundraiser, you can (1) simply talk about your honoree when you’re spreading the word about your fundraiser or (2) include a description of your honoree in the “Your mission” portion of your fundraiser registration form.",
        icon: 'bi-award',
        color: 'yellow'
      },
      {
        title: "Encourage your friends and family to spread the word",
        description: "Regardless of whether or not your friends and family donate to your fundraiser, ask them to help spread the word! They can send a text, post on social media, send emails — anything and everything helps. All you have to do is pass them your unique link.",
        icon: 'bi-chat-text',
        color: 'red'
      },
      {
        title: "Partner with a local business",
        description: "Small businesses and nonprofits are cut from the same cloth — try to reach out to your local coffee shop, barber, or grocery store to see if they’d be willing to help you spread the word. For example, they could donate 5-10% of profits for one night to your nonprofit, or they could simply let you advertise your fundraiser through flyers. You could make your own flyers or you could always reach out to Benefact — we can totally help you make flyers!",
        icon: 'bi-building',
        color: 'gray'
      },
      {
        title: "Make a bet against yourself",
        description: "One of the most clever ways to raise money is to make a bet... against yourself. For example, if you reach your fundraising goal, shave your head! Or take a plunge in a frozen lake. Or bike across town with a chicken suit on. The wackier your bet, the more people will want to fundraise for you.",
        icon: 'far fa-handshake',
        color: 'blue'
      },
      {
        title: "Volunteer while fundraising",
        description: "If you volunteer for the very nonprofit that you’re fundraising for, then people will know that you’re committed to the cause and might be more willing to donate to the nonprofit. For example, if you simultaneously volunteer for Habitat for Humanity while running a fundraiser, then people will be more likely to get behind you and Habitat.",
        icon: 'fas fa-people-carry',
        color: 'pink'
      },
      {
        title: "Run. Walk. Ride.",
        description: "Use your next athletic endeavor to raise money for your nonprofit. You can get creative and match your fundraising goal to the amount of miles or steps that you’re walking/biking/running. For example: “I’m raising $10k for my summer 10k.”",
        icon: 'bi-bicycle',
        color: 'indigo'
      },
      {
        title: "Celebrate Giving Tuesday with Benefact",
        description: "Giving Tuesday is the Tuesday after Black Friday and one of the largest giving days of the year. But there’s one problem: Most people don’t go out of their way to donate to a nonprofit. This is your chance to post on social media, send out emails, send some texts, or do anything you can to put a nonprofit directly in front of people’s eyes. Make giving easy on Giving Tuesday.",
        icon: 'fas fa-hand-holding-water',
        color: 'green'
      },
      {
        title: "Married to a good cause",
        description: "On your big wedding day, why not ask your attendees to donate to your nonprofit instead of giving a wedding gift? Let’s face it: weddings are incredibly expensive to run and the gifts are equally expensive. This is the perfect opportunity to raise a lot of money for your nonprofit. When you and your significant other look back on your wedding day, you’ll know that you made a positive impact while tying the knot.",
        icon: 'bi-heart',
        color: 'pink'
      },
      {
        title: "Grand opening for good",
        description: "Own a business or restaurant? When you have your grand opening, you can donate a portion of profits to your nonprofit. This might drive more traffic to your business and, at the very least, make your grand opening very memorable.",
        icon: 'bi-door-open',
        color: 'blue'
      },
      {
        title: "Turn your baby shower into an act of kindness",
        description: "Why not celebrate your baby’s first moments with a fundraiser? You can always tell your baby that his/her first few moments on this planet was dedicated to altruism and kindness.",
        icon: 'fas fa-baby',
        color: 'yellow'
      },
      {
        title: "Videos for goodness",
        description: "Are you a Youtuber, Twitch streamer, Spotify podcaster, or owner of any other media outlet? Throw in a quick plug for your fundraiser in your next video, podcast, or stream. You might be surprised at the number of donors you get.",
        icon: 'bi-youtube',
        color: 'red'
      },
      {
        title: "The chain challenge",
        description: "Remember chain emails or the ALS ice bucket challenge? They were based on a simple idea: challenge your friends to donate and spread the word. You can donate a small amount yourself and pass it off to your friends to donate a similar amount. If they donate, they should challenge one or more of their friends to do the same. This is the beauty of the network effect.",
        icon: 'fas fa-link',
        color: 'purple'
      },
    ]

    this.tipsAndTricks = [
      {
        text: "Communicate why you care about the nonprofit — people will donate because they want to support the things you care about.",
        color: "green"
      },
      {
        text: "Contact your inner circle first. Those who are closest to you, such as your best friends or family members, are more likely to donate. After you’ve reached out to your inner circle, try your more distant peers, such as old classmates or childhood friends.",
        color: "black"
      },
      {
        text: "Clearly state what the donated money will be used for.",
        color: "green"
      },
      {
        text: "Get people excited with the incentives tied to the donation campaign. Many of our Benefact donation campaigns will have incentives, just like Kickstarter.",
        color: "black"
      },
      {
        text: "Emphasize that every dollar donated counts! Most Benefact campaigns will include an Impact Metric that states the impact of a $1 donation on the nonprofit. Use this metric when making your case that every dollar counts.",
        color: "green"
      },
      {
        text: "Add a personal touch to your campaign. When you register to be a fundraiser, you can write about your personal motivation to run a campaign in the “Your mission” question.",
        color: "black"
      },
      {
        text: "Don’t assume that your donors know what your nonprofit does — no matter how famous the nonprofit may be. Always explain what your nonprofit does and why their mission matters.",
        color: "green"
      },
      {
        text: "Keep you call-to-action short and sweet. Most people have a pretty short attention span — especially on social media. So keep your messages short, sweet, and to-the-point.",
        color: "black"
      },
      {
        text: "Add imagery. Everyone likes an eye-catching post, so try to pair your message with a representative photo about the nonprofit.",
        color: "green"
      },
      {
        text: "Get creative! There’s no silver bullet to peer-to-peer fundraising. Even if you’ve read all of the ideas in our Idea Bank, there are countless ideas that we haven’t touched on. It all comes down to a single question: How can you reach people and convince them to donate?",
        color: "black"
      },
      {
        text: "Get your friends involved. Even if they are not official fundraisers on Benefact, your friends can help you spread the word in small ways, such as word-of-mouth, text messages, or social media.",
        color: "green"
      }
    ]

    this.state = {
      ideaDivs: [],
      tipsAndTricksDivs: [],
      selected: '1'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let value = e.currentTarget.getAttribute('data-value');
    this.setState({
      selected: value
    })
  }

  componentDidMount() {
    let ideaArr = [];
    let tipsAndTricksArr = [];

    for (let i = 0; i < this.ideas.length; i++) {
      let currIdea = this.ideas[i];
      ideaArr.push(
        <IdeaCard
          key={i}
          title={currIdea.title}
          description={currIdea.description}
          icon={currIdea.icon}
          color={currIdea.color}
        />
      )
    }

    for (let j = 0; j < this.tipsAndTricks.length; j++) {
      let currTip = this.tipsAndTricks[j];
      tipsAndTricksArr.push(
        <div key={j} className="flex mt-16">
          <div>
            <div className={`h-12 w-12 border-l-4 border-t-4 border-${currTip.color}${currTip.color === 'black' ? '' : '-400'}`}></div>
          </div>
          <p className="-ml-6 pt-4 text-gray-700">
            {currTip.text}
          </p>
        </div>
      )
    }

    this.setState({
      ideaDivs: ideaArr,
      tipsAndTricksDivs: tipsAndTricksArr
    })
  }

  render() {
    let sectionOneInfo;
    let sectionTwoInfo;
    if (this.state.selected === '1') {
      sectionOneInfo = (
        <div className="grid grid-cols-1 gap-12 mt-16">
          {this.state.ideaDivs}
        </div>
      )
      sectionTwoInfo = <div></div>
    } else {
      sectionOneInfo = <div></div>
      sectionTwoInfo = (
        <div>
          {this.state.tipsAndTricksDivs}
        </div>
      )
    }

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
                <h2 className="mt-6 questrial font-bold text-4xl sm:text-5xl lg:text-6xl">Discover how to <font className="questrial font-bold text-green-400">fundraise</font></h2>
                <p className="mt-6 text-lg text-gray-600">Wondering how to run a successful fundraising campaign? From our Idea Bank to our handy tips and tricks - we've got you covered!</p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <img className="h-96 w-96" alt="discover" src={ideas}></img>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-12">
          <div className="container mx-auto px-3 lg:px-5">
            <div className="flex flex-col sm:flex-row justify-center">
              <div data-value="1" onClick={this.handleClick} className={`mr-0 mb-6 sm:mb-0 sm:mr-12 idea-pill questrial font-bold text-xl pl-6 pr-8 py-4 rounded-lg border-2 border-green-400 ${this.state.selected === '1' ? 'idea-pill-selected shadow-lg' : ''}`}>
                <i className="bi-lightbulb mr-2"></i>Idea Bank
              </div>
              <div data-value="2" onClick={this.handleClick} className={`idea-pill questrial font-bold text-xl pl-6 pr-8 py-4 rounded-lg border-2 border-green-400 ${this.state.selected === '2' ? 'idea-pill-selected shadow-lg' : ''}`}>
                <i className="bi-box mr-2"></i>Tips and Tricks
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto px-3 pb-24 lg:px-36">
            <div className={`${this.state.selected === '1' ? 'idea-selected' : ''} layer idea-section`}>
              {sectionOneInfo}
            </div>
            <div className={`${this.state.selected === '2' ? 'idea-selected' : ''} layer idea-section`}>
              {sectionTwoInfo}
            </div>
          </div>
        </section>
        <Footer/>
      </>
    )
  }
}
