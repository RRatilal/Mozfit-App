import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import LogoImg from '../../assets/Logo.svg';
import backgroundImg from '../../assets/background.svg';

const Reset: React.FC = () => {
    return (
        <div className="sign-container">
            <div className="left">
                <div id="logo">
                    <img src={LogoImg} alt="MozFit" />
                </div>

                <section className="form reset">
                    <h1>Forgot password</h1>
                    <p>Enter the email address you used when you joined and we'll send you instructions to reset your password.</p>
                    <form>
                        <input placeholder="Email" type="email" />

                        <button className="long-button" type="button">
                            <span>Send</span>
                            <div className="liquid"></div>
                        </button>

                        <Link className="signup-link" to="/">sign in</Link>
                    </form>
                </section>
            </div>

            <div className="right">
                <img src={backgroundImg} alt="bg fit" />
            </div>
        </div>
    )
}

export default Reset;