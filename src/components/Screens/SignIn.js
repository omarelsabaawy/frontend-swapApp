import React, { useEffect } from 'react'
import NavBar from '../NavBar/Navbar'
import Footer from '../Standards/Footer';
import Breadcrumb from '../Standards/Breadcrumb'
import { Link } from 'react-router-dom';
import $ from 'jquery';

// import { FaGooglePlus, FaApple, FaFacebookSquare } from 'react-icons/fa'
// import { Col, Row } from 'react-bootstrap';


function SignIn() {

    useEffect(() => {
        $(document).ready(function () {
            $('.login-info-box').fadeOut();
            $('.login-show').addClass('show-log-panel');
        });


        $('.login-reg-panel input[type="radio"]').on('change', function () {
            if ($('#log-login-show').is(':checked')) {
                $('.register-info-box').fadeOut();
                $('.login-info-box').fadeIn();

                $('.white-panel').addClass('right-log');
                $('.register-show').addClass('show-log-panel');
                $('.login-show').removeClass('show-log-panel');

            } else if ($('#log-reg-show').is(':checked')) {
                $('.register-info-box').fadeIn();
                $('.login-info-box').fadeOut();

                $('.white-panel').removeClass('right-log');

                $('.login-show').addClass('show-log-panel');
                $('.register-show').removeClass('show-log-panel');
            }
        });

    });

    return (
        <div>
            <NavBar />
            <Breadcrumb type="Sign In" />

            <div style={{ marginTop: 300 }}>
                <div class="login-reg-panel">
                    <div class="login-info-box">
                        <h2>Have an account?</h2>
                        {/* <p style={{ color: 'white', padding: 10 }}>Sign in by :
                            <Link style={{ fontSize: '20px', color: 'red', marginRight: '5px' }}><span><FaGooglePlus /></span></Link>
                            <Link style={{ fontSize: '20px', color: 'black', marginRight: '5px' }}><span><FaApple /></span></Link>
                            <Link style={{ fontSize: '20px', color: 'blue', marginRight: '5px' }}><span><FaFacebookSquare /></span></Link>
                        </p> */}
                        <p></p>
                        <label id="label-register" for="log-reg-show">Login</label>
                        <input type="radio" name="active-log-panel" id="log-reg-show" checked="checked" />
                    </div>

                    <div class="register-info-box">
                        <h2>Don't have an account?</h2>
                        <p></p>
                        <label id="label-login" for="log-login-show">Register</label>
                        <input type="radio" name="active-log-panel" id="log-login-show" />
                    </div>

                    <div class="white-panel">
                        <div class="login-show">
                            <h2>Sign in</h2>
                            <input type="text" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <input type="button" value="Login" />
                            <Link style={{ color: '#255' }} to="">Forgot password?</Link>
                        </div>
                        <div class="register-show">
                            <h2>REGISTER</h2>
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <input type="password" placeholder="Confirm Password" />
                            <input type="button" value="Register" />
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default SignIn