import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface WeekProps {
    classname?: string,
    title: String,
    percentage: any,
    exercises?: String[],
}

const Week: React.FC<WeekProps> = ({ classname, title, percentage, exercises }) => {
    return (
        <div className="week" >
            <h1>{title}</h1>
            <div className="progress">
                <CircularProgressbar
                    value={percentage}
                    text={`${[percentage]}%`}
                    styles={buildStyles({
                        trailColor: "#192428",
                        textColor: "#fff"
                    })}
                    strokeWidth={20}
                />
            </div>
            <div className="separator"></div>
            <div className="days">
                <span>Day 1</span>
                <button>{exercises ? exercises.length : "Add"} Exercices</button>
                <span>Day 2</span>
                <button>{exercises ? exercises.length : "Add"} Exercices</button>
                <span>Day 3</span>
                <button className="break" >Break</button>
                <span>Day 4</span>
                <button>7 Exercices</button>
                <span>Day 5</span>
                <button>9 Exercices</button>
                <span>Day 6</span>
                <button className="break" >Break</button>
                <span>Day 7</span>
                <button className="break" >Break</button>
            </div>
        </div>
    )
}

export default Week;