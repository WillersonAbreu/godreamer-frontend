// Axios imports
import axios from 'axios';
import AxiosConfig from './config/AxiosConfig';

// Configs imports
import { GLOBAL_URL } from '~/global/shared/config';

// Redux
import store from '~/store';
const token = localStorage.getItem('token');

export default class DonationService {
  static async index(groupOwnerId) {
    try {
      const response = await axios.get(
        `/donation/info/${groupOwnerId}`,
        AxiosConfig.config
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async create(data) {
    try {
      const response = await axios.post(
        `/donation/info`,
        data,
        AxiosConfig.config
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async update(data, userId) {
    try {
      const response = await axios.put(
        `/donation/info/${userId}`,
        data,
        AxiosConfig.config
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async delete() {
    try {
      const response = await axios.delete(`/donation/info`, AxiosConfig.config);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
