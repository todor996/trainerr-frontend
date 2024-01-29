import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:8000',
});

axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export default axiosInstance;
