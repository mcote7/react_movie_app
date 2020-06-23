import axios from 'axios';
import logger from './logService';
import {toast} from 'react-toastify';

axios.interceptors.response.use(null, error => {
  const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
  if(!expectedError){
    logger.log(error);
    toast('INTERCEPTOR something failed');
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
}
// in main
//import http from './services/httpService';
//import 'react-toastify/dist/ReactToastify.css';
//replace 'axios.get' with 'http.get' after import.
//can replace axios with any library...