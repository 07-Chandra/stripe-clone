import React from "react";
import "./Resource.scss";
import Report from "@/app/subcomponents/Report/Report";
function Resource() {
    return (
        <div className="resource">
            <div className="resource-container">
                <div className="header">
                    <div className="heading">Recommended resources</div>
                    <div className="paragraph">
                        Market insights, trends, and reports to keep you on the
                        cutting edge of financial technology.
                    </div>
                </div>
                <div className="all-report">
                    <Report
                        tag={"Online event"}
                        title={"The DNA of an Adaptive Enterprise"}
                        about={
                            "Take a deeper look at new strategies for online commerce and learn how the ability to navigate change is an enduring competitive advantage."
                        }
                        link={"See the report "}
                    />

                    <Report
                        tag="Report"
                        title="The DNA of an Adaptive Enterprise"
                        about="Take a deeper look at new strategies for online commerce and learn how the ability to navigate change is an enduring competitive advantage."
                        link="See the report "
                    />
                    <Report
                        tag="Guide"
                        title="Guide to payments provider RFPs"
                        about="Evaluate payment providers, including overlooked capabilities and important questions to ask, and get a downloadable RFP template."
                        link="Download the guide "
                    />
                    <Report
                        tag="Article"
                        title="Stripe named a Leader in The Forrester Wave™ report on merchant payment providers"
                        about="See why Forrester recognized Stripe as a best fit for technology-forward payment teams."
                        link="Learn more "
                    />
                    <Report
                        tag="Story"
                        title="How digital innovation is remaking the trucking industry"
                        about="Find out why more than 6,000 trucking businesses use Stripe, collectively processing more than $2 billion in payments in just two years."
                        link="Read the story "
                    />
                </div>
            </div>
        </div>
    );
}

export default Resource;
