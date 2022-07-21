import React, {useState, useEffect} from "react"
import API from "../utils/api"
import currencyFormatter from "../utils/currencyFormatter"

const Existing = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [loading, setLoading] = useState(false)
    const [loginInfo, setLoginInfo] = useState({
        email:"",
        studentId:""
    })
    const [user, setUser] = useState({})
    
    useEffect(() => {
        const savedToken = localStorage.getItem("token")
        if (savedToken) {
            setLoading(true)
            console.log()
            API.getTokenData(savedToken)
            .then(data => {
                if (data.err) {
                    console.log(data.err)
                    setLoading(false)
                    localStorage.removeItem("token")
                } else {
                    console.log(data)
                    setLoading(false)
                    setLoggedIn(true)
                    setUser(data)
                }
            })
            .catch(err => {
                console.log("bad token")
                console.log(err);
            });
        }
    },[]);

    const login = async (e) => {
        console.log("LOGGING IN!", loginInfo)
        setLoading(true)
        e.preventDefault()
        try {
            const data = await API.login(loginInfo.email, loginInfo.studentId)
            console.log(data)
            if (data.token) {
                setLoading(false)
                setLoggedIn(true)
                setUser(data.user);
                localStorage.setItem("token", data.token);
            } else {
                setLoading(false)
                alert("Invalid Login Credentials")
                setLoginInfo({
                    email: "",
                    studentId: ""
                })
            }
        } catch (err) {
            console.log(err);
        };
    };

    // const logMeOut = ()=>{
    //     console.log("Logging out")
    //     setLoggedIn(false);
    //     localStorage.removeItem("token");
    //     setEmail("");
    //     window.location.replace('/');
    // }

    const handleInputChange = e=>{
        setLoginInfo({
        ...loginInfo,
        [e.target.name]:e.target.value
        })
    }


    return (
        <div className="container page-container">
            {loading ? 
            <div className="loading-screen">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div> : 
            <div>
                {loggedIn ? 
                <div id="user-dashboard">
                    <h3>Welcome back, {user.name}</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Schedule a Lesson</h3>
                            <div className="card shadow-lg">

                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3>Pay your Balance</h3>
                            <div className="card shadow-lg">
                                <h4 className="card-title">Current Balance: {currencyFormatter.format(user.balance)}</h4>
                            </div>
                        </div>
                    </div>
                </div> : 
                <div className="login-form">
                    <form onSubmit={login}>
                    <div className="form-group">
                    <label>Email</label>
                    <input className="input" type="text" value={loginInfo.email} onChange={handleInputChange} name="email"/>
                    </div>
                    <div  className="form-group">
                    <label>Student ID</label>
                    <input className="input" type="number" value={loginInfo.studentId} onChange={handleInputChange} name="studentId"/>
                    <button className="button" onClick={login}>Login</button>
                    </div>
                    </form>
                </div>}
            </div>}
        </div>
    )
}

export default Existing