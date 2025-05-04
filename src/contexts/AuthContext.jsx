import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
   const [usuario, setUsuario] = useState(null);
   const [token, setToken] = useState(localStorage.getItem("token"));

   useEffect(() => {
      if (token) {
         setUsuario({ nome: "Usuário Fictício", email: "teste@email.com" });
      }
   }, [token]);

   function login() {
      const fakeToken = "fake-jwt-token-123";
      localStorage.setItem("token", fakeToken);
      setToken(fakeToken);
      setUsuario({ nome: "Usuário Fictício", email: "teste@email.com" });
   }

   function logout() {
      localStorage.removeItem("token");
      setToken(null);
      setUsuario(null);
   }

   return (
      <AuthContext.Provider value={{ usuario, login, logout }}>
         {children}
      </AuthContext.Provider>
   );
}
