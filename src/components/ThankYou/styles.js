import styled, { css } from 'styled-components';

export const ThanksContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: ${theme.spacings.xxlarge};

    > h3 {
      letter-spacing: ${theme.font.sizes.small};
      text-transform: uppercase;
    } 

    > p {
      color: ${theme.colors.mediumViolet};
    }
  `};
`;
