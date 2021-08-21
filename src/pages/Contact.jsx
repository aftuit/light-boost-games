import React from 'react';
import Navbar from '../components/Navbar';
import { AvForm, AvField } from 'availity-reactstrap-validation'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { sendContacts } from '../redux/actions/contactAction';
import { connect } from 'react-redux';
const Contact = (props) => {
    return (
        <div className="contact">
            <Navbar history={props.history} />

            <div className="contact-container">
                <div><Link className="back-link" to="/home">Home </Link> <span> &#65125;  Contact</span></div>


                <div className="row">
                    <div className="col-7">
                        <h1 className="font-montserrat-bold ">CONTACT US</h1>

                        <AvForm onSubmit = {(event, errors, values) => {props.sendContacts(event, errors, values)}}>
                            <AvField 
                                className="mt-5" 
                                type="text" 
                                name="user_name" 
                                placeholder="Name"/>
                            <AvField 
                                className="mt-4" 
                                type="text" 
                                name="phone_number" 
                                placeholder="Phone"/>
                            <AvField 
                                className="mt-4" 
                                type="text" 
                                name="user_email" 
                                placeholder="Email"/>
                            
                            <AvField className="mt-4" rows="6" type="textarea" name="message" placeholder="Send message..." />
                            <button type="submit" className="btn btn-block w-100 mt-4">Submit</button>
                        </AvForm>
                    </div>
                
                    <div className="col-5">
                        <img src="/assets/img/contact-page.png" alt="" />
                    </div>
                </div>

                <div className="row row-statistic justify-content-between text-center">
                    <div className="col-4">
                        <div className="d-flex col4">
                            <img src="/assets/icon/email.svg" alt="" />
                            <span>email@gmail.com</span>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="d-flex col4">
                            <img src="/assets/icon/listens.svg" alt="" />
                            <span>4439 2344 1233</span>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="d-flex col4">
                            <img src="/assets/icon/earth.svg" alt="" />
                            <span>Adress, Moscow</span>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        send: state.contact.send
    }
}

export default connect(mapStateToProps, {sendContacts})(Contact);