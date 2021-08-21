import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
const NotFound = (props) => {
    return (
        <div className="not-found">
            <Navbar history={props.history}/>
            <div className="notfound-cont">
                <div className="row">
                    <div className="col-3">
                        <h1 className="font-montserrat-bold">OOPS!</h1>

                        <span className="font-montserrat-bold">404</span>
                        <p className="font-montserrat" >ERROR MESSAGE</p>
                        <p className="font-montserrat" >Don't worry let's go Home</p>

                        <Link className="font-montserrat home-link" to="/home">GO HOME</Link>
                    </div>
                </div>

                <img src="/assets/img/404.png" alt="" />
            </div>
        </div>
    );
};


export default NotFound;