import styled, { css } from 'styled-components';
import cardFront from '../../assets/images/bg-card-front.png';
import cardBack from '../../assets/images/bg-card-back.png';


export const CardFrontContainer = styled.div`
  ${() => css`
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
  `};
`;

export const CardFrontInfo = styled.div`
  ${() => css`
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
      word-spacing: .3rem;
      letter-spacing: .12rem;
      color: white;
      margin-bottom: 1.5rem;

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


  `};
`;


export const CardBackContainer = styled.div`
  ${() => css`
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
