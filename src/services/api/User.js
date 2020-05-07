import axios from 'axios';
import AxiosConfig from './config/AxiosConfig';

export default class UserService {
  static async create(data) {
    try {
      const response = await axios.post('/users', data, AxiosConfig.config);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
