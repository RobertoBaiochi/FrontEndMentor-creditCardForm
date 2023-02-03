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

    @media ${theme.media.mediumQueries} {
      width: 50%;
      gap: 2rem;
    }
  `};
`;
