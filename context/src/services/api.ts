import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: "http://servicos.cptec.inpe.br/XML"
});

export default api;