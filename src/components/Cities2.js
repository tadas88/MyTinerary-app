import React, { Component } from 'react';
import HomeLogo from '../homeIcon.png';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { getCityList } from '../store/actions/cityActions'

class Cities extends Component {
    state = {
        searchParam: ''
    }

    showFiltered = (event) => {
        this.setState({
            searchParam: event.target.value
        })
    }

    componentDidMount(){
        this.props.getCityList()
    }

    render() {
        console.log("HOLA GONZALO"); 
        console.log(this.props.ciudades); 

        let ciudadesFiltradas = [];
        if(this.props.ciudades != undefined){
            ciudadesFiltradas = this.props.ciudades.filter((city) =>
            city!=undefined && city.name.startsWith(this.state.searchParam.charAt(0).toUpperCase() + this.state.searchParam.slice(1))
            );
        }
            const citiesList = ciudadesFiltradas.length ? (
            ciudadesFiltradas.map(city => {
                return (
                    <div className="center" key={city.name}>
                        {/* <img src={city.img} alt="City image"/> */}
                        <div className="center">
                            <Link to={'/iteneraries/' + city.name}>
                                <span className="waves-effect waves-light btn-large indigo darken-1">{city.name}</span>
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
                <div className="center allCities">
                    <p>Filter our current Cities</p>
                    <div class="input-field col s6">
                        <input type="text" id="filterInput" onChange={this.showFiltered}/>
                        <label for="filterInput">Type city name</label>
                    </div>
                </div>
                <div className="post card cities">
                    <div className="center">
                        {citiesList}
                    </div>
                </div>
                {/* <div className="center">
                    <a className="waves-effect waves-light btn-large">Barcelona</a>
                </div> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ciudades: state.citiesReducer.cities
    }
};

const mapDispatchToProps = dispatch => ({
    getCityList:() => {dispatch(getCityList())}
});



export default connect(mapStateToProps, mapDispatchToProps)(Cities)