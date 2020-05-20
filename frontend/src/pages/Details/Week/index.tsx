import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import { object } from 'yup';

interface WeekProps {
    weekDetails: any;
}

const Week: React.FC<WeekProps> = ({ weekDetails }) => {
    return (
        <div className="week" >
            <h1>{weekDetails.name}</h1>
            <div className="progress">
                <CircularProgressbar
                    value={weekDetails.percentage}
                    text={`${[weekDetails.percentage]}%`}
                    styles={buildStyles({
                        trailColor: "#192428",
                        textColor: "#fff"
                    })}
                    strokeWidth={20}
                />
            </div>
            <div className="separator"></div>
            <div className="days">
                {weekDetails.daysList.map((day: any) => (
                    <div style={{ width: '100%' }} >
                        <span style={{ width: '100%' }} >{day.name}</span>
                        <button style={{ width: '100%', marginTop: 10 }} >{day.exerciseList ? day.exerciseList.length : "Add"} Exercices</button>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Week;