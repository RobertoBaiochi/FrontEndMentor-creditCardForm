import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${() => css`
    width: 100%;
    height: 100vh;
    position: relative;
  `};
`;

export const Source = styled.source`
  ${() => css`
  position: absolute;
  width: 40px;
  `}
`;

export const Img = styled.img`
  ${() => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  `}
`;
