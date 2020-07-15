import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { useAdmin } from '../../context/admin';

import Menu from '../../components/Menu';
import TopPainel from '../../components/TopPainel';
import { Details } from '../../components/Details'

import './styles.css';

const Workout: React.FC = () => {
    // const [visible, setVisible] = useState("hidden");
    const [modalShow, setModalShow] = useState(false);

    const { getAllUserWorkouts, workouts, passingPropsToDatailsPage } = useAdmin();

    // const { pathname: url } = useLocation();

    useEffect(() => {
        getAllUserWorkouts()
    }, [getAllUserWorkouts]);

    return (
        <>
            <Menu />
            <div className="dashboard-main">
                <TopPainel />
                <div className="workout-container">
                    <h2>Building Muscle</h2>
                    <div className="workout-list">
                        {workouts?.map(workout => (
                            <div className="workout" key={workout.id} >
                                <div className="workout-img">
                                    <img src={workout.image.url} alt="workout" />
                                </div>
                                <span className="workout-title">{workout.workoutType}</span>
                                <div className="litle-details">
                                    <p><span>{workout.level}</span> <span>| {workout.duration} weeks</span></p>
                                </div>
                                <button className="show-workout-details" onClick={() => [setModalShow(true), passingPropsToDatailsPage(workout)]} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Details show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default Workout;