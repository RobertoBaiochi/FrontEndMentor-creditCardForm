import styled, { css } from 'styled-components';

export const ContainerCards = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: ${theme.spacings.medium} auto ;
    position: relative;
    padding: 2rem;


    @media ${theme.media.mediumQueries} {
      width: 100%;
      gap: 2rem;
      height: 500px;
    }
  `};
`;
