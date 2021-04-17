import React from 'react';
import firebase from '../firebase';
import InfoCard from './InfoCard';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      status: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    var that = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // user is signed in
        if (user.emailVerified) {
          // redirect to profile
          that.props.history.push('/profile')
        } else {
          that.setState({
            status: 'form'
          })
        }
      } else {
        that.setState({
          status: 'form'
        })
      }
    });
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    })
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleLogin(e) {
    e.preventDefault();

    const email = this.state.email;
    const password = this.state.password;
    const redirectUrl = this.props.redirectUrl || '/profile'
    const that = this;

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            if (user.emailVerified) {
              that.props.history.push(redirectUrl);
            } else {
              that.setState({
                status: 'verify'
              })
            }
          })
          .catch((error) => {
            // var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
          });
      });
  }

  render() {
    const status = this.state.status;
    let display;

    switch (status) {
      case 'verify':
        display = <InfoCard status="verify"/>
        break;
      case 'form':
        display = (
          <form className="flex flex-col w-1/2">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="border" value={this.state.email} onChange={this.handleEmailChange}></input>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="border" value={this.state.password} onChange={this.handlePasswordChange}></input>
            <button onClick={this.handleLogin} type="submit" className="bg-black text-white">Login</button>
          </form>
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

export default withRouter(Login);
