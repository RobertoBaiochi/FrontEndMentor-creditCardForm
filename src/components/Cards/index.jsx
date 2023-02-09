import { useContext } from 'react';
import { CardFrontContainer, CardBackContainer, CardFrontInfo, CardBackInfo } from './styles';
import logoCard from '../../assets/images/card-logo.svg'
import { StatesContext } from '../../context/StatesProvider/context';

// !state.number || state.number.length === 0 ? "0000 0000 0000 0000" : state.number
function Cards() {
  const statesContext = useContext(StatesContext);
  const {state} = statesContext
  return (
    <>
      <CardFrontContainer>
        <CardFrontInfo>
          <img src={logoCard} alt="" />
          <h3>{state.cardNumber.length === 0 ? "0000 0000 0000 0000" : state.cardNumber}</h3>

          <div>
            <span>{(!state.cardName) ? 'Jane Appleseed' : state.cardName}</span>
            <div>
              <span>{(!state.cardMouth) ? '00' : state.cardMouth}</span>
              <span>/</span>
              <span>{(!state.year) ? '00' : state.year}</span>
            </div>
          </div>

        </CardFrontInfo>
      </CardFrontContainer>

      <CardBackContainer>
        <CardBackInfo>
          <span>{(!state.cvc) ? '000' : state.cvc}</span>
        </CardBackInfo>
      </CardBackContainer>
    </>
  );
}

export default Cards;
