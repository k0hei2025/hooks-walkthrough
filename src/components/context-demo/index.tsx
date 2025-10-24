import type { ReactNode } from '@tanstack/react-router';
import React, { createContext } from 'react'

type AuthContextType = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const authContextState = {
  isLoggedIn: false,
  login: () => {},
  logout: () => {}
}

const AuthContext = createContext<AuthContextType>(authContextState);



const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [isLoggedIn , setIsLoggedIn] = React.useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn , login , logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider };
export type { AuthContextType };
