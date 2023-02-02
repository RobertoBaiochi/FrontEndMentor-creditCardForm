import styled, { css } from 'styled-components';
import bgDesktop from '../../assets/images/bg-main-desktop.png';
import bgMobile from '../../assets/images/bg-main-mobile.png';

export const Container = styled.main`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    margin-inline: auto;
    border: 5px solid green;
    background-image: url(${bgMobile});
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;

    @media ${theme.media.mediumQueries} {
      background-image: url(${bgDesktop});
      background-position: left;
      background-size: 40% 100%;
    }
  `};
`;
