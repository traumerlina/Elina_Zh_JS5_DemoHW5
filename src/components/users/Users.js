import React from "react";
import { useDispatch } from "react-redux";
import { getOneUser } from "../../redux/actions/actions";

function Users (props) {
    const dispatch = useDispatch()

    const getOneUserFunc = (e) => {

        const {id} = e.target.dataset
        dispatch(getOneUser(id))
    }

    return (
        <ul>
            {props.users.map(user => <li key = {user.id} >{user.name} <button onClick={getOneUserFunc} data-id={user.id} >view</button> </li>)}
        </ul>
    )
}

export default Users;