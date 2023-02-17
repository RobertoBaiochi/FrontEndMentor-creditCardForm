import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import SectionContainer from '.';


describe('<SectionContainer />', () => {
  it('should render a children', () => {
    const { container } = renderTheme(
      <SectionContainer>
        <h1>Children</h1>
      </SectionContainer>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
