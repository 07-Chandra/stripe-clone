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
                    <Business
                        name=" Global business"
                        about="Enter new markets, optimize payments infrastructure, and easily add new business models and revenue streams."
                    />

                    <Business
                        name="Marketplace"
                        about="
      Join 75% of the world’s top marketplaces, who onboard service providers, manage payments, and send payouts with Stripe Connect.
    "
                    />
                    <Business
                        name="Retail and Ecommerce"
                        about="
      Get all the tools you need to accept payments online and in-person from customers around the world.
    "
                    />

                    <Business
                        name="SaaS"
                        about="
      Improve your customer experience, grow recurring revenue, and reduce costs with a single platform for payments, subscriptions, invoicing, accounting, and tax.
    "
                    />
                    <Business
                        name="Platform"
                        about="
      Facilitate multiparty payments and payouts, support customers with any business model, and offer tailored financial services to accelerate growth and revenue.
    "
                    />
                </div>
            </div>
        </div>
    );
}

export default Explore;
