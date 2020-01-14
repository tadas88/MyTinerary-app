import React, { Component } from 'react';
import Logo from '../MYtineraryLogo.png';
import { Link } from 'react-router-dom';
import HomeLogo from '../homeIcon.png';


class AccountLandingPage extends Component {

    constructor(props){
        super(props);
        this.state = { token:localStorage.getItem('token') };
        this.handleTokenRemove = this.handleTokenRemove.bind(this);


    }

    handleTokenRemove() {
        localStorage.removeItem('token')
        this.setState ({ token: null});

    }
    
    render() {
        console.log('hola')
        const isLoggedIn = this.state.token;
        console.log(this.state)

        console.log(isLoggedIn)

        return (
            <div>
                <div className="center">
                    <img src={Logo} alt="Logo" className="logo"/>
                    <Link to={'/login'}>
                        {isLoggedIn ? (
                        <div className="center">
                        <Link to ={'/'}>
                        <button id="account-buttons" className="waves-effect waves-light btn-large indigo darken-1" onClick={this.handleTokenRemove}>Log-out</button>
                        </Link>
                        </div>
                        ) : (
                        <button id="account-buttons" className="waves-effect waves-light btn-large indigo darken-1">Log-in</button>
                        )}
                    </Link>
                    <h5><span>Or</span></h5>
                    <Link to={'/newaccount'}>
                        <button id="account-buttons" className="waves-effect waves-light btn-large indigo darken-1">Create an account</button>
                    </Link>
                </div>
            </div>
        );
    }
}


export default AccountLandingPage