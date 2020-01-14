import React, { Component } from 'react';
import axios from 'axios';
import HomeLogo from '../homeIcon.png';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';


class Itinerary extends Component {
    state = {
        itenerary: []
    }
    componentDidMount() {
        let city_name = this.props.match.params.city_name;
        axios.get('https://mern-ubiqum-v2.herokuapp.com/itineraries/' + city_name)
            .then(res => {
                this.setState({
                    itenerary: res.data
                })
                console.log(res);
            })
    }
    render() {

        const iteneraryList = this.state.itenerary.length ? (
            this.state.itenerary.map(singleItenerary => {
                return (
                    
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={singleItenerary.img} alt="" />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">{singleItenerary.title}
                                <i className="material-icons right">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                        <path d="M9 5.5c.83 0 1.5-.67 1.5-1.5S9.83 2.5 9 2.5 7.5 3.17 7.5 4 8.17 5.5 9 5.5zm0 2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S9.83 7.5 9 7.5zm0 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
                                    </svg>
                                </i>
                            </span>
                            <p>Price:{singleItenerary.price}</p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">{singleItenerary.title}<i className="material-icons right">X</i></span>
                            <p>{singleItenerary.summary}</p>
                            <div className="activity-rating">
                                <p>Rating:</p>
                                <StarRatingComponent 
                                    name="Rating" 
                                    className="stars"
                                    size='136px'
                                    editing={false}
                                    starCount={5}
                                    value={singleItenerary.rating}>
                                </StarRatingComponent>
                            </div>
                            <p>Price: {singleItenerary.price}</p>
                            <p>Duration: {singleItenerary.duration}</p>
                        </div>
                    </div>
                )
            })
            
        ) : (
            <div className="center">No iteneraries yet</div>
        )
        return (
            <div>
                { iteneraryList }
            </div>
        )
    }
}


export default Itinerary