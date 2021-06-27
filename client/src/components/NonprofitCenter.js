import React from 'react';
import NonprofitCard from './NonprofitCard';
import Navbar from './Navbar';
import Footer from './Footer';
import Preloader from './Preloader';
import '../style/NonprofitCenter.css';

// import svgs
import discover from '../assets/discover.svg';

export default class NonprofitCenter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      nonprofits: []
    }
  }

  componentDidMount() {
    fetch("/api/nonprofits/1",
    {
      method: 'GET'
    }).then(res => {
      return res.json();
    }, err => {
      console.log(err);
    }).then(nonprofitRes => {
      const nonprofitObj = nonprofitRes.records;
      const nonprofitDivs = [];
      for (const id in nonprofitObj) {
        const nonprofit = nonprofitObj[id];
        nonprofitDivs.push(
          <NonprofitCard
            key={id}
            id={id}
            name={nonprofit.name}
            description={nonprofit.description}
            imageUrl={nonprofit.imageUrl}
            geoLocation={nonprofit.location}
            raised={nonprofit.raised}
            impactAmount={nonprofit.impactAmount}
            impactMetric={nonprofit.impactMetric}
            advocates={nonprofit.advocates}
            share={nonprofit.share}
            redirect={nonprofit.redirect}
          />
        )
      }

      this.setState({
        nonprofits: nonprofitDivs,
        isLoaded: true
      });
    }, err => {
      console.log(err);
    });
  }

  render() {
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
                <h2 className="mt-6 questrial font-bold text-4xl sm:text-5xl lg:text-6xl">Find the cause <font className="questrial font-bold text-green-400">you</font> care about</h2>
                <p className="mt-6 text-lg text-gray-600">Browse our list of amazing nonprofit partners. Find your favorites and click 'Learn More' to start fundraising and earning!</p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <img className="h-96 w-96" alt="discover" src={discover}></img>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-green-50">
          <div className="container mx-auto px-3 py-24 lg:px-5">
            <div className="flex w-full justify-center mb-12">
              <h1 className="questrial uppercase text-lg text-gray-700 tracking-widest">Our Nonprofit Partners</h1>
            </div>
            <Preloader className={`${(this.state.isLoaded) ? 'hidden' : ''} h-36`}/>
            <div className="grid justify-center gap-8 nonprofit-grid">
              {this.state.nonprofits}
            </div>
          </div>
        </section>
        <Footer/>
      </>
    )
  }
}
