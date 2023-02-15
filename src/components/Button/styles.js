import styled, { css, keyframes } from 'styled-components';

const buttonAnimation = keyframes`
  0%, 100% {
    background-position: right;
  }
  50% {
    background-position: left;
  }
`;

export const ButtonStyle = styled.button`
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

    &:disabled {
      background: ${theme.colors.mediumViolet};

      @media (hover: hover) {
        &:hover {
          background: ${theme.colors.mediumViolet};
          cursor: not-allowed;
        }
      }
    }

    @media (hover: hover) {
      &:hover {
        background: linear-gradient(to right, ${theme.colors.darkViolet}, ${theme.colors.secondaryColor},
          ${theme.colors.secondaryColor}, ${theme.colors.darkViolet});
        background-size: 500%;
        animation: ${buttonAnimation} 6s ease-in-out infinite;
      }
    }
 `};
`;