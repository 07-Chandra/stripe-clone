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
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="320"
                            height="70"
                            fill="none"
                            class="UserLogo variant--Flat EnterpriseHubTestimonialCard__logo"
                            preserveAspectRatio="xMinYMid meet"
                            viewBox="42 0 200 40"
                        >
                            <path
                                fill="var(--userLogoColor, #383C43)"
                                d="M62.222 4c-7.644.095-14.593 4.364-18.029 11.092S41.394 29.882 45.853 36l9.71-15.724 3.493 5.947-.965-4.422 4.13-6.956 6.66 11.378-.946-4.384.927-1.582L78.572 36a20.09 20.09 0 003.84-11.836C82.47 13.091 73.438 4.057 62.223 4zm33.684 9.358V24.26h-3.282V8.44h3.783l6.949 10.33V8.44h3.282v15.82h-3.378l-7.355-10.902zm21.869-5.165c4.614 0 8.262 3.545 8.262 8.081 0 4.612-3.745 8.214-8.339 8.214s-8.281-3.583-8.281-8.138c-.019-4.536 3.745-8.157 8.358-8.157zm-.038 13.132c2.76 0 4.922-2.268 4.922-4.994 0-2.725-2.162-4.974-4.922-4.974-2.761 0-4.942 2.249-4.942 4.993 0 2.726 2.181 4.975 4.942 4.975zm19.823 2.935l-3.05-5.68h-2.413v5.68h-3.32V8.44h6.332c3.107 0 5.675 1.659 5.675 5.013 0 2.345-1.236 3.812-3.012 4.517l3.398 6.29h-3.61zm-5.463-8.71h2.761c1.235 0 2.567-.553 2.567-2.04 0-1.524-1.332-1.982-2.587-1.982h-2.741v4.022zm16.485 8.71h-4.845V8.44h4.903c5.579 0 9.053 2.917 9.053 7.872 0 4.708-3.436 7.948-9.111 7.948zm.155-12.732h-1.68v9.644h1.641c3.32 0 5.598-1.734 5.598-4.84 0-3.107-2.413-4.804-5.559-4.804zm-56.056 19.86l.772-.21c.116.59.521.972 1.139.972.52 0 .926-.286.926-.705 0-.42-.328-.648-.753-.743l-.637-.134c-.849-.171-1.312-.724-1.312-1.372 0-.839.772-1.525 1.698-1.525 1.159 0 1.641.686 1.738 1.24l-.753.228c-.097-.362-.444-.763-.985-.763-.501 0-.887.343-.887.744 0 .286.231.59.656.667l.656.114c.927.19 1.41.724 1.41 1.468 0 .743-.638 1.486-1.777 1.486-1.196.02-1.833-.762-1.891-1.467zm12.007-2.935h-2.49v1.41h2.259v.724h-2.259v1.506h2.51v.724h-3.32v-5.07h3.281v.706h.019zm4.691 1.83a2.607 2.607 0 012.625-2.63c1.448 0 2.201.971 2.374 1.658l-.791.266c-.077-.305-.425-1.181-1.602-1.181-.907 0-1.757.724-1.757 1.848 0 1.125.85 1.868 1.757 1.868 1.061 0 1.505-.838 1.602-1.2l.791.266c-.154.63-.907 1.677-2.413 1.677-1.293.02-2.586-.933-2.586-2.572zm11.871 2.591c-1.351 0-1.988-.876-1.988-2v-3.146h.81v3.107c0 .8.502 1.277 1.197 1.277.753 0 1.197-.534 1.197-1.258V27.71h.811v3.107c-.02 1.22-.676 2.058-2.027 2.058zm8.145-.076h-.811v-5.07h1.93c1.294 0 1.757.763 1.757 1.563 0 .648-.348 1.182-1.023 1.43l1.139 2.077h-.888l-1.043-1.925h-1.061v1.925zm2.046-3.488c0-.38-.174-.838-1.023-.838h-1.023v1.696h1.042c.772 0 1.004-.457 1.004-.858zm5.927 3.488v-5.07h.811v5.07h-.811zm5.653-4.326v-.743h4.073v.743h-1.64v4.326h-.811v-4.326h-1.622zm8.4-.744h.926l1.41 2.268 1.409-2.267h.926l-1.949 3.03v2.04h-.811v-2.021l-1.911-3.05z"
                            ></path>
                            <title>NordSecurity logo</title>
                        </svg>
                    </div>
                    <div className="bottom-part">
                        <div className="para">
                            "Enterprise Support has absolutely helped us
                            optimize processing and reduce declines. Working
                            closely with a technical account manager gives us
                            the opportunity to ask more questions and get
                            detailed answers, faster."
                        </div>
                        <div className="author">
                            <span>Kes Saulis, </span> Head of Payments
                        </div>
                    </div>
                </div>

                <div className="services">
                    <div className="left-part">
                        <h2 className="subheading">Integrate faster</h2>

                        <div className="text-cards">
                            <Serve
                                title="Professional services"
                                about=" Integrate Stripe faster and with fewer people, with the help of
                our in-house payments and financial services experts. Our team
                supports compliance of regulatory requirements and data security
                standards."
                            />
                            <Serve
                                title="Consulting parteners"
                                about="
      Engage a certified Stripe partner to help with strategy, implementation, deployment, global expansion, or managed services for your Stripe solution.
    "
                            />
                        </div>
                    </div>

                    <div className="left-part">
                        <div className="subheading">
                            Use Stripe with your systems
                        </div>
                        <div className="text-cards">
                            <Serve
                                color = "orange"
                                title="Connectors"
                                about=" 
      Easily integrate Stripe with your preferred ecommerce, CRM, and ERP systems for a complete view of your business and get better insights with your existing technology investments.
    "
                            />
                            <Serve
                                color ="orange"
                                title="Stripe Apps"
                                about="
      Work more efficiently with pre-built solutions from the Stripe App Marketplace or customize your own private app to share relevant contextual information across the tools you use to run your business.
    "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Working;
