import styled, { css } from 'styled-components';
import frontCard from '../../assets/images/bg-card-front.png';

export const FrontCard = styled.div`
  ${({ theme }) => css`
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
  `};
`;

export const LogoCard = styled.img`
  ${({ theme }) => css`
    width: 20%;
    padding-bottom: ${theme.spacings.medium};
  `};
`;

export const InputNumber = styled.p`
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.font.sizes.medium};
    padding-bottom: ${theme.spacings.small};
  `};
`;

export const NameDateContainer = styled.div`
  ${({ theme }) => css`
  display: flex;
  align-items: center;
  padding-bottom: ${theme.spacings.small};
  `}
`;

export const InputName = styled.p`
  ${({ theme }) => css`
    width: 80%;
    font-size: ${theme.font.sizes.small};
  `}
`;
export const InputDate = styled.p`
  ${({ theme }) => css`
    width: 20%;
    font-size: ${theme.font.sizes.small};
    text-align: right;
  `}
`;
