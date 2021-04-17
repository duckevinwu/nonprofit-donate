import React from 'react';
import firebase from '../firebase';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      fullName: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  componentDidMount() {
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    })
  }

  handleFullNameChange(e) {
    this.setState({
      fullName: e.target.value
    })
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleRepeatChange(e) {
    this.setState({
      repeat: e.target.value
    })
  }

  handleSignup(e) {
    e.preventDefault();

    const email = this.state.email;
    const password = this.state.password;
    const fullName = this.state.fullName;
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log('user created');

            user.updateProfile({
              displayName: fullName
            }).then(function() {
              // send verification email
              user.sendEmailVerification().then(function() {
                console.log('verification email sent');
              }).catch(function(error) {
                console.log(error.message);
              })
            }).catch(function(error) {
              console.log(error.message);
            })
          })
          .catch((error) => {
            // var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
          });
      });

  }

  render() {
    return (
      <div>
        <form className="flex flex-col w-1/2">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="border" value={this.state.email} onChange={this.handleEmailChange}></input>
          <label htmlFor="fullname">Full name</label>
          <input type="text" id="fullname" className="border" value={this.state.fullName} onChange={this.handleFullNameChange}></input>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="border" value={this.state.password} onChange={this.handlePasswordChange}></input>
          <button onClick={this.handleSignup} type="submit" className="bg-black text-white">Sign up</button>
        </form>
      </div>
    )
  }


}
