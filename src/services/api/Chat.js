import axios from 'axios';
import AxiosConfig from './config/AxiosConfig';

export default class ChatService {
  static async index() {
    try {
      const response = await axios.get('/chat', AxiosConfig.config);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async getMessages(conversationId) {
    try {
      const response = await axios.get(
        `/chat/get/${conversationId}`,
        AxiosConfig.config
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async create(conversationId, data) {
    try {
      const response = await axios.post(
        `/chat/${conversationId}`,
        data,
        AxiosConfig.config
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
