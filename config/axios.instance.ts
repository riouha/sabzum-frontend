import axios from 'axios';
import { appConfig } from './app-config';

export const axiosInstance = axios.create({
  baseURL: appConfig.apiURL,
  headers: {},
});
