import React from "react";
import "./Enterprise.scss";
function Enterprise() {
    return (
        <div className="enterprise">
            <div className="enterprise-wrap">
                <div className="title-section">
                    <div className="header-section">
                        <p className="count">01/03</p>

                        <div className="btn-wrap">
                            <div className="btn">
                                <svg
                                    width="14"
                                    height="12"
                                    viewBox="0 0 14 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2 6L13 6"
                                        stroke="white"
                                        stroke-width="1.75"
                                    ></path>
                                    <path
                                        d="M6 10L2 6L6 2"
                                        stroke="white"
                                        stroke-width="1.75"
                                        stroke-linecap="square"
                                    ></path>
                                </svg>
                            </div>
                            <div className="btn">
                                <svg
                                    width="14"
                                    height="12"
                                    viewBox="0 0 14 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 6H1"
                                        stroke="white"
                                        stroke-width="1.75"
                                    ></path>
                                    <path
                                        d="M8 2L12 6L8 10"
                                        stroke="white"
                                        stroke-width="1.75"
                                        stroke-linecap="square"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="text-section">
                        <div className="title">
                            250M+
                        </div>
                        <div className="desc">API Request per day processed by Stripe</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Enterprise;
