import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    max-width: 110rem;
    width: 100%
    margin-inline: auto;
    display: grid;
    align-content: center;
    grid-template-rows: 1fr 2fr;
    padding: ${theme.spacings.medium} ${theme.spacings.small};
    border: 5px solid red;

    @media ${theme.media.mediumQueries} {
      grid-template-rows: none;
    }
  `};
`;
