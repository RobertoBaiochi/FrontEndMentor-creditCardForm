import P from 'prop-types';
import { MainContainer } from './styles';

function BackgroundSection({ children }) {
  return (
    <MainContainer>
      {children}
    </MainContainer>
  );
}

export default BackgroundSection;

BackgroundSection.propTypes = {
  children: P.node.isRequired,
};
