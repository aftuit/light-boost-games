import React from 'react';
import MainNavbar from '../components/MainNavbar'
import Slider from "react-slick";
import { data } from '../mock/data.js';
import { Link } from 'react-router-dom';
const Main = () => {
    const settings = {
        infinite: true,
        speed: 700,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        lazyLoad: true,
    }
    return (
        <div>
            <MainNavbar />
            <div className="carousel-content main-carousel" >
                <div className="carousel-wrapper">
                    <Slider {...settings} className="container-carousel">
                        {
                            data.map(item => {
                                return (
                                    <div className="carousel-info" key={item.id}>
                                        <span className="font-montserrat">CAN YOU WIN US ?</span>
                                        <h1 className="font-montserrat">{item.name}</h1>
                                        <p className="font-montserrat">Winning Rated Battlegrounds in World of Warcraft
                                            requires a high level of coordination, team play, and a strong lead to
                                            organize a team of 10 players. Earning higher RBG ratings rewards...</p>
                                    </div>
                                )
                            })
                        }

                    </Slider>

                    <Link to="/login">
                        <button type="button" className="btn font-montserrat">Play now</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};


export default Main;