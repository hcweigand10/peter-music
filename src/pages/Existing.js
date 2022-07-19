import React, {useState, useEffect} from "react"
import API from "../utils/api"

const Existing = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [email, setEmail] = useState("")

    const [loginInfo, setLoginInfo] = useState({
        email:"",
        studentId:""
    })
    
    useEffect(() => {
        console.log(token)
        const savedToken = localStorage.getItem("token")
        if (savedToken) {
            API.getTokenData(savedToken)
            .then(data => {
                if (data.err) {
                    console.log(data.err)
                    localStorage.removeItem("token")
                } else {
                    setEmail(data.email);
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
            setEmail(data.user.email);
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


    return (
        <div className="container page-container">
            <h3>Existing</h3>
            {loggedIn ? <div>
                <h3>{email}</h3>
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