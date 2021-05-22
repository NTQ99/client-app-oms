import axios from 'axios';
import authHeader from './auth-header';

const BASE_URL = "http://localhost:8080/api";

class DeliveryService {

  getDeliveryBoard() {
    return axios({
      method: "post",
      url: BASE_URL + "/delivery/get",
      headers: {
        Authorization: authHeader(),
      }
    });
  }

  createDelivery(data) {
    return axios({
      method: "post",
      url: BASE_URL + "/delivery/create",
      headers: {
        Authorization: authHeader(),
      },
      data: data
    });
  }

  updateDelivery(data) {
    return axios({
      method: "post",
      url: BASE_URL + "/delivery/update/" + data.id,
      headers: {
        Authorization: authHeader(),
      },
      data: data
    });
  }

  deleteDelivery(id) {
    return axios({
      method: "post",
      url: BASE_URL + "/delivery/delete/" + id,
      headers: {
        Authorization: authHeader(),
      }
    });
  }
}

export default new DeliveryService();