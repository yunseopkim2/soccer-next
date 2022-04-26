import { HYDRATE } from "next-redux-wrapper";
import * as T from '../types.js'

const initialState = {
    users: [],
    loginUser: null,
}

const userReducer = (state = initialState, action ) =>{
    switch (action.type) {
        case HYDRATE:
            console.log("### Error")
            return { ...state, ...action.payload }
        case T.USER_ADD_SECCESSED:
            return {...state, users: [action.payload, ...state.users]}
        
    }
}