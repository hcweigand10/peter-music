import React, {useEffect} from "react";
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/navbar/Navbar.js"
import Footer from "./components/footer/Footer.js"
import Home from "./pages/Home"
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
        console.log(users)
    }

    return (
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/student-portal" element={<Existing/>}/>
            <Route path="/student-portal/payment_sucess" element={<PaymentSuccess/>}/>
            <Route path="/student-portal/payment_failed" element={<PaymentFailed/>}/>
            <Route path="/admin" element={<Admin/>}/>
        </Routes>
        <Footer/>  
        </>
    )
}

export default App