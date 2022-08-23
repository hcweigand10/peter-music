import constants from "./constants"

const BASEURL = constants.baseUrl

const API = {
  checkUrl: () => {
    console.log(`${BASEURL}/login`)
  },
  getTokenData: (token) => {
    return fetch(`${BASEURL}/gettokendata`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
  },
  login: (email, studentId) => {
    return fetch(`${BASEURL}/login`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        studentId: studentId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
  },

  createUser: (userObj) => {
    return fetch(`${BASEURL}/api/users`, {
      method: "POST",
      body: JSON.stringify(userObj),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
  },

  updateUser: (userObj) => {
    return fetch(`${BASEURL}/api/users/${userObj.studentId}`, {
      method: "PUT",
      body: JSON.stringify(userObj),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
  },

  deleteUser: (studentId) => {
    return fetch(`${BASEURL}/api/users/${studentId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
  },

  getSingleUser: (studentId) => {
    return fetch(`${BASEURL}/api/users/${studentId}`, )
    .then(res=> res.json())
  },

  getUsers: () => {
    return fetch(`${BASEURL}/api/users`)
    .then(res => res.json())
  },
}

export default API;