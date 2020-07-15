import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FiEye } from 'react-icons/fi';

interface WeekProps {
    weekDetails: any;
}

const Week: React.FC<WeekProps> = ({ weekDetails }) => {
    const days = weekDetails.daysList;

    return (
        <div className="week" >
            <header>
                <h3>{weekDetails.name}</h3>
            </header>

            <main>
                <div className="progress-content">
                    <div className="progress">
                        <CircularProgressbar
                            value={weekDetails.percentage}
                            text={`${[weekDetails.percentage]}%`}
                            styles={buildStyles({
                                trailColor: "transparent",
                                textColor: "#fff",
                            })}
                            strokeWidth={8}
                        />
                    </div>
                </div>
                <div className="weeks-days">
                    <div className="day">
                        <div className="day-details">
                            <button>
                                <FiEye />
                            </button>
                            <div>
                                <h5>Exercices</h5>
                                <span>{days[1].exerciseList.length}</span>
                            </div>
                        </div>
                        <div className="day-progress">
                            <CircularProgressbar
                                value={23}
                                text={"23%"}
                                styles={buildStyles({
                                    trailColor: "#1e223d",
                                })}
                                strokeWidth={8}
                            />
                        </div>
                    </div>

                    <div className="day">
                        <div className="day-details">
                            <button>
                                <FiEye />
                            </button>
                            <div>
                                <h5>Exercices</h5>
                                <span>{days[1].exerciseList.length}</span>
                            </div>
                        </div>
                        <div className="day-progress">
                            <CircularProgressbar
                                value={23}
                                text={"23%"}
                                styles={buildStyles({
                                    trailColor: "#1e223d",
                                })}
                                strokeWidth={8}
                            />
                        </div>
                    </div>

                    <div className="day">
                        <div className="day-details">
                            <button>
                                <FiEye />
                            </button>
                            <div>
                                <h5>Exercices</h5>
                                <span>{days[1].exerciseList.length}</span>
                            </div>
                        </div>
                        <div className="day-progress">
                            <CircularProgressbar
                                value={23}
                                text={"23%"}
                                styles={buildStyles({
                                    trailColor: "#1e223d",
                                })}
                                strokeWidth={8}
                            />
                        </div>
                    </div>

                    <div className="day">
                        <div className="day-details">
                            <button>
                                <FiEye />
                            </button>
                            <div>
                                <h5>Exercices</h5>
                                <span>{days[1].exerciseList.length}</span>
                            </div>
                        </div>
                        <div className="day-progress">
                            <CircularProgressbar
                                value={23}
                                text={"23%"}
                                styles={buildStyles({
                                    trailColor: "#1e223d",
                                })}
                                strokeWidth={8}
                            />
                        </div>
                    </div>


                    {/* <div style={{ width: '100%' }} >
                        <span style={{ width: '100%' }} >To</span>
                        <button style={{ width: '100%', marginTop: 10 }} >{days[1].exerciseList.length} Exercices</button>
                    </div>
                    <div style={{ width: '100%' }} >
                        <span style={{ width: '100%' }} >We</span>
                        <button style={{ width: '100%', marginTop: 10 }} > Break</button>
                    </div>
                    <div style={{ width: '100%' }} >
                        <span style={{ width: '100%' }} >Th</span>
                        <button style={{ width: '100%', marginTop: 10 }} > {days[0].exerciseList.length} Exercices</button>
                    </div>
                    <div style={{ width: '100%' }} >
                        <span style={{ width: '100%' }} >Fr</span>
                        <button style={{ width: '100%', marginTop: 10 }} > {days[1].exerciseList.length} Exercices</button>
                    </div>
                    <div style={{ width: '100%' }} >
                        <span style={{ width: '100%' }} >Sa</span>
                        <button style={{ width: '100%', marginTop: 10 }} > Break</button>
                    </div>
                    <div style={{ width: '100%' }} >
                        <span style={{ width: '100%' }} >Su</span>
                        <button style={{ width: '100%', marginTop: 10 }} > Break</button>
                    </div> */}
                </div>
            </main>

            <footer>
                <span>Segunda</span>
            </footer>
        </div>
    )
}

export default Week;