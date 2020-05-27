import axios from 'axios';
import AxiosConfig from './config/AxiosConfig';

export default class MetatagsService {
  static async find(data) {
    try {
      const response = await axios.post('/get-metas', data, AxiosConfig.config);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
