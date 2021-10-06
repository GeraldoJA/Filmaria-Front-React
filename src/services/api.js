import axios from 'axios';

// https://sujeitoprogramador.com/    (Base URL)
// r-api/?api=filmes/		          (Todos os Filmes)
// r-api/?api=filmes/123	          (Filmes com ID 123)

const api = axios.create({
  baseURL: 'https://sujeitoprogramador.com'
});

export default api;