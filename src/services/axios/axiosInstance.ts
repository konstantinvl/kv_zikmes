import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://eoh1bq69fj0nfv4.m.pipedream.net',
  // baseURL: 'https://fail.m.pipedream.net', адрес для проверки отработки ошибки
  timeout: 10000,
});

//check
export default axiosInstance;
