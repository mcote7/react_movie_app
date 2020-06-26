import axios from 'axios';
import logger from './logService';
import {toast} from 'react-toastify';

axios.defaults.baseURL = proccess.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, error => {
  const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
  if(!expectedError){
    logger.log(error);
    toast('INTERCEPTOR: error.');
  }
  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common['x-auth-token'] = jwt;
};

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};
// in main
//import http from './services/httpService';
//import 'react-toastify/dist/ReactToastify.css';
//replace 'axios.get' with 'http.get' after import.
//can replace axios with any library...