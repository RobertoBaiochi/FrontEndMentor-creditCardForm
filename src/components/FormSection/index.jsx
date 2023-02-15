import { useContext } from 'react';
import { StatesContext } from '../../context/StatesProvider/context';

import FormComponent from '../Form';
import ThankYou from '../ThankYou';

import { FormContainer } from './styles';

function FormSection() {
  const statesContext = useContext(StatesContext);
  const { isSubmitted } = statesContext;

  return (
    <FormContainer>
      {isSubmitted ? <ThankYou>Teste</ThankYou> : <FormComponent />}
    </FormContainer>
  );
}

export default FormSection;
