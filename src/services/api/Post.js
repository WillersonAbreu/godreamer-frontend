import axios from 'axios';
import AxiosConfig from './config/AxiosConfig';

export default class PostService {
  // static async index() {
  //   try {
  //     const response = await axios.get('/posts', AxiosConfig.config);
  //     return response.data;
  //   } catch (error) {
  //     return error;
  //   }
  // }

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
          baseURL: 'http://localhost:3333/',
          timeout: 20000,
          headers: {
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IldpbGxlcnNvbiIsImVtYWlsIjoid0B3LmNvbSIsImJpcnRoZGF0ZSI6IjIwMTktMDctMjlUMDA6MDA6MDAuMDAwWiIsInVzZXJfdHlwZSI6MiwiaWF0IjoxNTkxMDQxODM2LCJleHAiOjE1OTE2NDY2MzZ9.kIV48PvWav2VRBNT1DpIvaPzp4vK3cXA4fkg3QgjhHY`,
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
}
