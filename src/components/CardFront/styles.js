import styled, { css } from 'styled-components';
import frontCard from '../../assets/images/bg-card-front.png';

export const FrontCard = styled.div`
  ${({ theme }) => css`
    max-width: 447px;
    max-height: 245px;
    background-image: url(${frontCard});
    background-repeat: no-repeat;
    background-size: contain;
    padding: ${theme.spacings.medium};
    border: 2px solid gold;
  `};
`;

export const LogoCard = styled.img`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.xlarge};
  `};
`;

export const InputNumber = styled.input`
  ${() => css`
    
  `}
`;
