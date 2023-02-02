import styled, { css } from 'styled-components';

export const ContainerCards = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 300px;
    padding: ${theme.spacings.xsmall};
    border: 3px solid pink;
    position: relative;
  `};
`;
