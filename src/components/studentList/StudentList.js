import React from "react";
import StudentRow from "./StudentRow";
import AddStudent from "../addStudent/AddStudent";
import currencyFormatter from "../../utils/currencyFormatter";

const StudentList = ({ studentsRaw }) => {
  const students = studentsRaw.map((student) => {
    return <StudentRow student={student} />;
  });

  return (
    <div className="justify-content-center container">
      <div className="card shadow-lg p-3 my-5">
        <h4>Current Students</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Student ID</th>
              <th scope="col">Balance</th>
            </tr>
          </thead>
          <tbody>{students}</tbody>
        </table>
        <p>Total Students: {students.length}</p>
        <p>
          Total Owed:{" "}
          {currencyFormatter.format(
            studentsRaw.reduce((prev, curr) => {
              return prev + curr.balance;
            }, 0)
          )}
        </p>
      </div>
      <AddStudent />
    </div>
  );
};

export default StudentList;
