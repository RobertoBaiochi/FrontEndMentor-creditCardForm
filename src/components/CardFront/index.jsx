import * as Styled from './styles';
import logoCard from '../../assets/images/card-logo.svg';

function CardFront() {
  return (
    <Styled.FrontCard>
      <Styled.LogoCard src={logoCard} />
      
    </Styled.FrontCard>
  );
}

export default CardFront;
