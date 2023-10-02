import { createContext, useContext, useEffect, useState } from 'react';
import {
   AuthType,
   IAuthResponse,
   IAuthUserResponse,
} from '@quote-generator/shared';

interface AuthenticationContext {
   isAuthenticated: boolean;

   login: (login: string, password: string) => void;

   logout: () => void;
}

const Context = createContext<AuthenticationContext | undefined>(undefined);

export const useAuthenticationContext = () => {
   return useContext(Context);
};

export const AuthenticationProvider = ({ children }: any) => {
   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

   const getUser = async (): Promise<IAuthUserResponse | null> => {
      const response = await fetch(
         `${import.meta.env.VITE_API_URI}/auth/user`,
         { credentials: 'include' },
      );
      if (response.ok) {
         return await response.json();
      }
      return null;
   };

   const login = (login: string, password: string) => {
      if (!isAuthenticated) {
         const headers = new Headers();
         headers.append('Content-Type', 'application/json');

         fetch(`${import.meta.env.VITE_API_URI}/auth/login`, {
            method: 'POST',
            headers,
            body: JSON.stringify({ login, password }),
            credentials: 'include',
         })
            .then<IAuthResponse>((r) => r.json())
            .then((v) => setIsAuthenticated(v.type === AuthType.SUCCESS));
      }
   };

   const logout = () => {
      if (isAuthenticated) {
         fetch(`${import.meta.env.VITE_API_URI}/auth/logout`, {
            method: 'POST',
            credentials: 'include',
         })
            .then<IAuthResponse>((r) => r.json())
            .then((v) => setIsAuthenticated(v.type === AuthType.SUCCESS));
      }
   };

   useEffect(() => {
      getUser().then((u) => setIsAuthenticated(Boolean(u)));
   }, []);

   return (
      <Context.Provider value={{ isAuthenticated, login, logout }}>
         {children}
      </Context.Provider>
   );
};
