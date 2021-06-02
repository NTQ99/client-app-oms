import axios from 'axios';
import authHeader from './auth-header';

const BASE_URL = process.env.REACT_APP_BASE_URL_API;

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

  getOrderHistoryOfCustomer(id) {
    return axios({
      method: "post",
      url: BASE_URL + "/order/get/customer/" + id,
      headers: {
        Authorization: authHeader(),
      },
    });
  }
}

export default new OrderService();