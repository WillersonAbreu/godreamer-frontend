import axios from 'axios';
import AxiosConfig from './config/AxiosConfig';

export default class PostService {
  static async index(id) {
    console.log(AxiosConfig.config);
    try {
      const response = await axios.get(`/feed/user/${id}`, AxiosConfig.config);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
