import Axios from 'axios';
import { urls } from './constants';

const axios = Axios.create({
    baseURL: urls.baseUrl,
    validateStatus: (status) => status < 500,
});

export const request = (config) => axios(config);
