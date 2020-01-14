import React, { Component } from 'react';
import Logo from '../MYtineraryLogo.png';
import { Link } from 'react-router-dom';
import HomeLogo from '../homeIcon.png';


class Login2 extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChangeEmail(event) {
        console.log(event.target.value);
        this.setState({
          email: event.target.value
        });
        console.log(this.state.email)
      }
      handleChangePassword(event) {
        console.log(event.target.value);
        this.setState({
          password: event.target.value
        });
        console.log(this.state.password)
      }
    
      handleSubmit = async event => {
        event.preventDefault();
        const user = {
          email: this.state.email,
          password: this.state.password
        };

        const url = 'https://mern-ubiqum-v2.herokuapp.com/users/login' 
        const data = { user };
        try {
          console.log(data);

            await fetch(url, {
              method: 'POST',
              body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
              }),
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              }
            }).then(function(response) {
              console.log('Response received')
              return response.json();
            }).then(function(data) {
              console.log(data.token);
              window.localStorage.setItem('token', JSON.stringify(data.token));

            });
            this.props.history.push('/');

          } catch (error) {
            console.error('Error', error);
          }

        }
    render() {
        return (
            <div className="center">
              <div className="center">
                <img src={Logo} alt="Logo" className="logo"/>
              </div>
              <form onSubmit={this.handleSubmit}>
                  <div className="center">
                    <div class="input-field col s6">
                        <input type="text" id="emailInput" value={this.state.email} onChange={this.handleChangeEmail} />
                        <label for="emailInput">Email Address:</label>
                    </div>
                  </div>
                  <div className="center">
                    <div class="input-field col s6">
                        <input type="password" id="passwordInput" value={this.state.password} onChange={this.handleChangePassword} />
                        <label for="passwordInput">Password:</label>
                    </div>
                  </div>
                  <input type="submit" value="Log-In" className="waves-effect waves-light btn-large indigo darken-1" />
              </form>
            </div>
        )
    }
}


export default Login2