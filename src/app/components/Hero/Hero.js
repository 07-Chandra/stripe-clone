import React from "react";
import "./Hero.scss";
import Payment from "../../subcomponents/Payment/Payment";

function Hero() {
    return (
        <div className="hero">
            <div className="hero-container">
                <div className="header">
                    <h1 className="title">
                        Build the next era of your{" "}
                        <span className="span">enterprise</span>
                    </h1>

                    <p className="about">
                        {" "}
                        Leading enterprises use Stripe to revolutionize their
                        business—from Amazon’s rapid expansion into global
                        markets to BMW’s reimagination of the customer
                        experience.
                    </p>

                    <button className="contact-btn">contact-sales</button>
                </div>
            </div>
            <div className="payment-gateways">
                <div className="payment-types">
                    <Payment
                        src="https://images.ctfassets.net/fzn2n1nzq965/2E3UeirctRmWaQqWvk4M75/1f5578e77cc04b6b918faaafb8eb1ab8/global-payments.png?q=80&fm=webp&w=516"
                        name="Global payments"
                        about="Enterprises from Airbnb to Unilever optimize payments with a single integration that works across 47 countries, 50+ payment methods, and 135 currencies."
                    />
                    <Payment
                        src="https://images.ctfassets.net/fzn2n1nzq965/jVhFpodASABouDOS4Ydu4/cb83f1b974c6b0e97bb4de4fbad8469c/platform-payments.png?q=80&fm=webp&w=516"
                        name="Platform payments"
                        about="
                Every type of enterprise, from Hertz to H&amp;M, can use Stripe to route funds, make payouts, and offer financial services.
              "
                    />
                    <Payment
                        src="https://images.ctfassets.net/fzn2n1nzq965/5fe3Tu61i63FfRqbr2RyaM/8479fc9e281f08b9c4e6cff90c02edb9/finance-automation.png?q=80&fm=webp&w=516"
                        name="Finance automation"
                        about="
                Companies like The Atlantic use Stripe to recover more revenue, minimize development time, and improve efficiency across their existing ERP systems.
              "
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;
