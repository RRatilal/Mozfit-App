import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import Chart from '../../components/Chart'

import Menu from '../../components/Menu';
import TopPainel from '../../components/TopPainel';

import './styles.css'

const Home: React.FC = () => {

    return (
        <>
            <Menu />
            <div className="dashboard-main">
                <TopPainel />

                <div className="main-container">
                    <div className="main-content">
                        <div className="main-content-cards">
                            <div className="cards-left">
                                <div className="card-preview">
                                    <div className="circular-chart">
                                        <CircularProgressbar
                                            value={23}
                                            styles={buildStyles({
                                                trailColor: "transparent",
                                            })}
                                            strokeWidth={2}
                                        />

                                        <div className="inside">
                                            <CircularProgressbar
                                                value={63}
                                                styles={buildStyles({
                                                    trailColor: "transparent",
                                                })}
                                                strokeWidth={3}
                                            />
                                        </div>
                                        <div className="dot"></div>
                                    </div>
                                    <div className="circular-chart-details">
                                        <div className="monthly details" >
                                            <span>
                                                <div className="litle-circle"></div>
                                                Monthly
                                            </span>
                                            <p>24.320</p>
                                        </div>

                                        <div className="yearly details" >
                                            <span>
                                                <div className="litle-circle"></div>
                                                Yearly
                                            </span>
                                            <p>94.020</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-litle-preview">
                                    <div className="percentage">
                                        <div className="circularPro">
                                            <CircularProgressbar
                                                value={63}
                                                styles={buildStyles({
                                                    trailColor: "transparent",
                                                })}
                                                strokeWidth={20}
                                            />
                                        </div>
                                        <span>+ 63%</span>
                                    </div>
                                    <div className="details" >
                                        <div>
                                            <span>
                                                Price
                                            </span>
                                            <p>94.020</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cards-right">
                                <div className="card-litle-chart">
                                    <div className="details" >
                                        <div>
                                            <span>
                                                BTC/USD
                                            </span>
                                            <p>-0.62%</p>
                                        </div>
                                    </div>

                                    <Chart />
                                </div>
                                <div className="card-litle-days">

                                </div>
                            </div>
                        </div>
                        <div className="main-content-chart">

                        </div>
                    </div>

                    <div className="students">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;