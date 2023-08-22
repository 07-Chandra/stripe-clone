import React from "react";
import "./Payment.scss";

function Payment({ src, name, about }) {
    return (
        <div className="hero-payment">
            <div className="image-wrapper">
                <img src={src} />
            </div>

            <div className="desc-wrap">
                <div className="description">
                    <h2 className="subheading">{name}</h2>
                    <p className="paragraph">{about}</p>
                </div>

                <div className="link-wrapper">
                    <p className="link">Explore</p>
                </div>
            </div>
        </div>
    );
}

export default Payment;
