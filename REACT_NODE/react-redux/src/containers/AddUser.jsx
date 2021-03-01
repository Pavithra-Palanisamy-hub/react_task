//import React
import React, { useState } from "react";

//import react-redux
import { useDispatch } from "react-redux";
import { userActions } from "../redux/actions/users";
import { useHistory } from "react-router-dom";

//import css
import '../App.css';

//import component
import TextBox from '../components/TextBox';
import Button from '../components/Button';

function AddUser() {

  //declared variable for dispatch
  const dispatch = useDispatch()

  const history = useHistory();

  // defined state variable for Usernames
  const [userName, setname] = useState('')
  const [password, setpassword] = useState('')

  //var for username and password
  let userCredential = {userName: userName, password: password}

  //function adduser to add the usernames in list
  const addUser = (data) => {
    (userCredential.userName && userCredential.password) ? (dispatch(userActions.addUser(userCredential))) : alert("enter valid name and password!")   
    setname('')
    setpassword('')
  }

  //function deleteuser to delete particular username
  const deleteUser = (data) => {
    dispatch(userActions.deleteUser(userCredential))
    setname('')
    setpassword('')
  }

  //function deleteall to delete the entire username list
  const deleteAll = () => {
    dispatch(userActions.deleteAll(''))
    setname('')
    setpassword('')
  }

  //function showpassword to toggle username
  function showPassword () {
    var userType = document.getElementById("password");
    if(userType.type === "password") {
        userType.type ="text"
    }
    else{
        userType.type="password"
    }
  }

  //submit button
  function submit (data) {
    console.log(dispatch(userActions.addCurrentUser(userCredential)))
    dispatch(userActions.submit(userCredential))
    setname('')
    setpassword('')   
  }

  //fnction to list db
  function showdb() {
    dispatch(userActions.displayDB())
    history.push('/table')
  }

  return(
    <>
    <div id="container">

      <div id="section-1">
        <form id="form-area" noValidate autoComplete="off">
          <TextBox
            id="myInput"
            label="Name"
            variant="outlined"
            value={userName}
            onChange={(e) => setname(e.target.value)}
          />
          <TextBox
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </form>
      </div>

      <div id="section-2">
        {/* button components for add user,delete user,delete all users, show password*/}
        <div className="s2-top">
          <Button onClick={addUser} name="Add"></Button>
          <Button onClick={deleteUser} name="Delete"></Button>
        </div>

        <div className="s2-middle">
          <Button onClick={deleteAll} name="Delete all"></Button>
          <Button onClick={showPassword} name="show/Hide"></Button>
        </div>

        <div className="s2-bottom">
          <Button onClick={submit} name="submit"></Button>
          <Button onClick={showdb} name="show DB"></Button>
        </div>
      </div>
    </div>
    </>
  )
}
export default AddUser;