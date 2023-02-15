import styled, { css } from 'styled-components';
import bgDesktop from '../../assets/images/bg-main-desktop.png';
import bgMobile from '../../assets/images/bg-main-mobile.png';

export const MainContainer = styled.main`
  ${({ theme }) => css`
    min-height: 100vh;
    margin-inline: auto;
    background-image: url(${bgMobile});
    background-position: top;
    background-repeat: no-repeat;
    background-size: 100% 33%;
    background-color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${theme.media.mediumQueries} {
      background-image: url(${bgDesktop});
      background-position: left;
      background-size: 33% 100%;
    }
  `};
`;
