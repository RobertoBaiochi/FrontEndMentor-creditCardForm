import styled, { css } from 'styled-components';

export const ContainerCards = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: ${theme.spacings.large} auto;
    position: relative;
    padding: ${theme.spacings.large};


    @media ${theme.media.mediumQueries} {
      width: 100%;
      gap: ${theme.spacings.large};
      height: 50rem;
    }
  `};
`;
