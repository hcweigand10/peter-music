import React from "react"

const LoginForm = ({ login, handleInputChange, loginInfo, title }) => {
    return (
        <div className="container">
            <div className="col-11 col-sm-10 col-md-8 col-lg-7 login-form card mt-5 mx-auto">
                <form
                    className="col-sm-10 col-md-8 col-lg-5 col-xl-4 mx-auto"
                    onSubmit={login}
                >
                    <h2 className="mt-3">{title}</h2>
                    <div className="form-group my-2 mx-auto">
                        <input
                            className="input w-100"
                            type="text"
                            value={loginInfo.email}
                            onChange={handleInputChange}
                            name="email"
                            placeholder="Email"
                            style={{
                                border: "none",
                                borderBottom: "1px solid gray",
                            }}
                        />
                    </div>
                    <div className="form-group my-2 mx-auto">
                        <input
                            className="input w-100"
                            type="text"
                            value={loginInfo.studentId}
                            onChange={handleInputChange}
                            name="studentId"
                            placeholder="Student ID#"
                            style={{
                                border: "none",
                                borderBottom: "1px solid gray",
                            }}
                        />
                    </div>
                    <button
                        className="btn btn-custom-effect1 my-4"
                        onClick={login}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
