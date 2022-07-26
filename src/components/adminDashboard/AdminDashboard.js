import React, { useState, useEffect } from "react";
import StudentList from "../studentList/StudentList";
import API from "../../utils/api";
import "./adminDashboard.css";
import StudentInfo from "../studentInfo/StudentInfo";

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);
  const [view, setView] = useState("all");
  const [editStudent, setEditStudent] = useState({})

  useEffect(() => {
      const getStudents = async () => {
        let studentsRaw = await API.getUsers();
        studentsRaw = studentsRaw.users.filter((student) => {
            return !student.isAdmin;
        });
        setStudents(studentsRaw);
      };
    getStudents();
  }, []);


  console.log("dashboard");

  return (
    <div className="container-fluid" id="admin-dashboard">
      <h3>Welcome back, Peter ;)</h3>
      <ul class="nav nav-tabs mb-3" id="ex-with-icons" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class={view === "all" ? "nav-link active" : "nav-link"}
            id="dashboard-tab-link-1"
            onClick={() => {setView("all")}}
          >
            <i class="fas fa-chart-pie fa-fw me-2"></i>All Students
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class={view === "add" ? "nav-link active" : "nav-link"}
            id="dashboard-tab-link-2"
            onClick={() => {setView("add")}}
          >
            <i class="fas fa-chart-line fa-fw me-2"></i>Add New Student
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class={view === "update" ? "nav-link active" : "nav-link"}
            id="dashboard-tab-link-3"
            style={{color: "gray"}}
          >
            <i class="fas fa-chart-pie fa-fw me-2"></i>Update Student
          </button>
        </li>
      </ul>
      {view === "all" ? (
        <StudentList studentsRaw={students} setEditStudent={setEditStudent} setView={setView}/>
      ) : (null)}
      {view === "add" ? (
        <StudentInfo update={false} student={null} />
      ) : (null)}
      {view === "update" ? (
        <StudentInfo update={true} student={editStudent} />
      ) : (null)}
    </div>
  );
};

export default AdminDashboard;
