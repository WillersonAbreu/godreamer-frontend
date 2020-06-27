// Axios imports
import axios from 'axios';
import AxiosConfig from './config/AxiosConfig';

// Configs imports
import { GLOBAL_URL } from '~/global/shared/config';

// Redux
import store from '~/store';
const { token } = store.getState().auth;

export default class GroupService {
  static async index() {
    try {
      const response = await axios.get('/groups', AxiosConfig.config);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async getGroupByName() {
    try {
    } catch (error) {}
  }

  static async getGroupById(groupId) {
    try {
      const response = await axios.get(
        `/groups/by-id/${groupId}`,
        AxiosConfig.config
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async myGroups(userId) {
    try {
      const response = await axios.get(
        `/feed/own/groups/${userId}`,
        AxiosConfig.config
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }

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
      const response = await axios.post('/groups', data, AxiosConfig.config);
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
        `/groups/${postId}`,
        AxiosConfig.config
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
