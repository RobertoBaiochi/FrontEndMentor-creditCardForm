import styled, { css } from 'styled-components';
import cardFront from '../../assets/images/bg-card-front.png';
import cardBack from '../../assets/images/bg-card-back.png';

export const CardFront = styled.div`
  ${({ theme }) => css`
    width: 100%;
    /* border: 5px solid red; */
    max-width: 447px;
    max-height: 245px;
    background-image: url(${cardFront});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    /* position: absolute;
    bottom: 0;
    left: 0; */
    padding: ${theme.spacings.medium};
    letter-spacing: 0.27rem;
  `};
`;

export const ContainerFront = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    color: ${theme.colors.white};

    .logoCard {
      width: 25%;
      margin-bottom: ${theme.spacings.medium}
    }

    .cardNumber {
      width: 100%;
      margin-bottom: ${theme.spacings.medium};
      border: 1px solid green;
      font-size: 2rem;
      line-height: 2.5rem;
      text-align: center;
    }
  `};
`;

export const NameDateContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    .customerName {
      width: 80%;
      font-size: ${theme.font.sizes.small};
      text-transform: uppercase;

    }

    .expirationDate {
      width: 20%;
      font-size: ${theme.font.sizes.small};
      text-align: right;
    }

  `}
`;

export const CardBack = styled.div`
  ${({ theme }) => css`]
    width: 100%;
    max-width: 447px;
    max-height: 245px;
    background-image: url(${cardBack});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: ${theme.spacings.medium};
  `};
`;

export const ContainerBack = styled(ContainerFront)`
  ${() => css`

    /* border: 1px solid white; */
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .securtyCode {
      width: 100%;
      padding-right: 2.5rem;
      margin-bottom:0.3rem;

      /* border: 1px solid white; */
      text-align: right;
    }
  `};
`;
