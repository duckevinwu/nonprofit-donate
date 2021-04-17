import React from 'react';
import firebase from '../firebase';
import { withRouter } from 'react-router-dom';
import InfoCard from './InfoCard';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: '',
      name: ''
    }
  }

  logout() {

  }

  componentDidMount() {
    var that = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // user is signed in
        if (user.emailVerified) {
          that.setState({
            status: 'content',
            name: user.displayName
          })
        } else {
          that.setState({
            status: 'verify'
          })
        }
      } else {
        that.props.history.push('/login')
      }
    });
  }

  render() {
    const status = this.state.status;
    let display;

    switch (status) {
      case 'verify':
        display = <InfoCard status="verify"/>
        break;
      case 'content':
        display = (
          <div>
            <div>Profile</div>
            <div>{this.state.name}</div>
            <button></button>
          </div>

        )
        break;
      default:
        display = <div></div>
    }
    return (
      <div>
        {display}
      </div>
    )
  }
}

export default withRouter(Profile);
