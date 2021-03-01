import { combineReducers } from 'redux';

// reducers
import { userList } from "../reducers/users";

// export combined reducers
export default combineReducers({
    userList
})