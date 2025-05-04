import { useState } from 'react';

export function ContadorBasico() {
   const [contador, setContador] = useState(0);

   return (
      <div>
         <h2>Contador com useState</h2>
         <p>Valor atual: {contador}</p>
         <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      </div>
   );
}