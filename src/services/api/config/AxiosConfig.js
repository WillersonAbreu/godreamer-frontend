import { GLOBAL_URL } from '../../../global/shared/config';

// Redux
import store from '~/store';
const { token } = store.getState().auth;

export default class AxiosConfig {
  static config = {
    baseURL: GLOBAL_URL,
    timeout: 20000,
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
      Authorization: token ? `Bearer ${token}` : null,
      'Content-Type': 'application/json'
    },
    responseType: 'json',
    crossDomain: true
  };
}
