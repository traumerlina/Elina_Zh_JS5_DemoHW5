import { types } from "../types";

const initialState = {
    user: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ONE_USER:
            return{...state, user: action.payload}
        default:
            return state
    }
}