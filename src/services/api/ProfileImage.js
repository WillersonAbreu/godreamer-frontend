import axios from 'axios';
import AxiosConfig from './config/AxiosConfig';

export default class ProfileImageService {
  static async create(data, userId) {
    try {
      const response = await axios.post(
        `/profile-image/${userId}`,
        data,
        AxiosConfig.config
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
