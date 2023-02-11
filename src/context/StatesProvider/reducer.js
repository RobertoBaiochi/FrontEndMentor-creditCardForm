import * as types from './types';

// export const formOnChangeReducer = (state, action) => {
//   switch (action.type) {
//     case 'update': {
//       return {
//         ...state,
//         [action.payload.key]: action.payload.value,
//       };
//     }
//     default: {
//       return { ...state };
//     }
//   }
// };

export const formOnChangeReducer = (state, action) => {
  switch (action.type) {
    case types.CARD_NUMBER: {
      return { ...state, cardNumber: action.payload };
    }
    case types.CARD_NAME: {
      return { ...state, cardName: action.payload };
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
    default: {
      return { ...state };
    }
  }
};

export const formOnBlurReducer = (state, action) => {
  switch (action.type) {
    case types.CARD_NUMBER_ERROR: {
      return { ...state, cardNumberError: action.payload };
    }
    case types.CARD_NAME_ERROR: {
      return { ...state, cardNameError: action.payload };
    }
    case types.CARD_MOUTH_ERROR: {
      return { ...state, cardMouthError: action.payload };
    }
    case types.CARD_YEAR_ERROR: {
      return { ...state, cardYearError: action.payload };
    }
    case types.CARD_CVC_ERROR: {
      return { ...state, cardCvcError: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};
