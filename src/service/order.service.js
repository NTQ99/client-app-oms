import axios from 'axios';
import authHeader from './auth-header';

const BASE_URL = "http://localhost:8080/api";

class OrderService {

  getOrderBoard() {
    return axios({
      method: "post",
      url: BASE_URL + "/order/get",
      headers: {
        Authorization: authHeader(),
      },
    });
  }
}

export default new OrderService();