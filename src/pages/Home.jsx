import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import Header from "../components/Header";
import Suggestion from '../components/Suggestion';
import Subscribe from "../components/Subscribe";
import Advantages from '../components/Advantages';
import Footer from '../components/Footer';
import { updateLoginState, loginAction, signOut } from '../redux/actions/loginAction';
const Home = (props) => {
   

    return (
        <div className="home-container">
          
            <Navbar history={props.history} />
            <div className="home-content">
                <Header />               

                <div className="sugg-wrapper">
                    <Suggestion history={props.history} />
                </div>

                <div className="subscribe-container">
                    <Subscribe />
                    <img src="/assets/img/subscribe-img.png" alt="" />
                </div>
            </div>
        
            <div className="avantage-contain">
                <Advantages />
            </div>
        
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        isModal: state.login.isModal,
        isLogin: state.login.isLogin,
    }
}

export default connect(mapStateToProps, { updateLoginState, loginAction, signOut })(Home);