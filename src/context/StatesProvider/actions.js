export function handleNumber(event) {
  const cardNumberValue = event.target.value

  const cleanNumber = cardNumberValue
    .replace(/\s/g, '')
    .replace(/(\d{4})/g, '$1 ')
    .trim();

  return cleanNumber;
};

export function handleName(event) {
  const cardNameValue = event.target.value

  const cleanName = cardNameValue;

  return cleanName;
};

export function handleMouth(event) {
  const cardMouthValue = event.target.value

  const cleanMouth = cardMouthValue;

  return cleanMouth;
};

export function handleYear(event) {
  const cardYearValue = event.target.value

  const cleanYear = cardYearValue;

  return cleanYear;
};

export function handleCvc(event) {
  const cardCvcValue = event.target.value

  const cleanCvc = cardCvcValue;

  return cleanCvc;
};
