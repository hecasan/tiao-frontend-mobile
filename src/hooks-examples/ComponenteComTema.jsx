import { useContext } from 'react';
import { TemaContexto } from '../contexts/TemaContexto';

export function ComponenteComTema() {
   const tema = useContext(TemaContexto);

   return (
      <div>
         <h2>Componente com Context</h2>
         <p>Tema atual: {tema}</p>
      </div>
   );
}
