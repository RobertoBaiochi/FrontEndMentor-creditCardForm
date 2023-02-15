import P from 'prop-types';
import { ButtonStyle } from './styles';

function Button({ children }) {
  return <ButtonStyle>{children}</ButtonStyle>;
}

export default Button;

Button.propTypes = {
  children: P.node.isRequired,
};
