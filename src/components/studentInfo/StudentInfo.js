import React, { useState, useEffect } from "react";
import API from "../../utils/api";

const StudentInfo = ({ update, student }) => {
    const [newUserInfo, setNewUserInfo] = useState({
        name: "",
        email: "",
        studentId: "",
        balance: 0,
    });

    useEffect(() => {
        if (update) {
            setNewUserInfo({
                name: student.name,
                email: student.email,
                studentId: student.studentId,
                balance: student.balance,
            });
        }
    }, [student, update]);

    const handleInputChange = (e) => {
        setNewUserInfo({
            ...newUserInfo,
            [e.target.name]: e.target.value,
        });
    };

    const createUser = async (e) => {
        e.preventDefault();
        if (typeof parseInt(newUserInfo.balance) != "number") {
            alert("Balance must be an integer")
            return
        }
        const res = await API.createUser(newUserInfo);
        console.log(res);
        document.location.reload();
    };

    const updateUser = async (e) => {
        e.preventDefault();
        if (student.name === newUserInfo.name && student.email === newUserInfo.email && student.studentId === newUserInfo.studentId && student.balance === newUserInfo.balance) {
            alert("No changes made")
            return
        }
        if (typeof parseInt(newUserInfo.balance) != "number") {
            alert("Balance must be an integer")
            return
        }
        const res = await API.updateUser(newUserInfo);
        console.log(res);
        document.location.reload();
    };

    return (
        <form className="card shadow-sm p-3">
            <div className="d-flex justify-content-between">
                <h4>{update ? "Update Student" : "Create New Student"}</h4>
            </div>
            <div className="form-group mb-2">
                <label htmlFor="new-student-name" style={{fontStyle: "italic", color: "gray"}}>Name</label>
                <input
                    id="new-student-name"
                    className="form-control"
                    placeholder="e.g. Joe Smith"
                    type="text"
                    value={newUserInfo.name}
                    onChange={handleInputChange}
                    name="name"
                    style={{backroundColor: "lightgray"}}
                />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="new-student-name" style={{fontStyle: "italic", color: "gray"}}>Email</label>
                <input
                    id="new-student-email"
                    className="form-control"
                    placeholder="e.g. name@email.com"
                    type="text"
                    value={newUserInfo.email}
                    onChange={handleInputChange}
                    name="email"
                />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="new-student-id" style={{fontStyle: "italic", color: "gray"}}>Student ID</label>
                <input
                    id="new-student-id"
                    className="form-control"
                    placeholder="Must be 5 digits!"
                    type="number"
                    value={newUserInfo.studentId}
                    onChange={handleInputChange}
                    name="studentId"
                />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="new-student-balance" style={{fontStyle: "italic", color: "gray"}}>Balance (in whole $)</label>
                <input
                    id="new-student-balance"
                    className="form-control"
                    placeholder="0"
                    type="number"
                    value={newUserInfo.balance}
                    onChange={handleInputChange}
                    name="balance"
                />
                <button
                    type="submit"
                    className="btn btn-primary mt-3"
                    onClick={update ? updateUser : createUser}
                >
                    {update ? "Save Changes" : "Create Student"}
                </button>
            </div>
        </form>
    );
};

export default StudentInfo;
