import React from 'react';
import { useHistory } from 'react-router';

export default function Page404() {
  const history = useHistory();
  return (
    <div>
      <h2>Página Não Encontrada!</h2>
      <button
        type="button"
        onClick={ () => history.push('/') }
        className="Page404-comeback-button"
      >
        Voltar à Página
      </button>
    </div>
  );
}
