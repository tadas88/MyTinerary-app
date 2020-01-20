import React, { Component } from 'react';
import GoLogo from '../circled-right-2.png';
import Slider from './Slider2';
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div className="center">
                <div className="section">
                    <div className="center text">
                        <p className="center">Find your perfect trip, desiged by</p>{"\n"}
                        <p className="center">insiders who know and love their cities.</p>
                        <span className="center">Click bellow to start browsing:</span>
                    </div>
                </div>
                <div className="center goLogo">
                    <Link to={'/cities/'}>
                        <img src={GoLogo} alt="Advance logo" className="go"/>
                    </Link>
                </div>
                {/* <div className="center account">
                    <p className="center">Want to build your own MYtinerary?</p>
                    <a className="left">Log In</a>
                    <a className="right">Create an account</a>
                </div>
                <div className="center home">
                    <img src={HomeLogo} alt="Home logo" className="homeLogo"/>
                </div> */}
                <Slider />
            </div>
        )
    }
}

export default Landing
