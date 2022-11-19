import React, { useEffect } from 'react'
import { createContext, useReducer } from "react";

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            return{...state, user: action.payload}
        case 'LOGOUT':
            localStorage.clear();
            return{...state, user: null}
        default:
        return state
    }
}

export const AuthContextProvider = (prop) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })
    useEffect( () => {
      if(localStorage.getItem("user")){
        const user = JSON.parse(localStorage.getItem("user"))
        dispatch({type: 'LOGIN', payload: user})
      } 
    }, []);

    return(
        <AuthContext.Provider value={{...state, dispatch}}>
            {prop.children}
        </AuthContext.Provider>
    )
}
