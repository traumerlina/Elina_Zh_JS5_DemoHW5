import { types } from "../../types";

function usersAction (data) {
    return {
        type: types.GET_USERS,
        payload: data 
    }
}
export const fetchGet = () => {
    return async dispatch => {
        

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        dispatch(usersAction(data))
    } 
} 

export const getOneUser = (id) => {
    return async dispatch => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        const data = await response.json()

        dispatch(getOneUserAction(data))
    }
}

function getOneUserAction (data) {
    return {
        type: types.GET_ONE_USER,
        payload: data
    }
}