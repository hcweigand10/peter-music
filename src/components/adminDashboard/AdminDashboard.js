import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

import StudentList from "../studentList/StudentList";
import API from "../../utils/api";
import "./adminDashboard.css";
import StudentInfo from "../studentInfo/StudentInfo";
import Loading from "../loading/Loading";

const AdminDashboard = ({ logOut }) => {
    const [view, setView] = useState("all");
    const [editStudent, setEditStudent] = useState({});
   
    const { data: students, isLoading } = useQuery(["students"], API.getStudents);

    useEffect(() => {
        if (!isLoading) setEditStudent(students[0]);
    }, [isLoading, students]);


    return (
        <div className="container-fluid mt-5" id="admin-dashboard">
            <div className="d-flex justify-content-between">
                <h3>Welcome back, Peter ;)</h3>
                <button className="btn btn-danger" onClick={logOut}>
                    Log out
                </button>
            </div>
            {isLoading ? (
                <Loading />
            ) : (
                <div>
                    <ul
                        class="nav nav-tabs mb-3"
                        id="ex-with-icons"
                        role="tablist"
                    >
                        <li class="nav-item" role="presentation">
                            <button
                                class={
                                    view === "all"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                id="dashboard-tab-link-1"
                                onClick={() => {
                                    setView("all");
                                }}
                            >
                                <i class="fas fa-chart-pie fa-fw me-2"></i>All
                                Students
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button
                                class={
                                    view === "add"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                id="dashboard-tab-link-2"
                                onClick={() => {
                                    setView("add");
                                }}
                            >
                                <i class="fas fa-chart-line fa-fw me-2"></i>Add
                                New Student
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button
                                class={
                                    view === "update"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                id="dashboard-tab-link-3"
                                onClick={() => {
                                    setView("update");
                                }}
                            >
                                <i class="fas fa-chart-pie fa-fw me-2"></i>
                                Update Student
                            </button>
                        </li>
                    </ul>
            {view === "all" ? (
                <StudentList
                studentsRaw={students}
                setEditStudent={setEditStudent}
                setView={setView}
                />
                ) : null}
            {view === "add" ? (
                <StudentInfo update={false} student={null} />
                ) : null}
            {view === "update" ? (
                <StudentInfo update={true} student={editStudent} />
                ) : null}
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
