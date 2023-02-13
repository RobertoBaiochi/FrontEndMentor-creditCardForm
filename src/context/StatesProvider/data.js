export const initialState = {
  cardName: '',
  cardNumber: '',
  cardMouth: '',
  cardYear: '',
  cardCvc: '',
};

export const initialValidationState = {
  cardNameSuccess: null,
  cardNumberSuccess: null,
  cardMouthSuccess: null,
  cardYearSuccess: null,
  cardCvcSuccess: null,
}

export const initialErrorMsgState = {
  cardNameErrorMsg: '',
  cardNumberErrorMsg: '',
  cardDateErrorMsg: '',
  cardCvcErrorMsg: '',
}
