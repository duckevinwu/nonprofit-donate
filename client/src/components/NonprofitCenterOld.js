import React from 'react';
import NonprofitCard from './NonprofitCard';
import '../style/NonprofitCenter.css';

export default class NonprofitCenterOld extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dark: ''
    }

    this.handleDarkMode = this.handleDarkMode.bind(this);
  }

  handleDarkMode() {
    let mode = this.state.dark;
    let newMode;
    if (mode === 'dark') {
      newMode = ''
    } else {
      newMode = 'dark'
    }

    this.setState({
      dark: newMode
    })
  }


  render() {
    return (
      <>
        <section className="h-full">
          <div className={`${this.state.dark} np-left hidden lg:flex lg:flex-col lg:w-1/12 lg:fixed h-100vh z-10`}>
            <div className="h-1/3 flex justify-center">
              <div className="grid mt-6">
                <img className={`${this.state.dark} logo-black overlap h-16 w-16`} alt="logo" src="https://i.ibb.co/BC0YYDZ/benefact-logo.png"></img>
                <img className={`${this.state.dark} logo-white overlap h-16 w-16`} alt="logo" src="https://i.ibb.co/wBHTLK9/169087307-1111438542694589-1773721679902646600-n.png"></img>
              </div>
            </div>
            <div className="h-1/3 flex justify-center items-center">
              <div className="flex flex-col">
                <a href="/" className="mb-6"><i className={`${this.state.dark} np-icon text-2xl bi-house-door`}></i></a>
                <a className="mb-6"><i className={`${this.state.dark} np-icon text-2xl bi-person`}></i></a>
                <a><i className={`${this.state.dark} np-icon text-2xl bi-question-square`}></i></a>
              </div>
            </div>
            <div className="h-1/3 flex justify-center items-center">
              <div className="grid mt-auto mb-6" onClick={this.handleDarkMode}>
                <div className={`${this.state.dark} dark-button overlap h-10 w-10 flex justify-center items-center rounded-full bg-black cursor-pointer`}>
                  <i className={`text-xl bi-moon`}></i>
                </div>
                <div className={`${this.state.dark} light-button overlap h-10 w-10 flex justify-center items-center rounded-full cursor-pointer`}>
                  <i className={`text-xl bi-sun`}></i>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-full min-h-100vh">
            <div className="lg:w-1/12 opacity-0"></div>
            <div className="lg:w-11/12 h-full">
              <div className={`${this.state.dark} np-right h-full py-24`}>
                <div className="grid justify-center gap-6 nonprofit-grid">
                  <div className="questrial text-3xl tracking-wider font-bold mb-6">Nonprofits</div>
                  <NonprofitCard/>
                  <NonprofitCard/>
                  <NonprofitCard/>
                  <NonprofitCard/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

}
