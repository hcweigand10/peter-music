import React, {useState, useEffect} from "react"
import API from "../utils/api"

const Existing = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [loginInfo, setLoginInfo] = useState({
        email:"",
        studentId:""
    })
    const [user, setUser] = useState({})
    
    useEffect(() => {
        const savedToken = localStorage.getItem("token")
        if (savedToken) {
            console.log()
            API.getTokenData(savedToken)
            .then(data => {
                if (data.err) {
                    console.log(data.err)
                    localStorage.removeItem("token")
                } else {
                    console.log(data)
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
        e.preventDefault()
        API.checkUrl()
        try {
        const data = await API.login(loginInfo.email, loginInfo.studentId)
        console.log(data)
        if (data.token) {
            setLoggedIn(true)
            setUser(data.user);
            localStorage.setItem("token", data.token);
        } else {
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

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })


    return (
        <div className="container page-container">
            <h3>Existing</h3>
            {loggedIn ? <div>
                <h3>Welcome back, {user.name}</h3>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Schedule a Lesoon</h3>
                        <div className="card shadow-lg">

                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3>Pay your Balance</h3>
                        <div className="card shadow-lg">
                            <h4 className="card-title">Current Balance: {formatter.format(user.balance)}</h4>
                        </div>
                    </div>
                </div>
            </div> : <div>
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
        </div>
    )
}

export default Existing