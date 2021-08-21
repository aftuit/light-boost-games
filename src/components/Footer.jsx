import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer-wrap">
            <img src="/assets/img/bottom.png" alt="" />
            <div className="footer">
                <div className="footer-content">
                    <div className="row justify-content-between">
                        <div className="col-3">
                            <img src="/assets/icon/logo-text.svg" alt="" />
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link to="/home" className="nav-link">HOME</Link>
                                    <Link to="/home/about" className="nav-link">ABOUT US</Link>
                                    <Link to="/home/shop" className="nav-link">SHOP</Link>
                                    <Link to="/home/contact" className="nav-link">CONTACTS</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-5">
                            <span>Subscribe to newsletter</span>

                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Your Email" />
                                <div className="input-group-append">
                                    <button type="button" className="btn">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom d-flex justify-content-between align-items-center">
                        <span>WoW © 2021. All Rights Reserved</span>

                        <div className="paid d-flex justify-content-between">
                            <img src="/assets/icon/visa.svg" alt="" />
                            <img src="/assets/icon/mastercard.svg" alt="" />
                            <img src="/assets/icon/paypal.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Footer;