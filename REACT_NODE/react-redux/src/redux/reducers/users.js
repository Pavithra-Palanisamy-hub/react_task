// import constants
import { userConstants } from "../constants/users";

// initialising state
const initialState = {
    list: [],
    isLoggedIn: false,
    currentUser: ''
}

export function userList(state = initialState, action) {

    var array = [...state.list];
    var index = array.length - 1;
    var arr_length = array.length + 1;

    switch (action.type) {

        case userConstants.SHOW_DB:
            return {
                list: action.data
            }

        case userConstants.ADD_USERS:
            console.log(action.data)
            if ((arr_length) <= 10) {
                return {
                    list: [
                        ...state.list,
                        action.data
                    ],
                    isLoggedIn: state.isLoggedIn,
                    currentUser: action.data
                }
            }
            else {
                alert("list is full")
            }
            break;

        case userConstants.DELETE_USER:
            if ((index + 1) === 0) {
                alert("list is empty")
                return {
                    list: [],
                    isLoggedIn: state.isLoggedIn,
                    currentUser: action.data
                }
            }
            else {
                
                if (action.data.userName === "") {
                    return {    
                        list: array.filter(value => value !== array[index]), 
                        isLoggedIn: state.isLoggedIn,
                        currentUser: action.data
                    }
                }
                else {
                    return {
                        list: array.filter(value => value !== action.data.userName), 
                        isLoggedIn: state.isLoggedIn,
                        currentUser: action.data
                    }
                }
            }

        case userConstants.DELETE_ALL_USERS:
            return {
                list: [],
                isLoggedIn: state.isLoggedIn,
                currentUser: action.data
            };

        case userConstants.SUBMIT:
            var isLoggedIn = false;
            var dataBaseList = action.data;
            if( state.currentUser ) {
                let targetIndex = dataBaseList.findIndex( user =>  JSON.stringify(user) === JSON.stringify(state.currentUser));
                if (targetIndex > -1){
                    isLoggedIn = true;
                    alert("login success")
                } else {
                    alert("login failed")
                }
            }
            return {
                list: state.list,
                isLoggedIn,
                currentUser: state.currentUser
            }

         
        case userConstants.ADD_CURRENT_USER:
            console.log(action.data)
            return {
                list: state.list,
                isLoggedIn: state.isLoggedIn,
                currentUser: action.data
            }

        default: {
            return state;
        }
    }
}