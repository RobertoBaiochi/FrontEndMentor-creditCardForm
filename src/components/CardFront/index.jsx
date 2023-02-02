import * as Styled from './styles';
import logoCard from '../../assets/images/card-logo.svg';

function CardFront() {
  return (
    <Styled.FrontCard>
      <Styled.FrontContainer>
        <Styled.LogoCard src={logoCard} />
        <Styled.InputNumber>0000 00000 0000 0000</Styled.InputNumber>
        <Styled.NameDateContainer>
          <Styled.InputName>Janet Appleseed</Styled.InputName>
          <Styled.InputDate>00/00</Styled.InputDate>
        </Styled.NameDateContainer>
      </Styled.FrontContainer>

    </Styled.FrontCard>
  );
}

export default CardFront;
