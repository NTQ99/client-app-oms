import { Component, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Loading from "./components/layouts/extra/loading";

import OrderPage from "./components/pages/order";
import CreateOrderPage from "./components/pages/create-order";
import CustomerPage from "./components/pages/customer";
import ProductPage from "./components/pages/product";
import ChartPage from "./components/pages/chart";
import ErrorPage from "./components/pages/error";
import LoginPage from "./components/pages/login";
import RegisterPage from "./components/pages/register";
import ForgotPage from "./components/pages/forgot";
import DeliveryPage from "./components/pages/delivery";
import AdminUserPage from "./components/pages/admin-user";
import authHeader from "./service/auth-header";
import AuthService from './service/auth.service';
import SessionExpiredDialog from "./components/layouts/modal/SessionExpiredDialog";

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    (authHeader() && AuthService.getRoles().includes("ROLE_ADMIN"))? <AdminUserPage {...props} />
      : <Redirect to='/not-found' />
  )} />
)

class App extends Component {

  render() {
    return (
      <Router>
        {!authHeader() && localStorage.getItem("user") && <SessionExpiredDialog show={true} />}
        <Suspense fallback={<Loading />}>
          <Switch>
            <AdminRoute exact path="/admin-user" component={AdminUserPage} />
            <Route exact path="/order" component={OrderPage} />
            <Route exact path="/create-order" component={CreateOrderPage} />
            <Route exact path="/customer" component={CustomerPage} />
            <Route exact path="/product" component={ProductPage} />
            <Route exact path="/delivery" component={DeliveryPage} />
            <Route exact path="/chart" component={ChartPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/forgot" component={ForgotPage} />
            <Route exact path="/" render={() => <Redirect to='/login' />} />
            <Route exact path="/not-found" component={ErrorPage} />
            <Route render={() => <Redirect to='/not-found' />} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
