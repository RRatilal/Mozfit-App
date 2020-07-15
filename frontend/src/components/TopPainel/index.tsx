import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { useAuth } from '../../context/auth';

import './styles.css'

const TopPainel: React.FC = () => {
    const { signOut, user } = useAuth();

    function handleSignOut() {
        signOut();
    }

    return (
        <div className="top-painel-container">
            <div className="search-content">
                <div className="search-box">
                    <input placeholder="Search" />
                    <button>
                        <FaSearch size={18} />
                    </button>
                </div>
            </div>
            <div className="avatar-container" >
                <div className="avatar">
                    <img src={user?.local.photo.url} alt="avatar" onClick={() => { }} />
                </div>
                <div className="user-details">
                    <span className="avatar-name" >{user?.local.name}</span>
                    <button className="signout" onClick={handleSignOut} >Sign out</button>
                </div>
            </div>
        </div>
    )
}

export default TopPainel;