import React from "react";

const About = () => {
    return (
        <div className="container bg-light pt-4 page-container">
            <section className="row mb-4">
                <div className="col-md-6 text-center">
                    <img
                        className="mx-auto"
                        src="https://image.shutterstock.com/image-photo/studio-headshot-young-happy-european-260nw-1079314142.jpg"
                        alt="Peter Headshot"
                        style={{
                            width: "280px",
                            height: "280px",
                            borderRadius: "50%",
                            objectFit: "cover",
                        }}
                    />
                </div>
                <div className="col-md-6">
                    <div className="pt-5 h-100">
                        <h1 className="">About Me</h1>
                        <h6 className="text-muted">Peter Strasser</h6>
                        <p>
                            Aliquip aute laboris culpa consectetur est veniam
                            aute Lorem. Id cillum aute nostrud adipisicing anim
                            aliquip id voluptate nulla deserunt. Ad officia
                            velit reprehenderit ullamco voluptate proident
                            laborum occaecat mollit ullamco proident.
                        </p>
                    </div>
                </div>
            </section>
            <section className="pb-3">
            <h5 class="text-center w-responsive mx-auto mb-4">
                    Do you have any questions? Please do not hesitate to contact
                    me directly!
                </h5>
                <div class="row justify-content-center">
                    <div class="col-md-3 text-center">
                        <ul class="list-unstyled mb-0">
                            <li>
                                <i class="fas fa-map-marker-alt mt-4 fa-2x"></i>
                                <p>Friday Harbor, WA</p>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-3 text-center">
                        <ul class="list-unstyled mb-0">
                            <li>
                                <i class="fas fa-phone mt-4 fa-2x"></i>
                                <p>+1 (360) 317-3433</p>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-3 text-center">
                        <ul class="list-unstyled mb-0">
                            <li>
                                <i class="fas fa-envelope mt-4 fa-2x"></i>
                                <p>
                                    <a
                                        href="mailto:******"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        peterstrasser@gmail.com
                                    </a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            

                
            </section>

            
        </div>
    );
};

export default About;
