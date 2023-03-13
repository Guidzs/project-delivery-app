import React from 'react';
import { Route, Switch } from 'react-router';
import CustomerProducts from '../pages/CustomerProducts';
import CustomerCheckout from '../pages/CustomerCheckout';
import CustomerOrderDetails from '../pages/CustomerOrderDetails';
import Page404 from '../pages/Page404';
import CustomerOrders from '../pages/CustomerOrders';

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
