import styled, { css } from 'styled-components';

export const FormSection = styled.form`
  ${() => css`
    width: 100%;
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
    visibility: visible;
    font-size: 1.3rem;
    color: ${theme.colors.redErrors};
  `};
`;

export const DateCvcContainer = styled.div`
  ${() => css`
    display: flex;
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
    padding: ${theme.spacings.small};
    font-size: ${theme.font.sizes.medium};
    font-family: ${theme.font.family.default};
    background: ${theme.colors.darkViolet};
    color: ${theme.colors.white};
    border: none;
    outline-color: transparent;
    border-radius: ${theme.spacings.xsmall};
 `};
`;

