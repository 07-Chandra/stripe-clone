import React from "react";
import "./Working.scss";
import Serve from "@/app/subcomponents/Serve/Serve";

function Working() {
    return (
        <div className="working">
            <div className="working-container">
                <div className="header">
                    <div className="heading">Working with Stripe</div>
                </div>

                <div className="support">
                    <h2 className="subheading">White glove support</h2>

                    <p className="paragraph">
                        {" "}
                        Get support from an expert technical team with deep
                        contextual knowledge of your business.
                    </p>

                    <p className="link">Learn more</p>
                </div>
                <div className="nord-security">
                    <div className="upper-part">
                        <div className="image-wrapper"></div>
                        <div className="about">
                            <div className="name">Nord</div>
                            <p className="brand">Security</p>
                        </div>
                    </div>
                    <div className="bottom-part">
                        <div className="para">
                            Enterprise Support has absolutely helped us optimize
                            processing and reduce declines. Working closely with
                            a technical account manager gives us the opportunity
                            to ask more questions and get detailed answers,
                            faster.
                        </div>
                        <div className="author">
                            <span>Kes Saulis, </span> Head of Payments
                        </div>
                    </div>
                </div>

                <div className="services">
                    <div className="left-part">
                        <h2 className="subheading">Integrate faster</h2>

                        <div className="left-cards">
                            <Serve
                                title="Professional services"
                                about=" Integrate Stripe faster and with fewer people, with the help of
                our in-house payments and financial services experts. Our team
                supports compliance of regulatory requirements and data security
                standards."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Working;
