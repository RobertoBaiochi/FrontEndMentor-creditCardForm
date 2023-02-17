import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { StatesProvider } from '../../context/StatesProvider';
import Cards from '.';


const formData = {
  cardNumber : '1234 1234 1234 1234',
  cardName : 'testing card',
  cardMouth : '03',
  cardYear : '46',
  cardCvc : '645',
}

describe('<Cards />', () => {
  it('should render logo card image', () => {
    renderTheme(
      <StatesProvider>
        <Cards>Children</Cards>
      </StatesProvider>
    );
    const image = (screen.getByAltText('logo card'))

    expect(image).toBeInTheDocument();
  });

  it('should render a card number default value', () => {
    renderTheme(
      <StatesProvider>
        <Cards>Children</Cards>
      </StatesProvider>
    );
    const cardNumber = (screen.getByRole('heading', { name : '0000 0000 0000 0000' }))

    expect(cardNumber).toBeInTheDocument();
  });

  it('should render a card number in state', () => {
    renderTheme(
      <StatesProvider>
        <Cards>Children</Cards>
      </StatesProvider>
    );
    const cardNumber = (screen.query('heading', { name : '0000 0000 0000 0000' }))

    expect(cardNumber).toBeInTheDocument();
  });
});
