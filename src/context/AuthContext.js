import React, { createContext, useReducer, useEffect } from 'react';
export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      console.log(action.payload);
      return { ...state, user: action.payload };
    case 'LOGOUT':
      localStorage.clear();
      return { ...state, user: null };
      case 'AUTH_IS_READY':
        return { ...state, authIsReady: true }
    default:
      return state;
  }
};

export const AuthContextProvider = (prop) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false
  });
  useEffect(() => {
    if (localStorage.getItem('user')) {
      dispatch({ type: 'LOGIN', payload: JSON.parse(localStorage.getItem('user'))});
    }
    dispatch({ type: 'AUTH_IS_READY'});
  }, []);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {prop.children}
    </AuthContext.Provider>
  );
};
