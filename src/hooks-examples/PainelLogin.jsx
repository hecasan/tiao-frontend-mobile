import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export function PainelLogin() {
   const { usuario, login, logout } = useContext(AuthContext);

   return (
      <div>
         <h2>Área de Login</h2>
         {usuario ? (
            <>
               <p>Bem-vindo, {usuario.nome}</p>
               <p>Email: {usuario.email}</p>
               <button onClick={logout}>Sair</button>
            </>
         ) : (
            <>
               <p>Você não está autenticado.</p>
               <button onClick={login}>Fazer Login</button>
            </>
         )}
      </div>
   );
}
