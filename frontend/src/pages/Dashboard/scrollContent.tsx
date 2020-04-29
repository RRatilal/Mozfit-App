import React, { useState, useRef } from 'react';

interface Props {
    title: String
}

const ScrollContent: React.FC<Props> = ({ title, children }) => {
    const [active, setActive] = useState("");
    const [height, setHeight] = useState("0px");

    const content = useRef(document.createElement("div"))

    function handleSlideDown() {
        setActive(active === "" ? "active" : "");
        setHeight(active === "active" ? "0px" : `${content.current.scrollHeight}px`)
    }

    return (
        <div className="painel-content">
            <button className={`painel-content-button ${active}`} onClick={handleSlideDown} >{title}</button>
            <div ref={content} className="slide-down" style={{ maxHeight: height }} >
                {children}
            </div>
        </div>
    )

}

export default ScrollContent;