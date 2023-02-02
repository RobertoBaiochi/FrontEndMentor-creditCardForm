import { FrontCard, FrontContainer, NameDateContainer } from './styles';
import logoCard from '../../assets/images/card-logo.svg';

function Cards() {
  return (
    <FrontCard>
      <FrontContainer>
        <img src={logoCard} alt="" className="logoCard"/>
        <p className='cardNumber'>0000 00000 0000 0000</p>
        <NameDateContainer>
          <p className='customerName'>Janet Appleseed</p>
          <p className='expirationDate'>00/00</p>
        </NameDateContainer>
      </FrontContainer>
    </FrontCard>

    
  );
}

export default Cards;
