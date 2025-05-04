import { createContext, useState } from 'react';

export const ContadorContext = createContext();

export function ContadorProvider({ children }) {
   const [contador, setContador] = useState(0);

   function incrementar() {
      setContador(contador + 1);
   }

   function decrementar() {
      setContador(contador - 1);
   }

   return (
      <ContadorContext.Provider value={{ contador, incrementar, decrementar }}>
         {children}
      </ContadorContext.Provider>
   );
}
