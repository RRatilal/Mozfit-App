import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebookF } from 'react-icons/fa'

import './styles.css';

import LogoImg from '../../assets/Logo.svg';
import backgroundImg from '../../assets/background.svg';

export default function Signin() {
    return (
        <div className="sign-container">
            <div className="left">
                <div id="logo">
                    <img src={LogoImg} alt="MozFit" />
                </div>

                <section className="form">
                    <h1>Sign in to MozFit</h1>

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
                        <input placeholder="Email" type="email" />
                        <div className="signin-password">
                            <input type="password" placeholder="Password" />
                            <Link className="forgot-password" to="/reset">forgot password</Link>
                        </div>

                        <button className="long-button" type="button">
                            <Link to="/dashboard" />
                            <span>Sign in</span>
                            <div className="liquid"></div>
                        </button>

                        <Link className="signup-link" to="/signup">sign up</Link>
                    </form>
                </section>
            </div>

            <div className="right">
                <img src={backgroundImg} alt="bg fit" />
            </div>
        </div>
    )
}