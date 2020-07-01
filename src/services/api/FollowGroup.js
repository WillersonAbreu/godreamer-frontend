// Axios imports
import axios from 'axios';
import AxiosConfig from './config/AxiosConfig';

// Configs imports
import { GLOBAL_URL } from '~/global/shared/config';

// Redux
import store from '~/store';
const token = localStorage.getItem('token');

export default class FollowGroupService {
  static async followedGroups(userId) {
    try {
      const response = await axios.get(
        `/followed-groups/${userId}`,
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
        '/groups-follow',
        data,
        AxiosConfig.config
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async delete(data) {
    try {
      const response = await axios.delete(
        `/groups-unfollow/${data}`,
        AxiosConfig.config
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async update(data, postId) {
    try {
      const response = await axios.put(
        `/groups/${postId}`,
        data,
        AxiosConfig.changeConfig({
          baseURL: GLOBAL_URL,
          timeout: 20000,
          headers: {
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multirt/form-data'
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
}
