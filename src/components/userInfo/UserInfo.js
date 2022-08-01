import React from "react";
import { useSelector } from "react-redux";

function UserInfo () {
    const user = useSelector(state => state.userReducer)
    return (
        <div>
            <div> {user.id} </div>
            <div> {user.name} </div>
            <div> {user.email} </div>
            <div> {user.username} </div>
            <div> {user.website} </div>
            <div> {user.phone} </div>
            <div> {user.company} </div>
        </div>
        
    )
}

export default UserInfo;