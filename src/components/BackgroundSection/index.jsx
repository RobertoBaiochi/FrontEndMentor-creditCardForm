import P from 'prop-types';
import * as Styled from './styles';
import SectionContainer from '../SectionContainer';


function BackgroundSection({ children }) {
  return (
    <Styled.Container>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
}

export default BackgroundSection;

BackgroundSection.propTypes = {
  children: P.node.isRequired,
};
