import React from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBook, faSign } from '@fortawesome/free-solid-svg-icons'


const Home = () => {
    
    return (
        <div>
            <div class="px-4 py-5 text-light" id="home-background">
                <div class="row flex-lg-row align-items-center g-5 py-5">
                    <div class="col-lg-6">
                        {/* <h1 class="display-5 fw-bold lh-1 mb-3 home-title">Peter Strasser</h1>
                        <h4 class="lead home-title">Music Instructor</h4> */}
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        </div>
                    </div>
                </div>
            </div>
            <div class="container px-4 py-5" id="featured-3">
                {/* <div class="row g-5 p-4 row-cols-1 row-cols-lg-2">
                    <div class="col">
                        <div className="col-md-8 card card-hover rounded-5 shadow-lg p-3 mx-auto" style={{height: "100%"}}>
                            <div className="mb-1 pb-0 align-items-center">
                                <div className="">
                                    <h2><FontAwesomeIcon icon={faSign}/> New Here?</h2>
                                </div>
                            </div>
                            <p>Get more information on who I am, rates, and availability on the about page. </p>
                            <a href="/about" class="btn btn-white btn-custom-effect1" id="service-1-call" >
                            More Info  
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <div className="col-md-8 card card-hover rounded-5 shadow-lg p-3 mx-auto">
                            <div className="mb-1 pb-0 align-items-center">
                                <div className="">
                                    <h2><FontAwesomeIcon icon={faBook}/> Already a Student?</h2>
                                </div>
                            </div>
                            <p>Schedule your next appointment or pay your bill using the secure student portal.</p>
                            <a href="/existing" class="btn btn-white btn-custom-effect1" id="service-1-call" >
                            Student Portal  
                            </a>
                        </div>
                    </div>
                </div> */}
                <h1 style={{fontWeight: '800'}}>Peter Strasser</h1>
                <h4 className="text-muted">Qualified Piano Instructor</h4>
                <p>I've been teaching piano in Friday Harbor for the last two years and I take students of all ages. I love what I do!</p>
            </div>
        </div>
    )
}

export default Home