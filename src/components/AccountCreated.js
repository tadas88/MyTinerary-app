import React, { Component } from 'react';
import Logo from '../MYtineraryLogo.png';
import { Link } from 'react-router-dom';
import HomeLogo from '../homeIcon.png';

class AccountCreated extends Component {
    render() {
        return (
            <div>
            <div className="center">
                    <img src={Logo} alt="Logo" className="logo"/>
                    <p>Your account has been successfully registered, please click bellow to log in</p>
                    <Link to={'/login'}>
                        <button id="account-buttons" className="waves-effect waves-light btn-large">Log-in</button>
                    </Link>
                </div>
                <div className="center home">
                    <Link to={'/'}>
                        <img src={HomeLogo} alt="Home logo" className="center homeLogoNewAccount"/>
                    </Link>
                </div>
            </div>
        )
    }
}


export default AccountCreated