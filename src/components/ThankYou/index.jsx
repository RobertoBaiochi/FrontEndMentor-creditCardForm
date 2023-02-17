import { useContext } from 'react';

import { StatesContext } from '../../context/StatesProvider/context';
import * as types from '../../context/StatesProvider/types';

import {ThanksContainer} from './styles';
import { ButtonStyle } from '../Button/styles';

import imgOk from '../../assets/images/icon-complete.svg';

function ThankYou() {
  const stateContext = useContext(StatesContext)
  const { setIsSubmitted, dispatchFormData, dispatchFormValidationData } = stateContext

  const handleContinue = () => {
    setIsSubmitted(e => !e)

    return (
      dispatchFormData({type: types.RESET_CARD}),
      dispatchFormValidationData({type: types.RESET_CARD_SUCCESS })
    )

  }

  return (
    <ThanksContainer>
      <img src={imgOk} alt="" />

      <h3>THANK YOU!</h3>
      <p>We&apos;ve added your card details.</p>
      <ButtonStyle onClick={handleContinue}>Continue</ButtonStyle>

    </ThanksContainer>
  );
}

export default ThankYou;
