import * as React from 'react';

import * as scale from 'd3-scale';
import * as shape from 'd3-shape';

const d3 = {
    scale,
    shape
}

document.addEventListener("load", function () {
    const getWidth = document.getElementsByClassName('card-litle-chart').length;

    console.log(getWidth)
})



const width = "100%";
const height = 100;
const rangeNumber = 728;
const verticalPadding = 5;
const getDomain = (domain: number[]) => [
    Math.min(...domain),
    Math.max(...domain)
]

interface IDataItem {
    month: Date,
    appStore: number,
    googlePlay: number,
}

const chartData: IDataItem[] = [
    { month: new Date(2020, 1, 1), appStore: 215, googlePlay: 25 },
    { month: new Date(2020, 2, 1), appStore: 150, googlePlay: 30 },
    { month: new Date(2020, 3, 1), appStore: 107, googlePlay: 20 },
    { month: new Date(2020, 4, 1), appStore: 173, googlePlay: 27 },
    { month: new Date(2020, 5, 1), appStore: 125, googlePlay: 21 },
    { month: new Date(2020, 6, 1), appStore: 185, googlePlay: 25 },
    { month: new Date(2020, 7, 1), appStore: 150, googlePlay: 30 },
    { month: new Date(2020, 8, 1), appStore: 107, googlePlay: 20 },
    { month: new Date(2020, 9, 1), appStore: 173, googlePlay: 27 },
    { month: new Date(2020, 10, 1), appStore: 125, googlePlay: 21 },
];

const scaleX = d3.scale.scaleTime().domain(getDomain(chartData.map(d => d.month) as unknown as number[])).range([0, rangeNumber]);
const scaleY = d3.scale.scaleLinear().domain(getDomain(chartData.map(d => d.appStore))).range([height - verticalPadding, verticalPadding])

const line = d3.shape.line<IDataItem>()
    .x(d => scaleX(d.month))
    .y(d => scaleY(d.appStore))
    .curve(d3.shape.curveBundle)(chartData)

const ChartComponent: React.FC = () => {
    return (
        <div style={{ width, height, marginTop: 10, overflow: "hidden" }}>
            <svg {...{ width, height }}>
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gradient">
                        <stop stopColor="rgba(20, 24, 26, 0.5)" offset="0%" />
                        <stop stopColor="rgba(20, 24, 26, 0.2)" offset="80%" />
                        <stop stopColor="transparent" offset="100%" />
                    </linearGradient>
                    <filter id="f2" x="0" y="-50%" width={width} height={height}>
                        <feDropShadow dx="0" dy="-3" stdDeviation="5" floodColor="#f15c10" />
                    </filter>
                </defs>
                <path d={`${String(line)} L ${rangeNumber} ${height} L 0 ${height}`} fill="url(#gradient)" />
                <path d={String(line)} fill="transparent" stroke="#f15c10" strokeWidth={4} filter="url(#f2)" />
            </svg>
        </div>
    );
}

export default ChartComponent;