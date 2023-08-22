import React from "react";
import "./Recommentation.scss";

function Recommendation() {
    return (
        <div className="recommendation">
            <div className="recommendation-container">
                <div className="left-part">
                    <div className="subheading">
                        Get customized recommendations and pricing
                    </div>
                    <div className="paragraph">
                        Speak to an expert for tailored solutions and custom
                        pricing for your business.
                    </div>

                    <button className="btn">Contact sales</button>
                </div>
                <div className="right-part">
                    <ul className="list">
                        <li className="item">Interchange plus pricing</li>
                        <li className="item">Volume discounts</li>
                        <li className="item">Country-specific rates</li>
                        <li className="item">Multiproduct discounts</li>
                        <li className="item">Deployment services</li>
                        <li className="item">Technical account management</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Recommendation;
