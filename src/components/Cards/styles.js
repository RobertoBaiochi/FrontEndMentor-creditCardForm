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
    border-radius: ${theme.spacings.small};
    padding: ${theme.spacings.medium};
    -webkit-box-shadow: 0px 7px 18px 2px rgba(0,0,0,0.53);
    box-shadow: 0px 7px 18px 2px rgba(0,0,0,0.53);

    @media ${theme.media.mediumQueries} {
      width: 33rem;
      height: 20rem;
      left: ${theme.spacings.large};
      top: ${theme.spacings.large};
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
      margin-bottom: ${theme.spacings.xhuge};
    }

    > h3 {
      text-align: left;
      font-size: ${theme.spacings.large};
      word-spacing: .2rem;
      letter-spacing: .1rem;
      color: white;
      margin-bottom: ${theme.spacings.large};
    }

    > div {
      display: flex;
      justify-content: space-between;
      font-size: 1.3rem;
      color: white;
      text-transform: uppercase;
      letter-spacing: .1rem;

    }

    @media ${theme.media.mediumQueries} {

      > img {
      margin-bottom: 5.5rem;
    }

      > h3 {
        font-size: ${theme.spacings.xlarge};
        word-spacing: .1rem;
        letter-spacing: .1rem;
        margin-bottom: ${theme.spacings.xlarge};
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
    padding: ${theme.spacings.medium};
    -webkit-box-shadow: 0px 7px 18px 2px rgba(0,0,0,0.53);
    box-shadow: 0px 7px 18px 2px rgba(0,0,0,0.53);

    @media ${theme.media.mediumQueries} {
      width: 33rem;
      height: 20rem;
      right: ${theme.spacings.large};
      bottom: ${theme.spacings.large};
      top: unset;
    }
  `};
`;

export const CardBackInfo = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    > span {
      padding-right: ${theme.spacings.medium};
      padding-bottom: 0.4rem;
      color: white;
      font-size: ${theme.spacings.medium};

    }
  `};
`;
