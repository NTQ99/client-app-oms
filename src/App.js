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

class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/admin-user" component={AdminUserPage} />
            <Route exact path="/order" component={OrderPage} />
            <Route exact path="/create-order" component={CreateOrderPage} />
            <Route exact path="/customer" component={CustomerPage} />
            <Route exact path="/product" component={ProductPage} />
            <Route exact path="/delivery" component={DeliveryPage} />
            <Route exact path="/chart" component={ChartPage} />
            <Route exact path="/error" component={ErrorPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/forgot" component={ForgotPage} />
            <Route exact path="/" render={() => <Redirect to='/order' />} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
