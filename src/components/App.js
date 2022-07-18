import React from "react";
import {Routes, Route} from "react-router-dom"
import Navbar from "./navbar/Navbar.js"
import Footer from "./footer/Footer.js"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import New from "../pages/New"
import Existing from "../pages/Existing"
import Admin from "../pages/Admin"
    


const App = () => {
    return (
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/new" element={<New/>}/>
            <Route path="/existing" element={<Existing/>}/>
            <Route path="/contact" element={<Contact/>}/>            
            <Route path="/admin" element={<Admin/>}/>
        </Routes>
        <Footer/>  
        </>
    )
}

export default App