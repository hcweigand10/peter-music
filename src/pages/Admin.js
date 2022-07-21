import React, { useState, useEffect } from "react";
import AdminDashboard from "../components/adminDashboard/AdminDashboard";
import API from "../utils/api";

const Admin = () => {
  const [loading, setLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    studentId: "",
  });
  const [user, setUser] = useState({});

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setLoading(true);
      console.log();
      API.getTokenData(savedToken)
        .then((data) => {
          if (data.err) {
            console.log(data.err);
            setLoading(false);
            localStorage.removeItem("token");
          } else {
            console.log(data);
            setLoading(false);
            // setLoggedIn(true)
            setUser(data);
          }
        })
        .catch((err) => {
          console.log("bad token");
          console.log(err);
        });
    }
  }, []);

  const login = async (e) => {
    console.log("LOGGING IN!", loginInfo);
    setLoading(true);
    e.preventDefault();
    try {
      const data = await API.login(loginInfo.email, loginInfo.studentId);
      console.log(data);
      if (data.token) {
        setLoading(false);
        // setLoggedIn(true)
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

  const logOut = () => {
    console.log("Logging out");
    setUser({});
    localStorage.removeItem("token");
    // window.location.replace('/');
  };

  const handleInputChange = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="">
      {loading ? (
        <div className="loading-screen container">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          {user.email ? (
            <div>
              <button className="btn btn-danger" onClick={logOut}>
                Log out
              </button>
              {user.isAdmin ? (
                <AdminDashboard setLoading={setLoading}/>
              ) : (
                <div>
                  <h3>You shouldn't be here</h3>
                </div>
              )}
            </div>
          ) : (
            <div className="login-form">
              <form onSubmit={login}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    className="input"
                    type="text"
                    value={loginInfo.email}
                    onChange={handleInputChange}
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <label>Student ID</label>
                  <input
                    className="input"
                    type="number"
                    value={loginInfo.studentId}
                    onChange={handleInputChange}
                    name="studentId"
                  />
                  <button className="button" onClick={login}>
                    Login
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Admin;
