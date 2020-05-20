import React from 'react';
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';

import Week from './Week';

import './styles.css';

import { useAdmin } from '../../context/admin'

interface workoutDetails {
    description: string,
    duration: number,
    image: {
        name: string,
        url: string
    },
    level: string,
    target: string,
    workoutType: string,
    weekslist: [];
}

export const Details: React.FC = () => {
    const { workoutDetails } = useAdmin()
    const history = useHistory();

    console.log(workoutDetails)

    function handleClick() {
        history.goBack()
    }

    return (
        <div className="details-container">
            <div className="close" onClick={handleClick} ></div>
            <div className="details-header">
                <div className="header-img">
                    <img src={workoutDetails?.image.url} alt={workoutDetails?.image.name} />
                </div>
                <div className="header-description">
                    <h2>Description</h2>
                    <textarea value={workoutDetails?.description} onChange={() => { }} />
                </div>
            </div>
            <div className="details-main">
                <div className="main-left">
                    <form>
                        <label>Target</label>
                        <input defaultValue={workoutDetails?.target} />
                        <label>duration</label>
                        <input defaultValue={workoutDetails?.duration} contentEditable={false} />
                        <label>Level</label>
                        <input defaultValue={workoutDetails?.level} />
                    </form>
                </div>
                <div className="main-right">
                    {workoutDetails?.weeksList.map((week: any) => (
                        <Week key={week.id} weekDetails={week} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export const Create: React.FC = () => {
    const history = useHistory();

    function handleClick() {
        history.goBack()
    }

    return (
        <div className="details-container">
            <div className="close" onClick={handleClick} ></div>
            <div className="details-header">
                <div className="header-img">
                    <img src="" alt="" />
                </div>
                <div className="header-description">
                    <h2>Description</h2>
                    <textarea placeholder="Type your description here..." ></textarea>
                </div>
            </div>
            <div className="details-main">
                <div className="main-left">
                    <form>
                        <label>Target</label>
                        <input />
                        <label>duration</label>
                        <input contentEditable={false} />
                        <label>Level</label>
                        <input />
                    </form>
                </div>
                <div className="main-right">
                    {/* {details.weeksList.map((week: any) => (
                        <Week key={week._id} weekDetails={week} />
                    ))} */}
                </div>
            </div>
        </div>
    )
}