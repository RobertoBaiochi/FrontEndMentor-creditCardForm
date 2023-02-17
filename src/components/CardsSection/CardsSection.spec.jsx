import { screen } from '@testing-library/react';
import { StatesProvider } from '../../context/StatesProvider';
import { renderTheme } from '../../styles/render-theme';
import CardSection from '.';

describe('<CardSection />', () => {
  it('should render a children component', () => {
    renderTheme(
      <StatesProvider>
       <CardSection>childre</CardSection>
      </StatesProvider>
    );

    const children = screen.getByRole('heading', { name: '0000 0000 0000 0000' })

    expect(children).toBeInTheDocument();
  });

  it('should match with snapshot', () => {
    const { container } = renderTheme(
      <StatesProvider>
        <CardSection>Children</CardSection>
      </StatesProvider>
      );

    expect(container.firstChild).toMatchSnapshot();
  });
});
