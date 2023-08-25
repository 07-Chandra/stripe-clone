import React from "react";
import "./Slider.scss";
function Slider({ type, info }) {
    return (
        <div className="slider">
            <div className="link">{type}</div>
            <p className="news-data">{info}</p>
            <svg
                className="svg"
                // viewBox="0 0 13 10"
                width="100"
                height="50"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    class="EnterpriseHubTicker__itemArrowPath EnterpriseHubTicker__itemArrowPath--initialArrow"
                    d="M11 5L7 9M11 5L7 1M11 5L0 5"
                    stroke="white"
                    stroke-width="1.75"
                ></path>
                <path
                    class="EnterpriseHubTicker__itemArrowPath EnterpriseHubTicker__itemArrowPath--hoverArrow"
                    d="M11 5L7 9M11 5L7 1M11 5L0 5"
                    stroke="white"
                    stroke-width="1.75"
                ></path>
            </svg>
        </div>
    );
}

export default Slider;
