import P from 'prop-types';
import { useMemo, useReducer, useState } from 'react';
import { StatesContext } from './context';
import {
  initialState,
  initialValidationState,
  initialErrorMsgState,
} from './data';
import {
  formOnChangeReducer,
  formOnBlurReducer,
  errorMsgReducer,
} from './reducer';

export function StatesProvider({ children }) {
  const [formData, dispatchFormData] = useReducer(
    formOnChangeReducer,
    initialState,
  );
  const [formValidationData, dispatchFormValidationData] = useReducer(
    formOnBlurReducer,
    initialValidationState,
  );
  const [formErrorMsg, dispatchErrorMsg] = useReducer(
    errorMsgReducer,
    initialErrorMsgState,
  );

  const [isSubmitted, setIsSubmitted] = useState(false);

  const contextProviderValue = useMemo(
    () => ({
      formData,
      formValidationData,
      formErrorMsg,
      isSubmitted,
      dispatchFormData,
      dispatchFormValidationData,
      dispatchErrorMsg,
      setIsSubmitted,
    }),
    [
      formData,
      formValidationData,
      formErrorMsg,
      isSubmitted,
      dispatchFormData,
      dispatchFormValidationData,
      dispatchErrorMsg,
      setIsSubmitted,
    ],
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
