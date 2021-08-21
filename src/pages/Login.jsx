import React from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { loginAction } from '../redux/actions/loginAction';
const Login = (props) => {

    return (
        <div className="login-container">
            <div className="container">
                <div className="row my-auto">
                    <div className="col-6 offset-3">
                        <div className="card">
                            <div className="d-flex align-items-center">
                                <div className="left-side">
                                    <img src="/assets/img/warc-3.png" className="mx-auto d-block" alt="" />
                                </div>
                                <div className="right-side ml-3">
                                    <h1 className="font-montserrat-bold">SIGN UP</h1>
                                    
                                    <AvForm onSubmit={(event, errors, values) => { props.loginAction(event, errors, values, props.history)}}>
                                        <AvField
                                            className="mt-3"
                                            type="text"
                                            name="name"
                                            placeholder="name"
                                            required
                                            errorMessage="must be filled" />
                                        <AvField
                                            className="mt-3"
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="email"
                                            errorMessage="must be filled" />
                                        <AvField
                                            className="mt-3"
                                            type="password"
                                            name="password"
                                            placeholder="password"
                                            required
                                            errorMessage="must be filled" />
                                   
                                      <div className="d-flex mt-4">
                                      <AvField
                                            className=" d-flex p-0"
                                            type="checkbox"
                                            name="check"
                                            // label="remember me ..."
                                             />
                                             <span>
                                             remember me ...
                                             </span>
                                      </div>

                                        <button type="submit" className="w-100 d-block btn btn-success mt-3">Submit</button>
                                    </AvForm>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        isLogin: state.login.isLogin,
    }
}

export default connect(mapStateToProps, { loginAction })(Login);