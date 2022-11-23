import React, { createContext, useReducer } from 'react';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      localStorage.clear();
      return { ...state, user: null };
      case 'AUTH_IS_READY':
        return { user: action.payload, authIsReady: true }
    default:
      return state;
  }
};

export const AuthContextProvider = (prop) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false
  });

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {prop.children}
    </AuthContext.Provider>
  );
};
