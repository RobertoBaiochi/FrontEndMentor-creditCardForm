import P from 'prop-types';
import { Container } from './styles';

function SectionContainer({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default SectionContainer;

SectionContainer.propTypes = {
  children: P.node.isRequired,
};
