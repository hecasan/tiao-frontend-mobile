import { useEffect, useState } from 'react';

export function EstadoComFeedback() {
   const [resposta, setResposta] = useState(null);
   const [carregando, setCarregando] = useState(false);
   const [erro, setErro] = useState(null);

   useEffect(() => {
      setCarregando(true);
      setErro(null);

      fetch("https://jsonplaceholder.typicode.com/posts", {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({
            title: "Teste com jsonplaceholder",
            body: "Enviando dados de exemplo",
            userId: 101
         })
      })
         .then(res => res.json())
         .then(dados => setResposta(dados))
         .catch(() => setErro("Erro ao acessar a API."))
         .finally(() => setCarregando(false));
   }, []);

   return (
      <div>
         <h2>Estado com Feedback</h2>
         {carregando && <p>⏳ Carregando...</p>}
         {erro && <p style={{ color: 'red' }}>{erro}</p>}
         {resposta && <pre>{JSON.stringify(resposta, null, 2)}</pre>}
      </div>
   );
}
