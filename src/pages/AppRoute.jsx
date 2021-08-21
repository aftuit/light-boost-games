import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import Main from './Main'
import PageLoader from '../components/PageLoader';
import { loginAction } from '../redux/actions/loginAction';
const AppRoute = (props) => {


    if(props.isLoad){
        return <PageLoader />
    }
    if(props.isLogin){
                return <Home /> 
            }
                return <Main/>;
};
const mapStateToProps = (state) => {
    return{
        isLogin: state.login.isLogin,
        isLoad: state.login.isLoad
    }
}

export default connect(mapStateToProps, {loginAction})(AppRoute) ;