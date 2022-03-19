import api from "./baseApi";

class DataSvc {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getData(token: string, params?: any) {
    if (params) {
      //return api(token).get(`${this.endpoint}?params=${params}`); - use this when backend is ready
      return api(token).get(`${this.endpoint}`);
    }
    return api(token).get(this.endpoint);
  }
  postData(data: any, token: string) {
    return api(token).post(this.endpoint, data);
  }
}

export default DataSvc;
