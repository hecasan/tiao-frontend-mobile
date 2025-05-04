import { useContext } from 'react';
import { ContadorContext } from '../contexts/ContadorGlobalContext';

export function ComponenteContadorGlobal() {
   const { contador, incrementar, decrementar } = useContext(ContadorContext);

   return (
      <div>
         <h2>Contador Global com Context API</h2>
         <p>Valor: {contador}</p>
         <button onClick={incrementar}>+</button>
         <button onClick={decrementar}>-</button>
      </div>
   );
}
