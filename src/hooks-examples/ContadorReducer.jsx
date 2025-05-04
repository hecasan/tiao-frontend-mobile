import { useReducer } from 'react';

const estadoInicial = { contador: 0 };

function reducer(estado, acao) {
   switch (acao.tipo) {
      case 'incrementar':
         return { contador: estado.contador + 1 };
      case 'decrementar':
         return { contador: estado.contador - 1 };
      default:
         return estado;
   }
}

export function ContadorReducer() {
   const [estado, dispatch] = useReducer(reducer, estadoInicial);

   return (
      <div>
         <h2>Contador com useReducer</h2>
         <p>Valor: {estado.contador}</p>
         <button onClick={() => dispatch({ tipo: 'incrementar' })}>+</button>
         <button onClick={() => dispatch({ tipo: 'decrementar' })}>-</button>
      </div>
   );
}
