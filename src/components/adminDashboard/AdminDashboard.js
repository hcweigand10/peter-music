import React, { useState, useEffect } from "react";
import StudentList from "../studentList/StudentList";
import API from "../../utils/api";
import "./adminDashboard.css";

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);
  const [viewInsights, setViewInsights] = useState(false);

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
            class={viewInsights ? "nav-link" : "nav-link active"}
            id="dashboard-tab-link-1"
            onClick={() => {setViewInsights(false)}}
          >
            <i class="fas fa-chart-pie fa-fw me-2"></i>Students
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class={viewInsights ? "nav-link active" : "nav-link"}
            id="dashboard-tab-link-2"
            onClick={() => {setViewInsights(true)}}
          >
            <i class="fas fa-chart-line fa-fw me-2"></i>Insights
          </button>
        </li>
      </ul>
      {!viewInsights ? (
        <StudentList studentsRaw={students} />
      ) : (
        <div>
          <h3>Insights</h3>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
