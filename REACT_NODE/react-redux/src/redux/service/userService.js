//import axios
import axios from 'axios';
import { useHistory } from "react-router-dom";


//API call
const userDetail = (userData) =>{
    return new Promise((resolve, reject) => {
        // console.log(req.body)
        axios.post(`http://localhost:3001/user/add`, userData)
        .then(res => {
            resolve(res.data)
        })
        .catch( err => {
            reject(err)
        })
    })   
}

const getList = () => {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3001/user/add')
        .then(res => {
            resolve(res.data)
        })
        .catch( err => {
            reject(err)
        })
    })
}

const deleteUser = (userData) => {
    const userName = userData.userName
    return new Promise((resolve,reject) => {
        axios.delete(`http://localhost:3001/${userName}`, userData)
        .then(res => {
            resolve(res.data)
        })
        .catch( err => {
            reject(err)
        })
    })
}
const deleteAllUser = () => {
    return new Promise((resolve, reject) => {
        axios.delete('http://localhost:3001/user/deleteAllUser')
        .then(res => {
            resolve(res.data)
        })
        .catch( err => {
            reject(err)
        })
    })
}

const getUserList = () => {
    
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3001/userlist')
        .then(res => {
            resolve(res.data)
            const history = useHistory();
            history.push('/list')
        })
        .catch( err => {
            reject(err)
        })
    })
}

export const userService = {
    userDetail,
    getList,
    deleteUser,
    deleteAllUser,
    getUserList
}