import React from 'react';

const initialState = {
    isAuthorization: false,
    data:{
        email:"",
        password:"",
    },
}

export default function authorization(state = initialState, action) {
    switch (action.type) {
        case "AUTHORIZATION": {
            return {...state, isAuthorization: action.isAuthorization}
        }
        case "SET_DATA": {
            return {...state,data: action.data}
        }
        default:
            return state
    }
}

export const isAuthorizationAC = (isAuthorization) => {
    return {
        type: "AUTHORIZATION",
        isAuthorization
    }
}
export const setDataAC = ({email,password}) => {
    return {
        type: "SET_DATA",
        data:{email,password}
    }
}