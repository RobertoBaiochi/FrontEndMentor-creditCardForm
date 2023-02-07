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
          <h3>{state.number.length === 0 ? "0000 0000 0000 0000" : state.number}</h3>

          <div>
            <span>{(!state.name) ? 'Jane Appleseed' : state.name}</span>
            <div>
              <span>{(!state.mouth) ? '00' : state.mouth}</span>
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
