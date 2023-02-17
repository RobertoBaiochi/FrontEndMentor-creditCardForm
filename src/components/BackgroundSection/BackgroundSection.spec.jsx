import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import BackgroundSection from '.';
import SectionContainer from '../SectionContainer';

describe('<BackgroundSection />', () => {
  it('should render ', () => {
    renderTheme(
    <BackgroundSection>
      <SectionContainer>
        <h1>Teste</h1>
      </SectionContainer>
    </BackgroundSection>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
