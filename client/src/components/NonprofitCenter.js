import React from 'react';
import NonprofitCard from './NonprofitCard';
import '../style/NonprofitCenter.css';

// import svgs
import discover from '../assets/discover.svg';

export default class NonprofitCenter extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch("/api/nonprofits",
    {
      method: 'GET'
    }).then(res => {
      return res.json();
    }, err => {
      console.log(err);
    }).then(nonprofitList => {

      // Map each attribute of a person in this.state.people to an HTML element
      // let peopleDivs = peopleList.map((person, i) =>
      // <div key={i} className="person">
      //   <div className="login">{person.login}</div>
      //   <div className="name">{person.name}</div>
      //   <div className="birthyear">{person.birthyear}</div>
      // </div>);

      // Set the state of the person list to the value returned by the HTTP response from the server.
      // this.setState({
      //   people: peopleDivs
      // });
    }, err => {
      // Print the error if there is one.
      console.log(err);
    });
  }

  render() {
    return (
      <>
        <section className="mt-12">
          <div className="container mx-auto px-3 py-12 lg:px-5">
            <div className="flex flex-col md:flex-row w-full">
              <div className="w-full md:w-1/2 md:mr-6 flex flex-col justify-center">
                <h2 className="mt-6 questrial font-bold text-4xl sm:text-5xl lg:text-6xl">Find the cause <font className="questrial font-bold text-green-400">you</font> care about</h2>
                <p className="mt-6 text-lg text-gray-600">Browse our list of amazing nonprofit partners. Find your favorites and click 'Learn More' to start fundraising and earning!</p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <img className="h-96 w-96" alt="discover" src={discover}></img>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto px-3 py-12 lg:px-5">
            <div className="flex w-full justify-center mb-12">
              <h1 className="questrial uppercase text-lg text-gray-700 tracking-widest">Our Nonprofit Partners</h1>
            </div>
            <div className="grid justify-center gap-8 nonprofit-grid">
              <NonprofitCard
                id="1"
                imageUrl="https://i.ibb.co/tYtZ8tQ/image1.png"
                title="Sharing Excess"
                geoLocation="Philadelphia, PA"
                description="Sharing Excess rescues wasted food from local businesses and delivers it to at-risk community members in Philadelphia. We are striving to hit 3 million pounds of food donated by November of 2021, and we can’t do it without your support!"
                raised="$4,000"
                impactAmount="32,000"
                impactMetric="meals delivered"
                advocates="23"
                share="5%"
              />
            </div>
          </div>
        </section>
      </>
    )
  }
}
