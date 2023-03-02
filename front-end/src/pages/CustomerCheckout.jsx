import React from 'react';
import NavBar from '../components/NavBar';
import OrderCompletion from '../components/OrderCompletion';
import OrderDetails from '../components/OrderDetails';
import ShoppingCart from '../components/ShoppingCart';

export default function CustomerCheckout() {
  return (
    <>
      <NavBar />
      <div className="CustomerCheckout">
        <OrderCompletion />
        <OrderDetails />
      </div>
      <ShoppingCart />
    </>
  );
}
