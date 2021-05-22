import axios from 'axios';
import authHeader from './auth-header';

const BASE_URL = "http://localhost:8080/api";

class UserService {

  getUserBoard() {
    return axios({
      method: "post",
      url: BASE_URL + "/user/get",
      headers: {
        Authorization: authHeader(),
      },
    });
  }

  updateUserStatus(id, status) {
    return axios({
      url: `${BASE_URL}/user/update/status/${id}`,
      method: 'post',
      data: {
        status: status
      },
      headers: {
        Authorization: authHeader(),
      },
    });
  }

}

export default new UserService();