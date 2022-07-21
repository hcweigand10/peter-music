import React from "react"
import { Dropdown } from "react-bootstrap"
import API from "../../utils/api"
import currencyFormatter from "../../utils/currencyFormatter"



const StudentRow = ({student}) => {

    const removeStudent = async () => {
        if (window.confirm(`Are you sure you want to delete ${student.name}?`)) {
            const res = await API.deleteUser(student.studentId)
            console.log(res)
            document.location.reload()
        }
    }

    return (
        <tr>
            <th scope="row">{student.name}</th>
            <td>{student.email}</td>
            <td>{student.studentId}</td>
            <td>{currencyFormatter.format(student.balance)}</td>
            <td>
                <Dropdown>
                    <Dropdown.Toggle>Actions</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>
                            Update Balance
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Edit Info
                        </Dropdown.Item>
                        <Dropdown.Item className="text-danger" onClick={() => removeStudent()}>
                            Delete Student
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </td>
        </tr>
    )
}

export default StudentRow