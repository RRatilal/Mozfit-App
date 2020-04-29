import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Week from './Week';

import './styles.css'

import WorkoutImg from '../../assets/img1.jpg';

const Details: React.FC = () => {
    return (
        <div className="details-container">
            <div className="close"></div>
            <div className="details-header">
                <div className="header-img">
                    <img src={WorkoutImg} alt="" />
                </div>
                <div className="header-description">
                    <h2>Description</h2>
                    <p>This complete beginner program can be used as a roadmap to help you build muscle the right way.</p>
                </div>
            </div>
            <div className="details-main">
                <div className="main-left">
                    <form>
                        <label>Target</label>
                        <input value="Building muscles" />
                        <label>Time</label>
                        <input value="6 weeks" contentEditable={false} />
                        <label>Level</label>
                        <input value="Beginner" />
                    </form>
                </div>
                <div className="main-right">
                    <Week classname="week" title="1 Week" percentage={10} exercises={["exerc1", "exerc2", "exerc3"]} />
                    <Week classname="week" title="2 Week" percentage={20} />
                    <Week classname="week" title="3 Week" percentage={30} exercises={["exerc1"]} />
                    <Week classname="week" title="4 Week" percentage={40} exercises={["exerc1"]} />
                    <Week classname="week" title="5 Week" percentage={50} exercises={["exerc1"]} />
                </div>
            </div>
        </div>
    )
}

export default Details;