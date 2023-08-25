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
                        <li className="item">
                            <svg
                                class="ListIcon List__itemIcon"
                                width="22"
                                height="22"
                                viewBox="0 0 16 16"
                            >
                                <g fill="#635bff" fill-rule="evenodd">
                                    <circle
                                        opacity=".15"
                                        cx="8"
                                        cy="8"
                                        r="8"
                                    ></circle>
                                    <path d="M11.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"></path>
                                </g>
                            </svg>
                            Interchange plus pricing
                        </li>
                        <li className="item">
                            <svg
                                class="ListIcon List__itemIcon"
                                width="22"
                                height="22"
                                viewBox="0 0 16 16"
                            >
                                <g fill="#635bff" fill-rule="evenodd">
                                    <circle
                                        opacity=".15"
                                        cx="8"
                                        cy="8"
                                        r="8"
                                    ></circle>
                                    <path d="M11.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"></path>
                                </g>
                            </svg>
                            Volume discounts
                        </li>
                        <li className="item">
                            {" "}
                            <svg
                                class="ListIcon List__itemIcon"
                                width="22"
                                height="22"
                                viewBox="0 0 16 16"
                            >
                                <g fill="#635bff" fill-rule="evenodd">
                                    <circle
                                        opacity=".15"
                                        cx="8"
                                        cy="8"
                                        r="8"
                                    ></circle>
                                    <path d="M11.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"></path>
                                </g>
                            </svg>
                            Country-specific rates
                        </li>
                        <li className="item">
                            {" "}
                            <svg
                                class="ListIcon List__itemIcon"
                                width="22"
                                height="22"
                                viewBox="0 0 16 16"
                            >
                                <g fill="#635bff" fill-rule="evenodd">
                                    <circle
                                        opacity=".15"
                                        cx="8"
                                        cy="8"
                                        r="8"
                                    ></circle>
                                    <path d="M11.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"></path>
                                </g>
                            </svg>{" "}
                            Multiproduct discounts
                        </li>
                        <li className="item">
                            {" "}
                            <svg
                                class="ListIcon List__itemIcon"
                                width="22"
                                height="22"
                                viewBox="0 0 16 16"
                            >
                                <g fill="#635bff" fill-rule="evenodd">
                                    <circle
                                        opacity=".15"
                                        cx="8"
                                        cy="8"
                                        r="8"
                                    ></circle>
                                    <path d="M11.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"></path>
                                </g>
                            </svg>
                            Deployment services
                        </li>
                        <li className="item">
                            {" "}
                            <svg
                                class="ListIcon List__itemIcon"
                                width="22"
                                height="22"
                                viewBox="0 0 16 16"
                            >
                                <g fill="#635bff" fill-rule="evenodd">
                                    <circle
                                        opacity=".15"
                                        cx="8"
                                        cy="8"
                                        r="8"
                                    ></circle>
                                    <path d="M11.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"></path>
                                </g>
                            </svg>
                            Technical account management
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Recommendation;
