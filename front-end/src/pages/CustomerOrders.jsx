import React from 'react';
import CustomerOrdersComponent from '../components/CustomerOrdersComponent';
import NavBar from '../components/NavBar';
import './CustomerOrders.css';

export default function CustomerOrders() {
  return (
    <>
      <NavBar />
      <CustomerOrdersComponent />
    </>
  );
}
