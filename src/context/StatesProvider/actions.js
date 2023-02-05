import * as types from './types';

function handleNumber(event) {
  const cardNumberValue = event.target.value

  const cleanNumber = cardNumberValue
    .replace(/\s/g, '')
    .replace(/(\d{4})/g, '$1 ')
    .trim();

  return cleanNumber;
};

function handleName(event) {
  const cardNameValue = event.target.value

  const cleanName = cardNameValue;

  return cleanName;
};

function handleMouth(event) {
  const cardMouthValue = event.target.value

  const cleanMouth = cardMouthValue;

  return cleanMouth;
};

function handleYear(event) {
  const cardYearValue = event.target.value

  const cleanYear = cardYearValue;

  return cleanYear;
};

function handleCvc(event) {
  const cardCvcValue = event.target.value

  const cleanCvc = cardCvcValue;

  return cleanCvc;
};


export function handleDispatchNumber(dispatch, event) {
  return dispatch({type: types.CARD_NUMBER, payload: handleNumber(event)});
};

export function handleDispatchName(dispatch, event) {
  return dispatch({type: types.CARD_NAME, payload: handleName(event)});
};

export function handleDispatchMouth(dispatch, event) {
  return dispatch({type: types.CARD_MOUTH, payload: handleMouth(event)});
};

export function handleDispatchYear(dispatch, event) {
  return dispatch({type: types.CARD_YEAR, payload: handleYear(event)});
};

export function handleDispatchCvc(dispatch, event) {
  return dispatch({type: types.CARD_CVC, payload: handleCvc(event)});
};
