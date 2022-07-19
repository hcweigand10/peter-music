// Local
// const BASEURL = "http://localhost:3001"

// Deployed
const BASEURL = "https://peter-strasser-music.herokuapp.com"


const API = {
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

  createUser: (email, studentId, name) => {
    return fetch(`${BASEURL}/api/users`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        studentId: studentId,
        name: name,
      }),
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