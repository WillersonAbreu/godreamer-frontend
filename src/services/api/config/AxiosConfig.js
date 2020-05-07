const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IldpbGxlcnNvbiIsImVtYWlsIjoid0B3LmNvbSIsImJpcnRoZGF0ZSI6IjIwMTktMDctMjlUMDA6MDA6MDAuMDAwWiIsInVzZXJfdHlwZSI6MiwiaWF0IjoxNTg4ODkyODY1LCJleHAiOjE1ODk0OTc2NjV9.SM4-JNXpnwHpkuErTQow6ZIvkVihceska5aU5hWwDAo';
export default class AxiosConfig {
  static config = {
    baseURL: 'http://127.0.0.1:3333',
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
