import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Link, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { useAuth } from '../../context/auth';
import { useAdmin } from '../../context/admin';

import './styles.css';

import LogoImg from '../../assets/Logo.svg';
import Avatar from '../../assets/avatar.jpg';

import ScrollContent from './scrollContent';
import { AdminRoutes } from '../../routes/app.routes';

const Dashboard: React.FC = () => {
    const { signOut, user } = useAuth();
    const { getAllUserWorkouts, workouts } = useAdmin();
    const [display, setDisplay] = useState("none");

    useEffect(() => {
        getAllUserWorkouts()
    }, [])

    function handleSignOut() {
        signOut();
    }

    function handleClickAvatar() {
        setDisplay(display === "none" ? "flex" : "none")
    }

    return (
        <Router basename="admin" >
            <div className="dashboard-container">
                <div className="left-painel-container">
                    <div id="logo">
                        <img src={LogoImg} alt="MozFit" />
                    </div>

                    <h1>Mozfit</h1>

                    <span className="separator"></span>

                    <div className="options-painel">

                        <ScrollContent title="Workout">
                            <div className="slide-content">
                                <button>
                                    <Link to="/workout" >All Workouts</Link>
                                    <div>
                                        <span>{workouts?.length}</span>
                                    </div>
                                </button>
                                <button>
                                    <Link to="/create" >Create New</Link>
                                </button>
                            </div>
                        </ScrollContent>
                        <ScrollContent title="Exrcise">
                            <div className="slide-content">
                                <button>
                                    <Link to="/exercise" >All Exrcises</Link>
                                    <div>
                                        <span>12</span>
                                    </div>
                                </button>
                                <button>
                                    <Link to="/create" >Create New</Link>
                                </button>
                            </div>
                        </ScrollContent>
                    </div>
                </div>

                <div className="dashboard-main">

                    <div className="top-painel-container">
                        <div className="search-content">
                            <div className="search-box">
                                <input placeholder="Search" />
                                <button>
                                    <FaSearch size={20} />
                                </button>
                            </div>
                        </div>
                        <div className="avatar" >
                            <img src={Avatar} alt="avatar" onClick={handleClickAvatar} />
                            <div className="user-details" style={{ display }} >
                                <div className="avatar">
                                    <img src={user?.local.photo.url} alt="avatar" />
                                </div>
                                <span className="avatar-name" >{user?.local.name}</span>
                                <button className="signout" onClick={handleSignOut} >Sign out</button>
                            </div>
                        </div>
                    </div>

                    <div className="main-painel">

                        <div>
                            <Switch>
                                {AdminRoutes.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        component={route.main}
                                    />
                                ))}
                            </Switch>
                        </div>

                    </div>

                </div>
            </div>
        </Router>
    )
}

export default Dashboard;