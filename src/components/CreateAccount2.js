import React, { Component } from 'react';
import Logo from '../MYtineraryLogo.png';
import { Link } from 'react-router-dom';
import HomeLogo from '../homeIcon.png';


class CreateAccount2 extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    state = {
      name: '',
      email: '',
      password: ''
    }
    
      handleChangeName(event) {
        console.log("Name:");
        console.log(event.target.value);
        this.setState({
          name: event.target.value
        });
        console.log(this.state.name);
      }
      handleChangeEmail(event) {
        console.log("Email:");
        console.log(event.target.value);
        this.setState({
          email: event.target.value
        });
        console.log(this.state.email)
      }
      handleChangePassword(event) {
        console.log("Password:");
        console.log(event.target.value);
        this.setState({
          password: event.target.value
        });
        console.log(this.state.password)
      }

      validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0 && this.state.name > 0;
      }
    
      handleSubmit = async event => {

        event.preventDefault();
        const user = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        };


        const url = 'https://mern-ubiqum-v2.herokuapp.com/users/register';
        const data = { user };
        try {
        console.log("HOLAAA"); 
        console.log(data); 

          await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              name: this.state.name, 
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
            console.log(data);
          });
          this.props.history.push('/');
        } catch (error) {
          console.error('Error', error);
        }

        /* fetch('https://mern-ubiqum-v2.herokuapp.com/users/register', {
          method: 'post',
          body: JSON.stringify(opts)
        }).then(function(response) {
          return response.json();
        }).then(function(data) {
          CromeSamples.log('Created User:', data);
        }); */
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
                        <input type="text" name="name" id="nameInput" value={this.state.name} onChange={this.handleChangeName} />
                        <label for="nameInput">Name:</label>
                    </div>
                  </div>
                  <div className="center">
                    <div class="input-field col s6">
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChangeEmail} />
                        <label>Email Address:</label>
                    </div>
                  </div>
                  <div className="center">
                    <div class="input-field col s6">
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChangePassword} />
                        <label>Password:</label>
                    </div>
                  </div>
                  
                    <input type="submit" value="Submit" disabled={!this.validateForm} className="waves-effect waves-light btn-large white-text indigo darken-1" />
                  
              </form>
            </div>
        )
    }
}


export default CreateAccount2