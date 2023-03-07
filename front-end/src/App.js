import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomerProducts from './pages/CustomerProducts';
import CustomerCheckout from './pages/CustomerCheckout';
import SellerOrder from './pages/SellerOrder';
import CustomerOrderDetails from './pages/CustomerOrderDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/customer/products" component={ CustomerProducts } />
        <Route path="/customer/checkout" component={ CustomerCheckout } />
        <Route path="/customer/orders/:saleId" component={ CustomerOrderDetails } />
        <Route path="/seller/orders" component={ SellerOrder } />
      </Switch>
    </div>
  );
}

export default App;
