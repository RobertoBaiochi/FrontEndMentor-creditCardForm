import styled, { css } from 'styled-components';

export const ContainerCards = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xsmall};
    border: 3px solid pink;
    position: relative;
    display:grid;
    grid-template-rows: repeat(2, 1fr);

    @media ${theme.media.mediumQueries} {
      width: 50%;
    }
  `};
`;
