import React from "react";
import "./Explore.scss";
import Business from "@/app/subcomponents/Business/Business";
function Explore() {
    return (
        <div className="explore">
            <div className="explore-container">
                <div className="header">
                    <div className="heading">
                        Explore Stripe for enterprise businesses like yours
                    </div>
                </div>
                <div className="all-cards">
                    <Business />
                    <Business />
                    <Business />
                </div>
            </div>
        </div>
    );
}

export default Explore;
