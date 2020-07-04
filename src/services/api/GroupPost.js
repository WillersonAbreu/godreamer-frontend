// Axios imports
import axios from 'axios';
import AxiosConfig from './config/AxiosConfig';

// Configs imports
import { GLOBAL_URL } from '~/global/shared/config';

// Redux
import store from '~/store';
const token = localStorage.getItem('token');

export default class GroupPostService {
  static async index(groupId) {
    try {
      const response = await axios.get(
        `/group/posts/${groupId}`,
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
        `/group/posts/${groupId}`,
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
        `/group/posts/${groupId}/${postId}`,
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
        `/group/posts/${groupId}/${postId}`,
        AxiosConfig.config
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
