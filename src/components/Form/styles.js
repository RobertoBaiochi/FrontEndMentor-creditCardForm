import styled, { css, keyframes } from 'styled-components';

const inputAnimation = keyframes`
  0%, 100% {
    background-position: right;
  }
  50% {
    background-position: left;
  }
`;

const inputInvalid = keyframes`
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
  ${() => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

  `};
`;

export const FormContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    position: relative;

    > label {
      display: block;
      text-transform: uppercase;
      padding: ${theme.spacings.xsmall} 0;
      font-size: ${theme.font.sizes.small};
      letter-spacing: 0.15rem;

      @media ${theme.media.smallQueries} {
        font-size: ${theme.font.sizes.medium};
      }

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
      margin-bottom: 1.5rem;


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
        animation: ${inputInvalid} 200ms ease-in-out;
      }

  `};
`;

export const ErrorMsg = styled.small`
  ${({ theme }) => css`
    display: block;
    font-size: 1.3rem;
    color: ${theme.colors.redErrors};

    position: absolute;
    left: 0;
    bottom: 0;
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
