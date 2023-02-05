import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.CARD_NUMBER: {
      return { ...state, number: action.payload };
    }
    case types.CARD_NAME: {
      return { ...state, name: action.payload };
    }
    case types.CARD_MOUTH: {
      return { ...state, mouth: action.payload };
    }
    case types.CARD_YEAR: {
      return { ...state, year: action.payload };
    }
    case types.CARD_CVC: {
      return { ...state, cvc: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};
