import { useEffect } from 'react';
import axios from 'axios';

export function AxiosExemplo() {
   useEffect(() => {
      axios.post("https://jsonplaceholder.typicode.com/posts", {
         title: "Exemplo com axios",
         body: "Este é um teste de envio com axios.",
         userId: 1
      })
         .then(res => console.log("Resposta:", res.data))
         .catch(err => console.error("Erro:", err));
   }, []);

   return (
      <div>
         <h2>Exemplo com axios</h2>
         <p>Abra o console para ver o resultado da requisição.</p>
      </div>
   );
}
