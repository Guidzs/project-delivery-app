import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useHistory } from 'react-router';
import Context from './Context';

export default function Provider({ children }) {
  const history = useHistory();

  const myContext = useMemo(() => ({ history }), [history]);

  return (
    <Context.Provider value={ myContext }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
