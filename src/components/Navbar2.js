import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeLogo from '../homeIcon.png';
import Logo from '../MYtineraryLogo.png'

class Navbar2 extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper indigo darken-1">
                    <Link to={'/'} className="brand-logo center" >
                        <img src={Logo} alt="logo" className="homeLogo" />
                    </Link>
                    {/* <ul id="nav-mobile" className="left">
                        <li><Link to={'/account'}>Account</Link></li>
                    </ul> */}
                    </div>
                </nav>
            </div>
        )
    }
}


export default Navbar2