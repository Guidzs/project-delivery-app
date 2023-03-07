import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import context from '../context/Context';

export default function Home() {
  const history = useHistory();
  const { setCart } = useContext(context);

  history.push('/login');
  setCart([]);

  return (
    <div>Home</div>
  );
}
