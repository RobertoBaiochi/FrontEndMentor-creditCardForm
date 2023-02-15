import { useContext } from 'react';
import {ThanksContainer} from './styles';
import imgOk from '../../assets/images/icon-complete.svg'
import { ButtonStyle } from '../Button/styles';
import { StatesContext } from '../../context/StatesProvider/context';

function ThankYou() {
  const stateContext = useContext(StatesContext)
  const { setIsSubmitted } = stateContext

  const handleContinue = () => {
    setIsSubmitted(e => !e)
  }

  return (
    <ThanksContainer>
      <img src={imgOk} alt="" />

      <h3>THANK YOU</h3>
      <p>We&apos;ve added your card details</p>
      <ButtonStyle onClick={handleContinue}>Continue</ButtonStyle>

    </ThanksContainer>
  );
}

export default ThankYou;
