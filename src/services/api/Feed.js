import axios from 'axios';
import AxiosConfig from './config/AxiosConfig';

export default class PostService {
  static async index(id) {
    try {
      const response = await axios.get(`/feed/user/${id}`, AxiosConfig.config);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async getFriends() {
    try {
      const response = await axios.get(`/feed/friends`, AxiosConfig.config);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
