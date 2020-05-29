import axios from 'axios';
import AxiosConfig from './config/AxiosConfig';

export default class PostService {
  // static async index() {
  //   try {
  //     const response = await axios.get('/posts', AxiosConfig.config);
  //     return response.data;
  //   } catch (error) {
  //     return error;
  //   }
  // }

  static async create(data) {
    try {
      const response = await axios.post('/posts', data, AxiosConfig.config);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async update(data, postId) {
    try {
      const response = await axios.put(
        `/posts/${postId}`,
        data,
        AxiosConfig.config
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
