import React from 'react';
// import { Link, useHistory } from 'react-router-dom';
import { FaGoogle, FaFacebookF, FaEye } from 'react-icons/fa';

import './styles.css';

import LogoImg from '../../assets/Logo.svg';
import backgroundImg from '../../assets/background.svg';

export default function Signup() {
    return (
        <div className="sign-container">
            <div className="left">
                <div id="logo">
                    <img src={LogoImg} alt="MozFit" />
                </div>

                <section className="form">
                    <h1>Sign up to MozFit</h1>

                    <div className="social-buttons">
                        <button className="circle-button" type="button" >
                            <FaGoogle size={20} />
                        </button>
                        <button className="circle-button" type="button" >
                            <FaFacebookF size={20} />
                        </button>
                    </div>
                    <span className="separator">or</span>
                    <form>
                        <input placeholder="Full Name" />
                        <input placeholder="Email" type="email" />
                        <div className="signup-password">
                            <input type="password" placeholder="Password" />
                            <button className="visible">
                                <FaEye size={25} />
                            </button>
                        </div>
                        <div className="signup-password">
                            <input type="password" placeholder="Repeat Password" />
                            <button className="visible">
                                <FaEye size={25} />
                            </button>
                        </div>

                        <div className="terms">
                            <div className="radio">
                                <input type="radio" />
                                <div className="effect"></div>
                            </div>
                            <p>By registering I confirm that I accept the <span><a href="http://">Terms & Conditions</a></span> and <span><a href="http://">Privacy Policy</a></span></p>
                        </div>

                        <button className="long-button" type="button">
                            <span>Sign up</span>
                            <div className="liquid"></div>
                        </button>
                    </form>
                </section>
            </div>

            <div className="right">
                <img src={backgroundImg} alt="bg fit" />
            </div>
        </div>
    )
} 