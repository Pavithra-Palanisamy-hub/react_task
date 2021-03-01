//importing constants
import { userConstants } from "../constants/users"

import { userService } from '../service/userService'

//export button component functions
export const userActions = {
    addUser,
    deleteAll,
    deleteUser,
    showPassword,
    submit,
    addCurrentUser,
    displayDB                                     
}

//action for addUser
function addUser(userCredential) {
    return dispatch => {
        userService.userDetail(userCredential)
        .then( () => {
            dispatch(success(userCredential));
            alert("Username added successfully")
        })
    }
    function success(data) { return { type: userConstants.ADD_USERS, data } }
}

//action for deleteUser
function deleteUser(userCredential) {
    return dispatch => {  
        userService.deleteUser(userCredential)
        .then( () => {
         dispatch(sucess(userCredential));
        })
    };
    function sucess(data) { return { type: userConstants.DELETE_USER, data } }
}

//action to delete all username
function deleteAll(datas) {
    return dispatch => {
        userService.deleteAllUser()
        .then(data=> {        
            dispatch(sucess(datas));
    })
    };
    function sucess(data) { return { type: userConstants.DELETE_ALL_USERS, data } }
}

function showPassword() {
    return dispatch => {
        dispatch(success());
    };
    function success(data) { return { type: userConstants.SHOW_PASSWORD, data } }
}

function submit() {
    console.log()
    return dispatch => {       
        userService.getList().then(data => {
            dispatch(db(data))           
       });
    };
    function db(data) { return { type: userConstants.SUBMIT, data } }
}

function addCurrentUser (userInfo) {
    return dispatch => {
        dispatch(success(userInfo));
    };
    function success(data) { return { type: userConstants.ADD_CURRENT_USER, data } }
}

function displayDB () {
    return dispatch => {
        userService.getUserList().then(data => dispatch(success(data)))
    };
    function success(data) { return { type: userConstants.SHOW_DB, data } }
}