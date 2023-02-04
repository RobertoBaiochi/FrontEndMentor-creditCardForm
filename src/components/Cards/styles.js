import styled, { css } from 'styled-components';
import cardFront from '../../assets/images/bg-card-front.png';
import cardBack from '../../assets/images/bg-card-back.png';


export const CardFrontContainer = styled.div`
  ${({ theme }) => css`
    width: 29rem;
    height: 17rem;
    background-image: url(${cardFront});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    border-radius: 1rem;
    padding: 1.5rem;

    @media ${theme.media.mediumQueries} {
      width: 33rem;
      height: 20rem;
      left:2rem;
      top:2rem;
      bottom: unset;
    }
  `};
`;

export const CardFrontInfo = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    > img {
      width: 25%;
      display: block;
      margin-bottom: 4rem;
    }

    > h3 {
      text-align: center;
      font-size: 2rem;
      word-spacing: .2rem;
      letter-spacing: .1rem;
      color: white;
      margin-bottom: 2rem;
    }

    > div {
      display: flex;
      justify-content: space-between;

      > span {
        font-size: 1.3rem;
        color: white;
        text-transform: uppercase;
        letter-spacing: .1rem;
      }
    }

    @media ${theme.media.mediumQueries} {

      > img {
      margin-bottom: 5.5rem;
    }

      > h3 {
        font-size: 2.5rem;
        word-spacing: .1rem;
        letter-spacing: .1rem;
        margin-bottom: 2.5rem;
      }
    }


  `};
`;


export const CardBackContainer = styled.div`
  ${({ theme }) => css`
    width: 29rem;
    height: 17rem;
    background-image: url(${cardBack});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 1rem;
    padding: 1.5rem;

    @media ${theme.media.mediumQueries} {
      width: 33rem;
      height: 20rem;
      right: 2rem;
      bottom:2rem;
      top: unset;
    }
  `};
`;

export const CardBackInfo = styled.div`
  ${() => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    > span {
      padding-right: 1.5rem;
      padding-bottom: 0.4rem;
      color: white;

    }
  `};
`;
