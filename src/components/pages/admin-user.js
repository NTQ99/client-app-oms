import React, { Component } from "react";

import AdminContainer from "../containers/admin-container";
import AdminUserContent from "../layouts/contents/admin-user";

class AdminUserPage extends Component {
  render() {
    return (
      <AdminContainer>
        <AdminUserContent />
      </AdminContainer>
    );
  }
}

export default AdminUserPage;
