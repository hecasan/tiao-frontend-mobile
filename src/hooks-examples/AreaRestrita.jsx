import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export function AreaRestrita() {
   const { usuario } = useContext(AuthContext);

   if (!usuario) {
      return <p style={{ color: 'red' }}>⚠️ Acesso negado. Faça login para continuar.</p>;
   }

   return (
      <div>
         <h2>Área Restrita</h2>
         <p>Conteúdo exclusivo para usuários autenticados.</p>
      </div>
   );
}
