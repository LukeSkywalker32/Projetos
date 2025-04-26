import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3001/'
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  console.log('Token recuperado:', token)
  if (token) {
    config.headers.authorization = `Bearer ${token}`
    console.log('Token adicionado ao cabeçalho:', config.headers.Authorization)
  } else {
    console.warn('Nenhum token encontrado no localStorage')
  }
  return config;
})


//documentação do axios: https://axios-http.com/docs/req_config