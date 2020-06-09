// Axios imports
import axios from 'axios';
import AxiosConfig from './config/AxiosConfig';

// Configs imports
import { GLOBAL_URL } from '~/global/shared/config';

// Redux
import store from '~/store';
const { token } = store.getState().auth;

export default class PostService {
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
        AxiosConfig.changeConfig({
          baseURL: GLOBAL_URL,
          timeout: 20000,
          headers: {
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multiárt/form-data'
          },
          responseType: 'json',
          crossDomain: true
        })
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async delete(postId) {
    try {
      const response = await axios.delete(
        `/posts/${postId}`,
        AxiosConfig.config
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
