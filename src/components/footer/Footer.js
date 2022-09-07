import React from "react"
import { faEnvelope, faPhone, faHome } from '@fortawesome/free-solid-svg-icons'
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./footer.css"


const Footer = () => {



    return (
        
        <footer class="footer mt-auto">
             <div class="container col-md-10 col-lg-8 col-xl-7 p-3 pb-0">
            {/* <!-- Section: Links --> */}
            <section class="">
                {/* <!--Grid row--> */}
                <div class="row">

                <hr class="w-100 clearfix d-md-none" />
                <div class="col-md-5 col-lg-5 col-xl-5 mx-auto">
                    <ul class="text-center list-unstyled align-items-center py-0">
                        <li className="mb-1"><FontAwesomeIcon icon={faHome}/> Friday Harbor, WA</li>
                        <li className="mb-1"><FontAwesomeIcon icon={faEnvelope}/> peterstrasser@gmail.com</li>
                        <li className="mb-1"><FontAwesomeIcon icon={faPhone}/> +1 (360) 317-3433</li>
                    </ul>
                </div>
                {/* <!-- Grid column --> */}
                </div>
                {/* <!--Grid row--> */}
            </section>
            {/* <!-- Section: Links --> */}
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Copyright --> */}
            <div
                class="text-center p-3"
                style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
                >
            © Made by &nbsp;
            <a class="text-white" href="https://henryweigand.com/" style={{textIndent: "10px"}}>henryweigand.com</a>
            </div>
        </footer>
    )
}


                 

export default Footer