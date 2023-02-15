import styled, { css } from 'styled-components';

export const FormContainer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid red;
    margin: ${theme.spacings.medium} auto;
    padding: 2rem;

    @media ${theme.media.mediumQueries} {
      padding: 2rem;
    }
  `};
`;
