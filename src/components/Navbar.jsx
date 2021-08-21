import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { updateLoginState, signOut } from '../redux/actions/loginAction';
import { Modal, ModalBody, ModalFooter, Tooltip } from 'reactstrap';
import { useState } from 'react';


const Navbar = (props) => {

    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);

    const [tooltipLog, setTooltipLog] = useState(false);
    const toggleLog = () => setTooltipLog(!tooltipLog);

    return (
        <div>
            <div className="navbar-container">
                <nav className="d-flex justify-content-between">
                    <Link to="/home">
                        <img src="/assets/icon/logo.svg" alt="" />
                    </Link>

                    <ul className="nav">
                        <li className="nav-item"><NavLink className="nav-link font-montserrat" activeStyle={{borderBottom: '2px solid #ffffff'}} exact to="/home">HOME</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link font-montserrat" activeStyle={{borderBottom: '2px solid #ffffff'}} exact to="/home/shop">SHOP</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link font-montserrat" activeStyle={{borderBottom: '2px solid #ffffff'}} exact to="/home/about">ABOUT US</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link font-montserrat" activeStyle={{borderBottom: '2px solid #ffffff'}} exact to="/home/contact">CONTACT</NavLink></li>
                    </ul>

                    <div className="social-links d-flex">
                        <div className="me-2 logs" id="logout" onClick={() => props.updateLoginState({isModal: true})} ><img src="/assets/icon/log.svg" alt="error" />
                        </div>
                        <Tooltip placement="bottom" isOpen={tooltipLog} target="logout" toggle={toggleLog}>
                            Log out
                        </Tooltip>

                        <div className="ms-2 logs" id="cards" >
                            <Link to="/cards">
                                <img src="/assets/icon/shop.svg" alt="error" />
                            </Link>
                        </div>

                        <Tooltip placement="bottom" isOpen={tooltipOpen} target="cards" toggle={toggle}>
                            Move to Cards
                        </Tooltip>
                    </div>
                </nav>
            </div>
            <img src="/assets/img/top-header.png" className="w-100" alt="error" />


            <Modal isOpen={props.isModal}>
                    <ModalBody>
                        Are you sure log out ?
                    </ModalBody>
                    <ModalFooter>
                        <button type="button" className="btn btn-danger"  onClick={()=>props.signOut(props.history)}>Yes</button>
                        <button type="button" className="btn btn-success" onClick={()=>props.updateLoginState({isModal: false})}>No</button>
                    </ModalFooter>
                </Modal>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        isModal: state.login.isModal,
        user: state.login.user
    }
}

export default connect(mapStateToProps, {updateLoginState, signOut})(Navbar);