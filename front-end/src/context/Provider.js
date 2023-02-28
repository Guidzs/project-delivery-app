import PropTypes from 'prop-types';
import { useMemo } from 'react';
import Context from './Context';

export default function Provider({ children }) {
  const myContext = useMemo(() => ({ nada: 'nada' }), []);

  return (
    <Context.Provider value={ myContext }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
