import styled, { css } from 'styled-components';

export const FormSection = styled.form`
  ${({ theme }) => css`
    width: 100%;
    margin: ${theme.spacings.medium} 0;
    border: 1px solid green;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media ${theme.media.mediumQueries} {
      padding: 2rem;
    }
  `};


`;

export const FormContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;

    > label {
      display: block;
      text-transform: uppercase;
      padding: ${theme.spacings.xsmall} 0;
      font-size: ${theme.font.sizes.medium};
      letter-spacing: 0.15rem;

    }

    > input {
      display: block;
      width: 100%;
      padding: ${theme.spacings.small};
      border: 2px solid ${theme.colors.lightViolet};
      border-radius: ${theme.spacings.xsmall};

      &:focus {
        outline: 2px solid ${theme.colors.darkViolet} ;
      }

      &::placeholder {
        font-family: ${theme.font.family.default};
        font-size: 1.8rem;
        font-weight: bold;
        color: ${theme.colors.lightViolet};
      }
    }

  `};
`;

export const ErrorMsg = styled.small`
  ${({ theme }) => css`
    display: block;
    visibility: hidden;
    font-size: 1.3rem;
    color: ${theme.colors.redErrors};
  `};
`;

export const DateCvcContainer = styled.div`
  ${() => css`
    display: flex;
    gap: 1rem;
  `};
`;

export const DateContainer = styled(FormContainer)`
  ${({ theme }) => css`

    width: 50%;

    > input {
      display: inline;
      width: 43%;
      margin-right: ${theme.spacings.small};
    }

  `};
`;

export const CvcContainer = styled(FormContainer)`
  ${() => css`
    width: 50%;
  `};
`;

export const Button = styled.button`
 ${({ theme }) => css`
    width: 100%;
    margin-top: ${theme.spacings.small} ;
    padding: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.medium};
    font-family: ${theme.font.family.default};
    background: ${theme.colors.darkViolet};
    color: ${theme.colors.white};
    border: none;
    outline-color: transparent;
    border-radius: ${theme.spacings.xsmall};
 `};
`;

