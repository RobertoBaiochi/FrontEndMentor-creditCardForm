import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import BackgroundSection from '.';

describe('<BackgroundSection />', () => {
  it('should render ', () => {
    const { container } = renderTheme(
    <BackgroundSection>
        <h1>Children</h1>
    </BackgroundSection>);

    expect(screen.getByRole('heading', { name: 'Children' })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
