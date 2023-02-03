import { CardFrontContainer, CardBackContainer, CardFrontInfo, CardBackInfo } from './styles';
import logoCard from '../../assets/images/card-logo.svg'

function Cards() {
  return (
    <>
      <CardFrontContainer>
        <CardFrontInfo>
          <img src={logoCard} alt="" />
          <h3>0000 0000 0000 0000</h3>

          <div>
            <span>Jane Appleseed</span>
            <span>00/00</span>
          </div>

        </CardFrontInfo>
      </CardFrontContainer>

      <CardBackContainer>
        <CardBackInfo>
          <span>000</span>
        </CardBackInfo>
      </CardBackContainer>
    </>
  );
}

export default Cards;
