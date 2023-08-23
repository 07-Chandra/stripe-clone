import React from "react";
import "./Authorization.scss";

function Authorization() {
    return (
        <div className="authorization">
            <div className="authorization-container">
                <div className="header">
                    <div className="heading">
                        Boost revenue with advanced authorization optimization
                    </div>

                    <p className="paragraph">
                        Access leading authorization rates powered by direct
                        integrations with global card networks and issuing
                        banks, an extensive understanding of issuer preferences,
                        and machine learning-based products informed by billions
                        of transactions.
                    </p>
                </div>

                <div className="all-features">
                    <div className="features">
                        <div className="subheading">
                            Smart routing and revenue recovery
                        </div>

                        <p className="paragraph">
                            Mitigate revenue loss and increase auth rates by
                            50-70 bps on average with{" "}
                            <span>Adaptive Acceptance,</span> which
                            automatically identifies and executes optimal{" "}
                            <span>retry messaging</span> and smart routing
                            combinations for card payments.
                        </p>

                        <div className="link">See how</div>
                    </div>
                    <div className="features">
                        <div className="subheading">Lifecycle management</div>

                        <p className="paragraph">
                            Generate additional revenue with{" "}
                            <span>network tokens</span> and{" "}
                            <span>card account updater</span>
                            which help increase authorization rates and reduce
                            churn.
                        </p>

                        <div className="link">See how</div>
                    </div>
                    <div className="features">
                        <div className="subheading">
                            Issuer and network partnerships
                        </div>

                        <p className="paragraph">
                            Decrease fraud by up to 8% and boost authorization
                            rates by 1%-2% with a single integration via our
                            <span>Enhanced Issuer Network</span> , all while
                            reducing checkout frustration for customers.
                        </p>

                        <div className="link">Learn more</div>
                    </div>
                    <div className="features">
                        <div className="subheading">
                            Optimized authentication
                        </div>

                        <p className="paragraph">
                            Speed up checkout with customizable solutions to
                            help you meet <span>SCA requirements </span> and
                            <span>delegated authentication</span> that
                            dynamically adapts 2FA methods to suit customers'
                            preferences.
                        </p>

                        <div className="link">See how</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Authorization;
