import React, { Component } from "react";
import Slider from "react-slick";
import axios from 'axios';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';


class SimpleSlider2 extends Component {
    state = {
        slide: []
    }
    componentDidMount() {
        axios.get('https://mern-ubiqum-v2.herokuapp.com/itineraries/all')
            .then(res => {
                this.setState({
                    slide: res.data
                })
                console.log(res);
            })
    }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 980,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4900
    };

    const allSlides = this.state.slide.map(singleSlide => {
        return (
            <div className="center">
                <Link to={'/iteneraries/' + singleSlide.city}>
                    <img className="center" src={singleSlide.img} height="300" width="500" alt="" />
                </Link>
                <h5><strong>{singleSlide.title}</strong></h5>
                <StarRatingComponent 
                    name="Rating" 
                    className="sliderStars"
                    editing={false}
                    starCount={5}
                    value={singleSlide.rating}>
                </StarRatingComponent>
            </div>
        );
    });

    return (
      <div className="slider">
        <h2>Popular MYtineraries</h2>
            <Slider {...settings}>
                { allSlides }
            </Slider>
      </div>
    );
  }
}

export default SimpleSlider2