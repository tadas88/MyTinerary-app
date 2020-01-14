import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <footer className="page-footer indigo darken-1">
                    <div className="container">
                        <Link to={'/account'} className="grey-text text-lighten-4 center">
                            <i className="small material-icons">account_box</i>
                        </Link>
                    </div>
                </footer>
            </div>
        )
    }
}


export default Footer