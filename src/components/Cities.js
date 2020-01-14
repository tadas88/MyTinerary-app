import React, { Component } from 'react';
import HomeLogo from '../homeIcon.png';
import { Link } from 'react-router-dom';
import axios from 'axios'


class Cities extends Component {
    state = {
        searchParam: '',
        cities: [ ]
    }
    componentDidMount(){
        axios.get('https://mern-ubiqum-v2.herokuapp.com/cities/all')
        .then(res => {
            console.log(res);
            this.setState({
                cities: res.data
            })
        })
    }

    showFiltered = (event) => {
        this.setState({
            searchParam: event.target.value
        })
    }

    render() {
        let ciudadesFiltradas = this.state.cities.filter((city) =>
            city.name.startsWith(this.state.searchParam.toUpperCase())
            );
            console.log(ciudadesFiltradas);
        const { cities } = this.state;
        const citiesList = ciudadesFiltradas.length ? (
            ciudadesFiltradas.map(city => {
                return (
                    <div className="center" key={city.name}>
                        {/* <img src={city.img} alt="City image"/> */}
                        <div className="center allCities">
                            <Link to={'/iteneraries/' + city.name}>
                                <span className="waves-effect waves-light btn-large">{city.name}</span>
                            </Link>
                            <p>{city.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No MYtineraries</div>
        )
        return (
            <div>
                <div className="center">
                    <p>Filter our current Cities</p>
                    <input type="text" id="filterInput" onChange={this.showFiltered}/>
                </div>
                <div className="center">
                    {citiesList}
                </div>
                {/* <div className="center">
                    <a className="waves-effect waves-light btn-large">Barcelona</a>
                </div> */}
                <div className="center home">
                    <Link to={'/'}>
                        <img src={HomeLogo} alt="Home logo" className="homeLogo"/>
                    </Link>
                </div>
            </div>
        )
    }
}


export default Cities