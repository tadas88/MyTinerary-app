import React, { Component } from 'react';
import Logo from '../MYtineraryLogo.png';
import { Link } from 'react-router-dom';
import HomeLogo from '../homeIcon.png';
import axios from 'axios'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.name.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    render() {
        return (
            <div className="center">
              <div className="center">
                <img src={Logo} alt="Logo" className="logo"/>
              </div>
              <form onSubmit={this.handleSubmit}>
                  <div className="center">
                    <label className="loginInputLine">
                        Email Address:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="center">
                    <label className="loginInputLine">
                        Password:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                  </div>
                  <input type="submit" value="Log-In" className="waves-effect waves-light btn-large" />
              </form>
              <div className="center home">
                    <Link to={'/'}>
                        <img src={HomeLogo} alt="Home logo" className="center homeLogoAccount"/>
                    </Link>
              </div>
            </div>
        )
    }
}


export default Login