import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { useAuth } from '../../context/auth'

import './styles.css';

import LogoImg from '../../assets/Logo.svg';
import Avatar from '../../assets/avatar.jpg';

import ScrollContent from './scrollContent';
import Workout from '../Workout';
import Exercise from '../Exercise';
import Details from '../Details'

const Dashboard: React.FC = () => {
    const { signOut } = useAuth();

    function handleSignOut() {
        signOut();
    }

    return (
        <Router>
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
                                    <Link to="/" >All Workouts</Link>
                                    <div>
                                        <span>12</span>
                                    </div>
                                </button>
                                <button>Create New</button>
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
                                <button>Create New</button>
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
                            <img src={Avatar} alt="avatar" />
                        </div>
                    </div>

                    <div className="main-painel">


                        <button onClick={handleSignOut} >SignOut</button>
                        <div>
                            <Switch>
                                <Route exact path="/" component={Workout} />
                                <Route exact path="/exercise" component={Exercise} />
                                <Route exact path="/details" component={Details} />
                            </Switch>
                        </div>


                    </div>

                </div>
            </div>
        </Router>
    )
}

export default Dashboard;