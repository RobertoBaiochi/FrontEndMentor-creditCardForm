import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xsmall};
    border: 3px solid pink;
    position: relative;
  `};
`;
