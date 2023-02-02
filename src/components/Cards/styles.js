import styled, { css } from 'styled-components';
import frontCard from '../../assets/images/bg-card-front.png';

export const FrontCard = styled.div`
  ${({ theme }) => css`
    border: 5px solid red;
    max-width: 447px;
    max-height: 245px;
    background-image: url(${frontCard});
    background-repeat: no-repeat;
    background-size: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: ${theme.spacings.medium};
  `};
`;

export const FrontContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors.white};

    .logoCard {
      width: 25%;
      margin-bottom: ${theme.spacings.medium}
    }

    .cardNumber {
      width: 100%;

      margin-bottom: ${theme.spacings.medium}
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
