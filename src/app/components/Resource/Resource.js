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
                        svg={
                            <svg
                                class="BasicIcon BasicIcon--video Badge__basicIcon"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="#000000"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM11.2111 8.89443C11.4047 8.79766 11.5616 8.64074 11.6584 8.44721C11.9053 7.95323 11.7051 7.35256 11.2111 7.10557L6.44721 4.72361C6.30836 4.65418 6.15525 4.61803 6 4.61803C5.44772 4.61803 5 5.06575 5 5.61803V10.382C5 10.5372 5.03615 10.6903 5.10557 10.8292C5.35256 11.3232 5.95323 11.5234 6.44721 11.2764L11.2111 8.89443Z"
                                    fill="var(--basicIconColor)"
                                ></path>
                            </svg>
                        }
                        tag={"Online event"}
                        title={"The DNA of an Adaptive Enterprise"}
                        about={
                            "Take a deeper look at new strategies for online commerce and learn how the ability to navigate change is an enduring competitive advantage."
                        }
                        link={"See the report "}
                    />

                    <Report
                        svg={
                            <svg
                                class="BasicIcon BasicIcon--report Badge__basicIcon"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                 fill="#000000"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M2 9.5H3C3.55228 9.5 4 9.05229 4 8.5C4 7.94772 3.55228 7.5 3 7.5H2V5.5H3C3.55228 5.5 4 5.05228 4 4.5C4 3.94772 3.55228 3.5 3 3.5H2V2.5C2 1.39543 2.89543 0.5 4 0.5H14C15.1046 0.5 16 1.39543 16 2.5V14.5C16 15.6046 15.1046 16.5 14 16.5H4C2.89543 16.5 2 15.6046 2 14.5V13.5H3C3.55228 13.5 4 13.0523 4 12.5C4 11.9477 3.55228 11.5 3 11.5H2V9.5ZM0 12.5C0 11.9477 0.447715 11.5 1 11.5H2V13.5H1C0.447715 13.5 0 13.0523 0 12.5ZM0 8.5C0 7.94772 0.447715 7.5 1 7.5H2V9.5H1C0.447715 9.5 0 9.05229 0 8.5ZM0 4.5C0 3.94772 0.447715 3.5 1 3.5H2V5.5H1C0.447715 5.5 0 5.05228 0 4.5Z"
                                    fill="#4F5B76"
                                ></path>
                            </svg>
                        }
                        tag="Report"
                        title="The DNA of an Adaptive Enterprise"
                        about="Take a deeper look at new strategies for online commerce and learn how the ability to navigate change is an enduring competitive advantage."
                        link="See the report "
                    />
                    <Report
                        svg={
                            <svg
                                class="BasicIcon BasicIcon--document Badge__basicIcon"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                 fill="#000000"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 5V0H4C2.89543 0 2 0.89543 2 2V14C2 15.1046 2.89543 16 4 16H12C13.1046 16 14 15.1046 14 14V7H9C7.89543 7 7 6.10457 7 5Z"
                                    fill="var(--basicIconColor)"
                                ></path>
                                <path
                                    d="M14 5L9 0V5H14Z"
                                    fill="var(--basicIconColor)"
                                ></path>
                            </svg>
                        }
                        tag="Guide"
                        title="Guide to payments provider RFPs"
                        about="Evaluate payment providers, including overlooked capabilities and important questions to ask, and get a downloadable RFP template."
                        link="Download the guide "
                    />
                    <Report
                        svg={
                            <svg
                                class="BasicIcon BasicIcon--article Badge__basicIcon"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                 fill="#000000"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13.6296 1C14.9387 1 16 2.06125 16 3.37037V14.037C16 14.6916 15.4694 15.2222 14.8148 15.2222H2.64165C0.888889 15.2222 0 14.3666 0 12.9194C0 9.6247 0 7.31191 0 5.98108C0 3.98483 1.77778 3.37037 3.35802 3.37037C3.35802 2.06125 4.41928 1 5.7284 1H13.6296ZM6.22222 3.66667C5.7313 3.66667 5.33333 4.06464 5.33333 4.55556C5.33333 5.04648 5.7313 5.44444 6.22222 5.44444H10.6667C11.1576 5.44444 11.5556 5.04648 11.5556 4.55556C11.5556 4.06464 11.1576 3.66667 10.6667 3.66667H6.22222ZM6.22222 7.22222C5.7313 7.22222 5.33333 7.62019 5.33333 8.11111C5.33333 8.60203 5.7313 9 6.22222 9H13.3333C13.8243 9 14.2222 8.60203 14.2222 8.11111C14.2222 7.62019 13.8243 7.22222 13.3333 7.22222H6.22222ZM6.22222 10.7778C5.7313 10.7778 5.33333 11.1757 5.33333 11.6667C5.33333 12.1576 5.7313 12.5556 6.22222 12.5556H13.3333C13.8243 12.5556 14.2222 12.1576 14.2222 11.6667C14.2222 11.1757 13.8243 10.7778 13.3333 10.7778H6.22222ZM3.11111 5.44444C2.37473 5.44444 1.77778 6.0414 1.77778 6.77778V12.5556C1.77778 13.0465 2.17575 13.4444 2.66667 13.4444H3.55556V5.44444H3.11111Z"
                                    fill="var(--basicIconColor)"
                                ></path>
                            </svg>
                        }
                        tag="Article"
                        title="Stripe named a Leader in The Forrester Wave™ report on merchant payment providers"
                        about="See why Forrester recognized Stripe as a best fit for technology-forward payment teams."
                        link="Learn more "
                    />
                    <Report
                        svg={
                            <svg
                                class="BasicIcon BasicIcon--newsroom Badge__basicIcon"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                 fill="#000000"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 13V5C0 4.73478 0.105357 4.48043 0.292893 4.29289C0.48043 4.10536 0.734784 4 1 4H2V13C2 13.1326 2.05268 13.2598 2.14645 13.3536C2.24021 13.4473 2.36739 13.5 2.5 13.5C2.63261 13.5 2.75979 13.4473 2.85355 13.3536C2.94732 13.2598 3 13.1326 3 13V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H15C15.2652 2 15.5196 2.10536 15.7071 2.29289C15.8946 2.48043 16 2.73478 16 3V12C16 12.7956 15.6839 13.5587 15.1213 14.1213C14.5587 14.6839 13.7956 15 13 15H2C1.46957 15 0.960859 14.7893 0.585786 14.4142C0.210714 14.0391 0 13.5304 0 13ZM14 10H5V11H14V10ZM14 4H10V8H14V4ZM8 7H5V8H8V7ZM8 4H5V5H8V4Z"
                                    fill="var(--basicIconColor)"
                                ></path>
                            </svg>
                        }
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
