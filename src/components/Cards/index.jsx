import { useContext } from 'react';
import { CardFrontContainer, CardBackContainer, CardFrontInfo, CardBackInfo } from './styles';
import logoCard from '../../assets/images/card-logo.svg'
import { StatesContext } from '../../context/StatesProvider/context';

// !state.number || state.number.length === 0 ? "0000 0000 0000 0000" : state.number
function Cards() {
  const statesContext = useContext(StatesContext);
  const {formData} = statesContext
  return (
    <>
      <CardFrontContainer>
        <CardFrontInfo>
          <img src={logoCard} alt="logo card" />
          <h3>{formData.cardNumber.length === 0 ? "0000 0000 0000 0000" : formData.cardNumber}</h3>

          <div>
            <span>{(!formData.cardName) ? 'Jane Appleseed' : formData.cardName}</span>
            <div>
              <span>{(!formData.cardMouth) ? '00' : formData.cardMouth}</span>
              <span>/</span>
              <span>{(!formData.cardYear) ? '00' : formData.cardYear}</span>
            </div>
          </div>

        </CardFrontInfo>
      </CardFrontContainer>

      <CardBackContainer>
        <CardBackInfo>
          <span>{(!formData.cardCvc) ? '000' : formData.cardCvc}</span>
        </CardBackInfo>
      </CardBackContainer>
    </>
  );
}

export default Cards;
