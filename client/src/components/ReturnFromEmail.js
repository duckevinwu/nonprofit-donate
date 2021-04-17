import React from 'react';
import firebase from '../firebase';

export default class ReturnFromEmail extends React.Component {
  constructor(props) {
    super(props);

    this.handleVerifyEmail = this.handleVerifyEmail.bind(this);
  }
  componentDidMount() {
    let search = window.location.search;
    let params = new URLSearchParams(search);

    var mode = params.get('mode');
    var actionCode = params.get('oobCode');

    var auth = firebase.auth();

    switch(mode) {
      case 'resetPassword':
        break;
      case 'recoverEmail':
        break;
      case 'verifyEmail':
        this.handleVerifyEmail(auth, actionCode);
        break;
      default:
        console.log('invalid mode');
    }
  }

  handleResetPassword() {
    console.log('reset password');
  }

  handleVerifyEmail(auth, actionCode) {
    auth.applyActionCode(actionCode).then((resp) => {
      console.log('email verified');
    }).catch((error) => {
      console.log('error verifying email')
    })
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}
