import styled, { css } from 'styled-components';

export const ContainerCards = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.medium} ${theme.spacings.xsmall};
    border: 8px solid yellow;
    position: relative;
    display:grid;
    grid-template-rows: repeat(2, 1fr);
    align-content: center;
    margin: ${theme.spacings.medium} auto ;

    @media ${theme.media.mediumQueries} {
      width: 50%;
      gap: 2rem;
    }
  `};
`;
