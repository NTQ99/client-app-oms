import axios from 'axios';
import authHeader from './auth-header';

const BASE_URL = "https://oms-2021.herokuapp.com/api";

class ProductService {

  getProductBoard() {
    return axios({
      method: "post",
      url: BASE_URL + "/product/get",
      headers: {
        Authorization: authHeader(),
      },
    });
  }
}

export default new ProductService();