import axios from 'axios';
import AxiosConfig from './config/AxiosConfig';

export default class FriendshipService {
  static async index() {
    try {
      const response = await axios.get('/friendship', AxiosConfig.config);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async create(data) {
    try {
      const response = await axios.post(
        '/friendship',
        data,
        AxiosConfig.config
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async update(data) {
    try {
      const response = await axios.put('/friendship', data, AxiosConfig.config);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async delete(friendId) {
    try {
      const response = await axios.delete(
        `/friendship/${friendId}`,
        AxiosConfig.config
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
