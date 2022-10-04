import React, {} from "react"
import { Dropdown } from "react-bootstrap"
import {useMutation, useQueryClient} from "react-query"
import API from "../../utils/api"
import currencyFormatter from "../../utils/currencyFormatter"



const StudentRow = ({student, setEditStudent, setView}) => {

    const queryClient = useQueryClient()

    const {isLoading, mutate} = useMutation(API.deleteUser, {
        onSuccess: () => {
            queryClient.invalidateQueries("students")
        }
    })

    const removeStudent = async () => {
        if (window.confirm(`Are you sure you want to delete ${student.name}?`)) {
            mutate(student.studentId)
        }
    }

    if (isLoading) {
        return (
            <tr>
                <th>Saving Changes...</th>
            </tr>
        )
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
                            <Dropdown.Item onClick={()=>{
                                setView("update")
                                setEditStudent(student)
                            }}>
                                Edit Info / Update Balance
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