import React from 'react';
import { NavLink, Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="nav-container">
            <nav className="d-flex justify-content-between align-items-center">
                <Link to="/">
                    <img src="/assets/icon/logo.svg" alt="error" />
                </Link>

                <NavLink to="/login" style={{textDecoration: "none"}}>
                    <div className="login-menu d-flex justify-content-between align-items-center">
                        <img src="/assets/icon/user.svg" alt="" />
                        <button type="button" className="btn font-montserrat">Sign up</button>

                    </div>
                </NavLink>

            </nav>
        </div>
    );
};

export default Navbar;