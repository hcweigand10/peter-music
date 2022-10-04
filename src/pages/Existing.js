import React, { useState, useEffect } from "react";

import Loading from "../components/loading/Loading";
import StudentDashboard from "../components/studentDashboard/StudentDashboard";
import LoginForm from "../components/loginForm/LoginForm";
import API from "../utils/api";

const Existing = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        studentId: "",
    });

    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        if (savedToken) {
            setLoading(true);
            API.getTokenData(savedToken)
                .then((data) => {
                    if (data.err) {
                        console.log(data.err);
                        setLoading(false);
                        localStorage.removeItem("token");
                    } else {
                        setLoading(false);
                        setLoggedIn(true);
                        setUser(data);
                    }
                })
                .catch((err) => {
                    localStorage.removeItem("token");
                    console.log("bad token");
                    setLoading(false);
                    console.log(err);
                });
        }
    }, []);

    const handleInputChange = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.value,
        });
    };

    const login = async (e) => {
        e.preventDefault();
        console.log("LOGGING IN!", loginInfo);
        setLoading(true);
        try {
            const data = await API.login(loginInfo.email, loginInfo.studentId);
            console.log(data);
            if (data.token) {
                setLoading(false);
                setLoggedIn(true);
                setUser(data.user);
                localStorage.setItem("token", data.token);
            } else {
                setLoading(false);
                alert("Invalid Login Credentials");
                setLoginInfo({
                    email: "",
                    studentId: "",
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    const logMeOut = () => {
        console.log("Logging out");
        setLoggedIn(false);
        localStorage.removeItem("token");
        setUser({});
        window.location.replace("/");
    };

    return (
        <div className="container page-container">
            {loading ? (
                <Loading/>
            ) : (
                <div>
                    {loggedIn ? (
                        <StudentDashboard student={user} logMeOut={logMeOut} />
                    ) : (
                        <LoginForm
                            login={login}
                            handleInputChange={handleInputChange}
                            loginInfo={loginInfo}
                            title={"Student Login"}
                        />
                    )}
                </div>
            )}
        </div>
    );
};


export default Existing;
