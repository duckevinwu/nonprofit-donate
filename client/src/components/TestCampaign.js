import React from 'react';

export default class TestCampaign extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      testData: {}
    }
  }

  componentDidMount() {
    fetch("/api/test/campaign",
    {
      method: 'GET' // The type of HTTP request.
    }).then(res => {
      return res.json();
    }, err => {
      console.log(err);
    }).then(result => {
      console.log(result);
      this.setState({
        testData: result
      })
    });
  }

  render() {
    return (
      <div>
        <div>Title: {this.state.testData.title}</div>
        <div>Donors: {this.state.testData.donors}</div>
        <div>Raised: {this.state.testData.raised}</div>
        <div>Goal: {this.state.testData.goal}</div>
      </div>
    );
  }
}
