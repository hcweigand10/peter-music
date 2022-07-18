import React, { useState } from "react";
import { Link  } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Navbar = () => {
  
  const [activePage, setActivePage] = useState(window.location.pathname)
  const [collapse, setCollapse] = useState(false)

  const handlePageChange = (page) => {
    setActivePage(page)
  }

  const handleCollapse = () => {
    setCollapse(!collapse)
  }

  return (
    // <!-- Navbar -->
    <nav className="navbar navbar-expand-md navbar-dark bg-dark p-0 custom-nav">
      {/* <!-- Container wrapper --> */} 
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleCollapse}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
          {/* <!-- Navbar brand --> */}
          <Link className="navbar-brand mt-md-0 p-2" to="/" onClick={() => handlePageChange("/")}>
            Peter Strasser
          </Link>
        {/* <!-- Collapsible wrapper --> */}
        <div className={(collapse) ? "navbar-collapse" : "collapse navbar-collapse"} id="navbarSupportedContent">
          {/* <!-- Left links --> */}
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className={(activePage==="/") ? "nav-link custom-link-active" : "nav-link custom-link"} to="/" onClick={() => handlePageChange("/")}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className={(activePage==="/new") ? "nav-link custom-link-active" : "nav-link custom-link"} to="/new" onClick={() => handlePageChange("/new")}>New Students</Link>
            </li>
            <li className="nav-item">
              <Link className={(activePage==="/existing") ? "nav-link custom-link-active" : "nav-link custom-link"} to="/existing" onClick={() => handlePageChange("/existing")}>Exisiting Students</Link>
            </li>
            <li className="nav-item">
              <Link className={(activePage==="/contact") ? "nav-link custom-link-active" : "nav-link custom-link"} to="/contact" onClick={() => handlePageChange("/contact")}>Contact</Link>
            </li>
          </ul>
          {/* <!-- Left links --> */}
        </div>
        {/* <!-- Collapsible wrapper --> */}

      </div>
    </nav>

  );
}

export default Navbar;