import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="header-container">
            <div className="row">
                <div className="col-6">
                    <h1 className="font-montserrat-bold">RBG RATING CARRY</h1>
                    <p className="font-montserrat">Winning Rated Battlegrounds
                        requires a high level of coordination,
                        team play, and a strong lead to organize a team of...</p>
                    <Link to="/home/shop">
                        <button type="button" className="btn font-montserrat">Buy now</button>
                    </Link>
                </div>
                <div className="col-6">
                    <img className="w-100 h-100" src="/assets/img/header-img.png" alt="" />
                </div>
            </div>
        </div>
    );
};


export default Header;