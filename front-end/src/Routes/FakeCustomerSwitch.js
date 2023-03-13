import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import CustomerProducts from '../pages/CustomerProducts';
import CustomerCheckout from '../pages/CustomerCheckout';
import SellerOrder from '../pages/SellerOrder';
import CustomerOrderDetails from '../pages/CustomerOrderDetails';
import SellerOrderDetails from '../pages/SellerOrderDetails';
import Page404 from '../pages/Page404';
import CustomerOrders from '../pages/CustomerOrders';
import AdminManage from '../pages/AdminManage';

function CustomerSwitch() {
  return (
    <div className="App">
      <Switch>
        <Route path="/customer/products" component={ CustomerProducts } />
        <Route path="/customer/checkout" component={ CustomerCheckout } />
        <Route path="/customer/orders/:saleId" component={ CustomerOrderDetails } />
        <Route path="/customer/orders" component={ CustomerOrders } />
        <Route component={ Page404 } />
      </Switch>
    </div>
  );
}

export default CustomerSwitch;
