import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDBCollapse } from "mdb-react-ui-kit";

const Navbar = () => {
    const [activePage, setActivePage] = useState(window.location.pathname);
    const [collapse, setCollapse] = useState(true);

    useEffect(() => {
        setActivePage(window.location.pathname);
    }, []);

    const handlePageChange = (page) => {
        setActivePage(page);
    };

    const handleCollapse = () => {
        setCollapse(!collapse);
    };

    return (
        // <!-- Navbar -->
        <nav className="navbar navbar-expand-md navbar-dark p-0 bg-dark">
            {/* <!-- Container wrapper --> */}
            <div className="container-fluid custom-nav" id="cmco">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={handleCollapse}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
                {/* <!-- Navbar brand --> */}
                <Link
                    className="navbar-brand mt-md-0 p-2"
                    to="/"
                    onClick={() => handlePageChange("/")}
                >
                    Peter Strasser
                </Link>
                {/* <!-- Collapsible wrapper --> */}
                <MDBCollapse
                    className="navbar-collapse align-items-center my-3"
                    id="navbarSupportedContent"
                    show={!collapse}
                >
                    {/* <!-- Left links --> */}
                    <ul
                        className="navbar-nav mb-md-0 mb-1"
                        style={{ fontSize: "medium" }}
                    >
                        <li className="nav-item">
                            <Link
                                className={
                                    activePage === "/"
                                        ? "nav-link custom-link-active"
                                        : "nav-link custom-link"
                                }
                                to="/"
                                onClick={() => handlePageChange("/")}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={
                                    activePage === "/about"
                                        ? "nav-link custom-link-active"
                                        : "nav-link custom-link"
                                }
                                to="/about"
                                onClick={() => handlePageChange("/about")}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={
                                    activePage === "/existing"
                                        ? "nav-link custom-link-active"
                                        : "nav-link custom-link"
                                }
                                to="/existing"
                                onClick={() => handlePageChange("/existing")}
                            >
                                Existing Students
                            </Link>
                        </li>
                    </ul>
                    {/* <!-- Left links --> */}
                </MDBCollapse>
                {/* <!-- Collapsible wrapper --> */}
            </div>
        </nav>
    );
};

export default Navbar;
