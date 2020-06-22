import axios from 'axios';
import AxiosConfig from './config/AxiosConfig';

export default class UserService {
  static async getProfileImage(userId) {
    try {
      const response = await axios.get(
        `/profile-image/${userId}`,
        AxiosConfig.config
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async create(data) {
    try {
      const response = await axios.post('/users', data, AxiosConfig.config);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
