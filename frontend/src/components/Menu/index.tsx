import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCalendarAlt, FaBookmark, FaCog, FaHome } from 'react-icons/fa';

import LogoImg from '../../assets/Logo.svg';

import './styles.css'

const Menu: React.FC = () => {
    return (
        <div className="left-painel-container">
            <div id="logo">
                <img src={LogoImg} alt="MozFit" />
            </div>

            <div className="options-painel">
                <ul>
                    <li>
                        <NavLink to="/" exact >
                            <FaHome size={22} />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/workout" >
                            <FaCalendarAlt size={22} />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/exercise" >
                            <FaBookmark size={22} />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings" >
                            <FaCog size={22} />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;