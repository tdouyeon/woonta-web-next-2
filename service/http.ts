import axios from 'axios';
import Config from '../Config';
const api = axios.create({
  baseURL: Config.apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  transformRequest: [
    (data) => {
      return JSON.stringify(data);
    },
  ],
  transformResponse: [
    (data) => {
      return JSON.parse(data);
    },
  ],
});

api.interceptors.request.use(async (request) => {
  return request;
});

const responserHandler = (response: any) => {
  // console.log('in response interceptor', response);
  return response;
};

const errorHandler = (error: any) => {
  console.log('in error handle', error);
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log('Error', error.message);
  }
  console.log(error.config);
  throw new Error(error.response.data.message);
};
api.interceptors.response.use(responserHandler, errorHandler);

export default api;
