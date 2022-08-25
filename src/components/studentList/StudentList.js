import React from "react";
import StudentRow from "./StudentRow";
import AddStudent from "../studentInfo/StudentInfo";
import currencyFormatter from "../../utils/currencyFormatter";

const StudentList = ({ studentsRaw, setEditStudent, setView }) => {
    const students = studentsRaw.map((student, index) => {
        return (
            <StudentRow
                student={student}
                setEditStudent={setEditStudent}
                setView={setView}
                key={index}
            />
        );
    });

    return (
        <div className="justify-content-center col-md-10 col-lg-9 mx-auto">
            <div className="card shadow-lg p-3 my-5">
                <h4>Current Students</h4>
                <div style={{ overflowX: "scroll" }}>
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
                </div>
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
            <div className="mb-4">
                <AddStudent update={false} student={null} />
            </div>
        </div>
    );
};

export default StudentList;
