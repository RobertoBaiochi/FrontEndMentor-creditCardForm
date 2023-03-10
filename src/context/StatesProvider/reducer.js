import * as types from './types';

export const formOnChangeReducer = (state, action) => {
  switch (action.type) {
    case types.CARD_NAME: {
      return { ...state, cardName: action.payload };
    }
    case types.CARD_NUMBER: {
      return { ...state, cardNumber: action.payload };
    }
    case types.CARD_MOUTH: {
      return { ...state, cardMouth: action.payload };
    }
    case types.CARD_YEAR: {
      return { ...state, cardYear: action.payload };
    }
    case types.CARD_CVC: {
      return { ...state, cardCvc: action.payload };
    }
    case types.RESET_CARD: {
      return {
        ...state,
        cardName: '',
        cardNumber: '',
        cardMouth: '',
        cardYear: '',
        cardCvc: '',
      };
    }
    default: {
      return { ...state };
    }
  }
};

export const formOnBlurReducer = (state, action) => {
  switch (action.type) {
    case types.CARD_NAME_SUCCESS: {
      return { ...state, cardNameSuccess: action.payload };
    }
    case types.CARD_NUMBER_SUCCESS: {
      return { ...state, cardNumberSuccess: action.payload };
    }
    case types.CARD_MOUTH_SUCCESS: {
      return { ...state, cardMouthSuccess: action.payload };
    }
    case types.CARD_YEAR_SUCCESS: {
      return { ...state, cardYearSuccess: action.payload };
    }
    case types.CARD_CVC_SUCCESS: {
      return { ...state, cardCvcSuccess: action.payload };
    }
    case types.RESET_CARD_SUCCESS: {
      return {
        ...state,
        cardNameSuccess: null,
        cardNumberSuccess: null,
        cardMouthSuccess: null,
        cardYearSuccess: null,
        cardCvcSuccess: null,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export const errorMsgReducer = (state, action) => {
  switch (action.type) {
    case types.CARD_NAME_ERROR: {
      return { ...state, cardNameErrorMsg: action.error };
    }
    case types.CARD_NUMBER_ERROR: {
      return { ...state, cardNumberErrorMsg: action.error };
    }
    case types.CARD_DATE_ERROR: {
      return { ...state, cardDateErrorMsg: action.error };
    }
    case types.CARD_CVC_ERROR: {
      return { ...state, cardCvcErrorMsg: action.error };
    }
    default: {
      return { ...state };
    }
  }
};
