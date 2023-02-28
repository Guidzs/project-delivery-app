import React from 'react';
import { useHistory } from 'react-router';

export default function Home() {
  const history = useHistory();

  history.push('/login');

  return (
    <div>Home</div>
  );
}
