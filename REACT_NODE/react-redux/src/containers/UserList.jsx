//import React
import React from "react"
import { useSelector } from "react-redux";

//import CSS file
import '../App.css';

//exported Userlist function
export default function UserList(props) {
    const { userList } = useSelector(states => states);
    const { list } = userList;
    console.log(list)
    return (  
        <div>
            <ol>
                {
                    list.map((data, i) => <li key={i}>{ data.userName }</li>)
                }
            </ol>
        </div>
    )
}