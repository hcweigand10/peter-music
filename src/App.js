import React, {useEffect} from "react";
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/navbar/Navbar.js"
import Footer from "./components/footer/Footer.js"
import Home from "./pages/Home"
import About from "./pages/About"
import Existing from "./pages/Existing"
import Admin from "./pages/Admin"
import API from "./utils/api.js";
import PaymentFailed from "./components/paymentResults/paymentFailed.js";
import PaymentSuccess from "./components/paymentResults/paymentSuccess.js";
    


const App = () => {

    useEffect(() => {
      checkUsers()
    }, [])
    
    const checkUsers = async () => {
        const users = await API.getUsers()
        console.log(users.length)
    }

    return (
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>            
            <Route path="/existing" element={<Existing/>}/>
            <Route path="/existing/payment_sucess" element={<PaymentSuccess/>}/>
            <Route path="/existing/payment_failed" element={<PaymentFailed/>}/>
            <Route path="/admin" element={<Admin/>}/>
        </Routes>
        <Footer/>  
        </>
    )
}

export default App