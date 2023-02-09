import styled, { css, keyframes } from 'styled-components';

const inputAnimation = keyframes`
  0%, 100% {
    background-position: right;
  }
  50% {
    background-position: left;
  }
`;

const inputInvallid = keyframes`
  25% {
    translate: 8px 0;
  }
  50% {
    translate: -16px 0;
  }
  75% {
    translate: 8px 0;
  }

`

export const FormSection = styled.form`
  ${({ theme }) => css`
    width: 100%;
    margin: ${theme.spacings.medium} 0;
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
      padding: ${theme.spacings.xsmall};
      border: 3px solid ${theme.colors.lightViolet};
      border-radius: ${theme.spacings.xsmall};
      font-family: ${theme.font.family.default};
      font-size: 2rem;
      text-transform: capitalize;


      &:focus {
        padding: .5rem;
        border: double 3px transparent;
        border-radius: 6px;
        background-image: linear-gradient( white, white),
          linear-gradient(to right, ${theme.colors.secondaryColor}, ${theme.colors.primaryColor},
          ${theme.colors.primaryColor}, ${theme.colors.secondaryColor});
        background-origin: border-box;
        background-clip: padding-box, border-box;
        background-size: 500%;
        animation: ${inputAnimation} 2s ease-in-out infinite;
        outline: transparent;
      }

      &::placeholder {
        font-family: ${theme.font.family.default};
        font-size: 1.8rem;
        font-weight: bold;
        color: ${theme.colors.lightViolet};
      }

    }

    .erro {
        border: solid 3px red;
        animation: ${inputInvallid} 200ms ease-in-out;
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

  &.erromsg {
    visibility: visible;
  }
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
    cursor: pointer;

    @media (hover: hover) {
      &:hover {
        background: linear-gradient(to right, ${theme.colors.darkViolet}, ${theme.colors.secondaryColor},
          ${theme.colors.secondaryColor}, ${theme.colors.darkViolet});
        background-size: 500%;
        animation: ${inputAnimation} 6s ease-in-out infinite;
      }

    }
 `};
`;
