import styled, { css } from 'styled-components';

export const ThanksContainer = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid green;
    gap: 3rem;
  `};

  > h3 {
    display: block;
  }

  > p {
    display: block;
  }

`;
