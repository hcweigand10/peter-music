import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import peterPic from "../images/peter-profile.png"

const Home = () => {
    return (
        <div>
            <div class="px-4 py-5 text-light" id="home-background">
                <div class="row flex-lg-row align-items-center g-5 py-5">
                    <div className="col-md-10 col-lg-6 text-center">
                        <img
                            className=""
                            src={peterPic}
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
                    <h2 className="text-center section-heading mb-0">About</h2>
                    <div className="d-flex justify-content-center">
                        <hr className="underline-primary" />
                    </div>
                    <div className="pt-3 h-100">
                        <h5 className="text-muted">Peter Strasser</h5>
                        <p className="plain-text">
                            I started playing piano when I was 6 years old and have been in love ever since. After high school,I attended Western Washington University and earned a degree in a music theory, and have been teaching music for the last 3 years.
                        </p>
                        <p>
                            Outside of my job, I like to spend my time outdoors and traveling. A goal of mine is road trip from Washington to southern Chile in my Winnebago one day. I just have to find a spot for my keyboard :)
                        </p>
                    </div>
                </section>
                <section className="py-4 col-xl-4">
                    <h2 className="text-center section-heading mb-0">Rates</h2>
                    <div className="d-flex justify-content-center">
                        <hr className="underline-primary" />
                    </div>
                    <h4 className="text-center">$40 per session</h4>
                    <div
                        className="row my-1 mx-auto py-3"
                        style={{ width: "320px" }}
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
                    <h2 className="text-center section-heading mb-0">
                        Contact
                    </h2>
                    <div className="d-flex justify-content-center">
                        <hr className="underline-primary" />
                    </div>
                    <div class="row justify-content-center w-100 m-0">
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
