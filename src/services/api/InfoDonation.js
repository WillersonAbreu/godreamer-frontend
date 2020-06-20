// Axios imports
import axios from 'axios';
import AxiosConfig from './config/AxiosConfig';

// Configs imports
import { GLOBAL_URL } from '~/global/shared/config';

// Redux
import store from '~/store';
const { token } = store.getState().auth;

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

  static async create(data, groupId) {
    try {
      const response = await axios.post(
        `/donation/info/${groupId}`,
        data,
        AxiosConfig.config
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async update(data, groupId, postId) {
    try {
      const response = await axios.put(
        `/donation/info/${groupId}/${postId}`,
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

  static async delete(postId, groupId) {
    try {
      const response = await axios.delete(
        `/donation/info/${groupId}/${postId}`,
        AxiosConfig.config
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
