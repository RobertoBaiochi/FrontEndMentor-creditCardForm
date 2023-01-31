import P from 'prop-types';
import * as Styled from './styles';
import SectionContainer from '../SectionContainer';
import { theme } from '../../styles/theme';

import bgMobile from '../../assets/images/bg-main-mobile.png';
import bgDesktop from '../../assets/images/bg-main-desktop.png';

function BackgroundSection({ children }) {
  return (
    <Styled.Container>
      <picture>
        <Styled.Source
          media={theme.media.ltMedium}
          srcSet={bgMobile}
          width='30px'
        />
        <img  src={bgDesktop} alt="background" />
      </picture>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
}

export default BackgroundSection;

BackgroundSection.propTypes = {
  children: P.node.isRequired,
};
