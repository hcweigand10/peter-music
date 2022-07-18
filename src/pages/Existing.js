import React, {useState, useEffect} from "react"
import API from "../utils/api"

const Existing = () => {
    const [loggedIn, setloggedIn] = useState(false)
    const [email, setEmail] = useState("")
    const [token, setToken] = useState("");


    const [loginInfo, setLoginInfo] = useState({
        email:"",
        studentId:""
    })
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
        API.getTokenData(token)
        .then(data => {
            if (data.err) {
                console.log(data.err)
                localStorage.removeItem("token")
            } else {
                setEmail(data.email);
                setToken(token);
            }
            })
            .catch(err => {
            console.log("bad token")
            console.log(err);
            });
        }
    }, );

    const login = async (e) => {
        console.log("LOGGING IN!", loginInfo)
        e.preventDefault()
        try {
        const data = await API.login(loginInfo.email, loginInfo.studentId)
        console.log(data)
        if (data.token) {
            setloggedIn(true)
            setEmail(data.user.email);
            setToken(data.token);
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

    const logMeOut = ()=>{
        console.log("Logging out")
        loggedIn = false;
        localStorage.removeItem("token");
        setEmail("");
        setToken("");
        window.location.replace('/');
    }

    const handleInputChange = e=>{
        setLoginInfo({
        ...loginInfo,
        [e.target.name]:e.target.value
        })
    }


    return (
        <div className="container page-container">
            <h3>Existing</h3>
            {loggedIn ? <div>
                <div className="row">
                    <div className="col-6-md">
                        <h3>Schedule</h3>
                    </div>
                    <div className="col-6-md">
                        <h3>Pay</h3>
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