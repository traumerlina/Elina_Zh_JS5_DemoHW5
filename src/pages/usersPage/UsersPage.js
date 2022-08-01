import React from "react";
import {useDispatch, useSelector} from "react-redux";
import UserInfo from "../../components/userInfo/UserInfo";
import Users from "../../components/users/Users";
import { fetchGet } from "../../redux/actions/actions";


function UsersPage(props) {

    const dispatch = useDispatch();

    const users = useSelector(state => state.usersReducer.users);

    const getUsers = () => {
        dispatch(fetchGet())
    }

    return (
        <div>
            <button onClick={getUsers}>get users</button>
            <Users users={users}/>
            <UserInfo/>
        </div>
    )
}

export default UsersPage;