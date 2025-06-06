import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3001/',
})

api.interceptors.request.use((config) => {


  const userData = localStorage.getItem('userInformation')
  const token = userData && JSON.parse(userData).token;

  config.headers.authorization = `Bearer ${token}`;

  return config;
})

//documentação do axios: https://axios-http.com/docs/req_config
