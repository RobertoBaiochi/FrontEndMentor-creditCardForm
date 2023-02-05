import P from 'prop-types';
import { useMemo, useReducer } from 'react';
import { StatesContext } from './context';
import { data } from './data';
import { reducer } from './reducer';

export function StatesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, data);

  const contextProviderValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <StatesContext.Provider value={contextProviderValue}>
      {children}
    </StatesContext.Provider>
  );
}

StatesProvider.propTypes = {
  children: P.node.isRequired,
};
