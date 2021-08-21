import React from 'react';
import Slider from 'react-slick';
import ShopCard from "../components/ShopCard";
const Carousel = (props) => {
    const settings = {
        infinite: true,
        speed: 700,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        margin: 10,
        autoplay: true,
        lazyLoad: true,
    }
    return (
        <div className="carousel-cover">
            <div className="row card-row">
            <Slider  {...settings} className="carousel-cell">
                {
                    props.data.map(value => {
                        return (                          
                            <ShopCard key={value.id} value={value}/>                          
                        )
                    })
                }
            </Slider>
            </div>
        </div>
    );
};


export default Carousel;