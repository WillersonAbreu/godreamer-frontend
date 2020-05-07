import axios from 'axios';
import AxiosConfig from './config/AxiosConfig';

export default class AuthService {
  static async login(data) {
    try {
      const response = await axios.post('/login', data, AxiosConfig.config);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
