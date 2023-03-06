import React from 'react';
import NavBar from '../components/NavBar';
import CheckoutCompletion from '../components/CheckoutCompletion';
import CheckoutDetails from '../components/CheckoutDetails';

export default function CustomerCheckout() {
  return (
    <>
      <NavBar />
      <div className="CustomerCheckout">
        <CheckoutCompletion />
        <CheckoutDetails />
      </div>
    </>
  );
}
