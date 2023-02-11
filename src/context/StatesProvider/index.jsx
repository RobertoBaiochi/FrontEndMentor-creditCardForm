import P from 'prop-types';
import { useMemo, useReducer } from 'react';
import { StatesContext } from './context';
import { initialState, initialValidityState } from './data';
import { formOnChangeReducer, formOnBlurReducer } from './reducer';

export function StatesProvider({ children }) {
  const [formData, dispatchFormData] = useReducer(
    formOnChangeReducer,
    initialState,
  );
  const [formValidationData, dispatchFormValidationData] = useReducer(
    formOnBlurReducer,
    initialValidityState,
  );

  const contextProviderValue = useMemo(
    () => ({
      formData,
      formValidationData,
      dispatchFormData,
      dispatchFormValidationData,
    }),
    [formData, formValidationData, dispatchFormData, dispatchFormValidationData],
  );
  return (
    <StatesContext.Provider value={contextProviderValue}>
      {children}
    </StatesContext.Provider>
  );
}

StatesProvider.propTypes = {
  children: P.node.isRequired,
};
