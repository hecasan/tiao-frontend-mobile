import { useEffect } from 'react';

export function FetchExemplo() {
   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer SUA_CHAVE_DE_API"
         },
         body: JSON.stringify({ texto: "Conteúdo para análise com fetch" })
      })
         .then(res => res.json())
         .then(dados => console.log("Resposta da API:", dados))
         .catch(err => console.error("Erro na API:", err));
   }, []);

   return (
      <div>
         <h2>Exemplo com fetch()</h2>
         <p>Abra o console para ver o resultado da requisição.</p>
      </div>
   );
}
