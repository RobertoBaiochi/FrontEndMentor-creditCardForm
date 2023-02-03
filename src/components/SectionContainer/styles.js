import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    max-width: 110rem;
    width: 100%
    margin-inline: auto;
    display: grid;
    align-content: center;
    grid-template-rows: 1fr;
    padding: ${theme.spacings.large};

    @media ${theme.media.mediumQueries} {
      grid-template-rows: none;
    }
  `};
`;
