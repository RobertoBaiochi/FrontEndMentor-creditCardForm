import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    max-width: 144rem;
    width: 100%;
    margin-inline: auto;
    padding: ${theme.spacings.medium} ${theme.spacings.small};
  `};
`;
