import React from 'react';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';

import { SignInForm } from '../../components/form';

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

                    <SignInForm />
                </section>
            </div>

            <div className="right">
                <img src={backgroundImg} alt="bg fit" />
            </div>
        </div>
    )
}