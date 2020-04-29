import React from 'react';
import { Link } from 'react-router-dom'

import './styles.css';

import WorkoutImg from '../../assets/img1.jpg';

const Workout: React.FC = () => {

    return (
        <div className="workout-container">
            <h2>Building Muscle</h2>
            <div className="workout-list">
                <div className="workout">
                    <div className="workout-img">
                        <img src={WorkoutImg} alt="workout" />
                    </div>
                    <span className="workout-title">Complete program for beginners</span>
                    <div className="litle-details">
                        <p><span>beginners </span> <span>| 6 weeks</span></p>
                        <Link to="/details" >more</Link>
                    </div>
                </div>
                <div className="workout">
                    <div className="workout-img">
                        <img src={WorkoutImg} alt="workout" />
                    </div>
                    <span className="workout-title">Complete program for beginners</span>
                    <div className="litle-details">
                        <p><span>beginners </span> <span>| 6 weeks</span></p>
                        <a href="#">more</a>
                    </div>
                </div>
                <div className="workout">
                    <div className="workout-img">
                        <img src={WorkoutImg} alt="workout" />
                    </div>
                    <span className="workout-title">Complete program for beginners</span>
                    <div className="litle-details">
                        <p><span>beginners </span> <span>| 6 weeks</span></p>
                        <a href="#">more</a>
                    </div>
                </div>
                <div className="workout">
                    <div className="workout-img">
                        <img src={WorkoutImg} alt="workout" />
                    </div>
                    <span className="workout-title">Complete program for beginners</span>
                    <div className="litle-details">
                        <p><span>beginners </span> <span>| 6 weeks</span></p>
                        <a href="#">more</a>
                    </div>
                </div>
                <div className="workout">
                    <div className="workout-img">
                        <img src={WorkoutImg} alt="workout" />
                    </div>
                    <span className="workout-title">Complete program for beginners</span>
                    <div className="litle-details">
                        <p><span>beginners </span> <span>| 6 weeks</span></p>
                        <a href="#">more</a>
                    </div>
                </div>
                <div className="workout">
                    <div className="workout-img">
                        <img src={WorkoutImg} alt="workout" />
                    </div>
                    <span className="workout-title">Complete program for beginners</span>
                    <div className="litle-details">
                        <p><span>beginners </span> <span>| 6 weeks</span></p>
                        <a href="#">more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workout;