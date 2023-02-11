import * as types from './types';

export const formOnChangeReducer = (state, action) => {
  switch (action.type) {
    case 'update': {
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export const formOnBlurReducer = (state, action) => {
  switch (action.type) {
    case types.CARD_NUMBER: {
      return { ...state, cardNumberError: action.payload };
    }
    case types.CARD_NAME: {
      return { ...state, cardNameError: true };
    }
    case types.CARD_MOUTH: {
      return { ...state, cardMouthError: action.payload };
    }
    case types.CARD_YEAR: {
      return { ...state, cardYearError: action.payload };
    }
    case types.CARD_CVC: {
      return { ...state, cardCvcError: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};
