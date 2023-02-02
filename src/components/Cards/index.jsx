import { CardFront, ContainerFront, NameDateContainer, CardBack, ContainerBack } from './styles';
import logoCard from '../../assets/images/card-logo.svg';

function Cards() {
  return (
    <>
    <CardFront>
      <ContainerFront>
        <img src={logoCard} alt="" className="logoCard"/>
        <p className='cardNumber'>0000 00000 0000 0000</p>
        <NameDateContainer>
          <p className='customerName'>Janet Appleseed</p>
          <p className='expirationDate'>00/00</p>
        </NameDateContainer>
      </ContainerFront>
    </CardFront>

    <CardBack>
      <ContainerBack>
      <p className='securtyCode'>000</p>

      </ContainerBack>
    </CardBack>

    </>
  );
}

export default Cards;
