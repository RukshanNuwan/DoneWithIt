import {create} from 'apisauce';

const client = create({
  baseURL: 'http://192.168.1.20:9000/api'
});

export default client;
