import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useQuery } from "react-query";

import Navbar from "./components/navbar/Navbar.js";
import Footer from "./components/footer/Footer.js";
import Home from "./pages/Home";
import Existing from "./pages/Existing";
import Admin from "./pages/Admin";
import API from "./utils/api.js";
import PaymentFailed from "./components/paymentResults/paymentFailed.js";
import PaymentSuccess from "./components/paymentResults/paymentSuccess.js";

const App = () => {
    const {data,isLoading} = useQuery(["students"], API.getStudents)

    useEffect(() => {
        if (!isLoading) console.log(data.length);
    }, [isLoading, data]);

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/student-portal" element={<Existing />} />
                <Route
                    path="/student-portal/payment_sucess"
                    element={<PaymentSuccess />}
                />
                <Route
                    path="/student-portal/payment_failed"
                    element={<PaymentFailed />}
                />
                <Route path="/admin" element={<Admin />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
