import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <div>
            <div class="px-4 py-5 text-light" id="home-background">
                <div class="row flex-lg-row align-items-center g-5 py-5">
                    <div className="col-md-10 col-lg-6 text-center">
                        <img
                            className=""
                            src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/70467972_3030519450298432_7694635722707304448_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=XriFcnaqKQAAX9UQOk4&_nc_ht=scontent-sea1-1.xx&oh=00_AT9VWbeq6EiGiwI1UL3WILm5LGljDY4BhT2qKnidPu15aQ&oe=63409088"
                            alt="Peter Headshot"
                            id="profile-pic"
                            style={{ objectFit: "cover", maxWidth: "65%" }}
                        />
                    </div>
                    <div class="col-lg-6">
                        <h1 class="display-5 fw-bold lh-1 mb-3 home-title">
                            Peter Strasser
                        </h1>
                        <h4 class="lead home-title">Music Instructor</h4>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start"></div>
                    </div>
                </div>
                <div class="down-arrow">
                    <span class="circle">
                        <i class="fa fa-arrow-down"></i>
                    </span>
                    <span class="pulse"></span>
                </div>
            </div>
            <div class="col-md-10 col-lg-11 row px-4 py-5 mx-auto">
                <section className="py-4 col-xl-4" id="about">
                    <h2 className="text-center section-heading mb-1">About</h2>
                    <div className="d-flex justify-content-center">
                        <hr
                            style={{ width: "60px", border: "1px solid gray" }}
                        />
                    </div>
                    <div className="pt-3 h-100">
                        <h5 className="text-muted">Peter Strasser</h5>
                        <p className="plain-text">
                            Exercitation nostrud ut tempor velit duis dolore
                            minim mollit. In consectetur dolore deserunt ut
                            consequat dolor est irure qui. Dolore ut ex et
                            voluptate ut officia ex est.
                        </p>
                        <p>
                            Cillum est duis id ad. Duis duis irure aute officia
                            et ex id mollit magna. Proident excepteur eu ex
                            cillum amet sit pariatur. Excepteur anim laborum ea
                            duis laboris deserunt.
                        </p>
                    </div>
                </section>
                <section className="py-4 col-xl-4">
                    <h2 className="text-center section-heading mb-1">Rates</h2>
                    <div className="d-flex justify-content-center">
                        <hr
                            style={{ width: "60px", border: "1px solid gray" }}
                        />
                    </div>
                    <h4 className="text-center">$40 per session</h4>
                    <div
                        className="row my-1 mx-auto p-3"
                        style={{ width: "350px" }}
                    >
                        <div className="">
                            <span style={{ float: "left" }}>
                                <FontAwesomeIcon
                                    className="me-2"
                                    icon={faCheck}
                                />
                            </span>{" "}
                            <span className="text-center d-block">
                                Up to 3 sessions per week
                            </span>
                        </div>
                        <div className="">
                            <span style={{ float: "left" }}>
                                <FontAwesomeIcon
                                    className="me-2"
                                    icon={faCheck}
                                />
                            </span>{" "}
                            <span className="text-center d-block">
                                Individualized learning plans
                            </span>
                        </div>
                        <div className="">
                            <span style={{ float: "left" }}>
                                <FontAwesomeIcon
                                    className="me-2"
                                    icon={faCheck}
                                />
                            </span>{" "}
                            <span className="text-center d-block">
                                Monthly progress evalutaions
                            </span>
                        </div>
                        <div className="">
                            <span style={{ float: "left" }}>
                                <FontAwesomeIcon
                                    className="me-2"
                                    icon={faCheck}
                                />
                            </span>{" "}
                            <span className="text-center d-block">
                                Online payment/scheduling
                            </span>
                        </div>
                    </div>
                </section>
                <section className="py-4 col-xl-4">
                    <h2 className="text-center section-heading mb-1">
                        Contact
                    </h2>
                    <div className="d-flex justify-content-center">
                        <hr
                            style={{ width: "60px", border: "1px solid gray" }}
                        />
                    </div>
                    <div class="row justify-content-center w-100">
                        <div class="col-md-6 text-center">
                            <ul class="list-unstyled mb-0">
                                <li>
                                    <i class="fas fa-phone mt-4 fa-2x"></i>
                                    <p>+1 (360) 317-3433</p>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-6 text-center">
                            <ul class="list-unstyled mb-0">
                                <li>
                                    <i class="fas fa-envelope mt-4 fa-2x"></i>
                                    <p>
                                        <a
                                            href="mailto:peterstrass39@gmail.com"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            peterstrass39@gmail.com
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
