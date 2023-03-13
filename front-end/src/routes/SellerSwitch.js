import React from 'react';
import { Route, Switch } from 'react-router';
import SellerOrder from '../pages/SellerOrder';
import SellerOrderDetails from '../pages/SellerOrderDetails';
import Page404 from '../pages/Page404';

function SellerSwitch() {
  return (
    <div className="Seller-Switch">
      <Switch>
        <Route path="/seller/orders/:saleId" component={ SellerOrderDetails } />
        <Route exact path="/seller/orders" component={ SellerOrder } />
        <Route component={ Page404 } />
      </Switch>
    </div>
  );
}

export default SellerSwitch;
