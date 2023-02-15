import styled, { css } from 'styled-components';

export const FormContainer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: ${theme.spacings.medium} auto;
    padding: ${theme.spacings.large};
  `};
`;
