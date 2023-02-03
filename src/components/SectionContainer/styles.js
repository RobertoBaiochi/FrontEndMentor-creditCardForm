import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    max-width: 110rem;
    width: 100%
    margin-inline: auto;
    display: grid;
    align-content: center;
    grid-template-rows: repeat(2, 1fr);
    padding: ${theme.spacings.large};
    border: 1px solid yellow;
    gap: 0;

    @media ${theme.media.mediumQueries} {
      grid-template-rows: none;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }

  `};
`;
