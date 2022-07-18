import React, {useState} from "react"

const Existing = () => {
    const [loggedIn, setloggedIn] = useState(false)


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
                <form>
                    <div class="form-outline mb-4">
                        <input type="email" id="form2Example1" class="form-control" />
                        <label class="form-label" for="form2Example1">Email address</label>
                    </div>

                    
                    <div class="form-outline mb-4">
                        <input type="password" id="form2Example2" class="form-control" />
                        <label class="form-label" for="form2Example2">Password</label>
                    </div>

                </form>
            </div>}
        </div>
    )
}

export default Existing