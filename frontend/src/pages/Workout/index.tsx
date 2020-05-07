import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth'

import './styles.css';

import WorkoutImg from '../../assets/img1.jpg';

const Workout: React.FC = () => {
    const { getAllUserWorkouts, workouts } = useAuth();

    useEffect(() => {
        getAllUserWorkouts()
    }, [getAllUserWorkouts])

    return (
        <div className="workout-container">
            <h2>Building Muscle</h2>
            <div className="workout-list">
                {workouts?.map(workout => (
                    <div className="workout" key={workout._id} >
                        <div className="workout-img">
                            <img src={WorkoutImg} alt="workout" />
                        </div>
                        <span className="workout-title">{workout.workoutType}</span>
                        <div className="litle-details">
                            <p><span>beginners </span> <span>| {workout.duration} weeks</span></p>
                            <Link to="/details" >more</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Workout;