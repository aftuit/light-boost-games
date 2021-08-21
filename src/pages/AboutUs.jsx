import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Advantages from '../components/Advantages';
import Rating from '../components/Rating';
import Footer from "../components/Footer"
const AboutUs = (props) => {
    return (
        <div className="about">
            <Navbar history={props.history} />

            <div className="about-container">
                <div><Link className="back-link" to="/home">Home </Link> <span> &#65125;  About us</span></div>

                <div className="row">
                    <div className="col-8">
                        <h1 className="font-montserrat-bold">ABOUT US</h1>
                        <p>
                            The LightGBM framework supports different algorithms including GBT, GBDT, GBRT, GBM, MART and RF.
                            I just happened to get an Asus VG248QE a little early for Christmas - right around the
                            time Blur Busters gets its forums up and running. Great stuff!
                            Anyway, one of the first things I did was get LightBoost up and running using
                            the ToastyX Strobelight app and it works beautifully - and I mean beautifully - for
                            most games, but there have been some outliers - most notably Sleeping Dogs and Dark Souls.
                            In both cases, my VG248QE would be set back to non-strobing 144Hz as soon as the game
                            fired up into fullscreen. Hitting CTRL ALT + does at least attempt to turn strobing back on,
                            but after a few seconds of black screen, it always comes back non-strobing. I did try windowed
                            mode with Sleeping Dogs, which allowed strobing to stay on, but the game was then capped at 60fps
                            which, as you can imagine, is a bit of a bummer.
                            I didn't play around with Dark Souls too much, but I'm assuming the situation would be the same.
                            In this case, it wouldn't be that big of a deal since the fps fix I'm using for that game caps out
                            at 60fps anyway. Either way, I haven't even found anybody mentioning such issues online - in fact,
                            I've come across a couple threads on other forums of people saying they've been able to play Sleeping
                            Dogs strobed - so I thought I'd check in here to see if the experts could shed some light on the situation.
                        </p>
                    </div>
                </div>
            </div>
            <div className="avantage-contain">
                <Advantages />
            </div>
            <div className="about-container">
                <div className="row justify-content-between">
                    <h1 className="font-montserrat-bold">MORE INFO</h1>
                    <div className="col-6">
                        <p className="font-montserrat">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis, lectus magna
                        fringilla urna, porttitor rhoncus dolor purus non enim praesent
                        elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
                        etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus
                        in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit
                        amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio
                        </p>
                    </div>

                    <div className="col-6">
                       <p className="font-montserrat">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, sit amet luctus venenatis, lectus magna
                        fringilla urna, porttitor rhoncus dolor purus non enim praesent
                        elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
                        eti quis enim lobortis scelerisque fermentum dui faucibus
                        in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit
                        tortor condimentum lacinia quis vel eros donec ac odio
                       </p>
                    </div>
                </div>
            </div>
        
            <div className="rating-wrapper">
                <Rating />
            </div>

            <div className="about-container">
                <h2 className="font-montserrat-bold">WE ARE WORKING SINCE 2011</h2>
                <div className="row prod justify-content-between text-center">
                    <div className="col">
                        <img src="/assets/img/warc-1.png" alt="" />
                    </div>
                    <div className="col">
                        <img src="/assets/img/warc-2.png" alt="" />
                    </div>
                    <div className="col">
                        <img src="/assets/img/warc-3.png" alt="" />
                    </div>
                    <div className="col">
                        <img src="/assets/img/warc-4.png" alt="" />
                    </div>
                    <div className="col">
                        <img src="/assets/img/warc-5.png" alt="" />
                    </div>
                </div>
            </div>
       
            <footer>
                <Footer />
            </footer>
        </div>
    );
};


export default AboutUs;