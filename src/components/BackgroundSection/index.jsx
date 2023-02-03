import P from 'prop-types';
import { MainContainer } from './styles';
import SectionContainer from '../SectionContainer';


function BackgroundSection({ children }) {
  return (
    <MainContainer>
      <SectionContainer>{children}</SectionContainer>
    </MainContainer>
  );
}

export default BackgroundSection;

BackgroundSection.propTypes = {
  children: P.node.isRequired,
};
