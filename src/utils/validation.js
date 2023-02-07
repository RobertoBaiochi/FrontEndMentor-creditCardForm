export function handleNumber(event) {
  const inputValue = event.target.value;
  const teste = inputValue.replace(/([^\d])+/gim, '');
  const letras = /[a-zA-Z\u00C0-\u00FF ]+/i;
  const barril = inputValue.match(letras);

  if (barril) {
    console.log('Aqui a gente lança o erro Erro');
  }

  return teste.replace(/(\d{4})/g, '$1 ').trim();;
}

export function handleName(event) {
  const cardNameValue = event.target.value;
  const treta = cardNameValue.replace(/[0-9]/g, '')
  const teste = cardNameValue.replace(/([^\d])+/gim, '')

  if(teste) {
    console.log('outro erro aqui')
  }

  return treta;
}

export function handleMouth(event) {
  const cardMouthValue = event.target.value;

  const cleanMouth = cardMouthValue;

  return cleanMouth;
}

export function handleYear(event) {
  const cardYearValue = event.target.value;

  const cleanYear = cardYearValue;

  return cleanYear;
}

export function handleCvc(event) {
  const cardCvcValue = event.target.value;

  const cleanCvc = cardCvcValue;

  return cleanCvc;
}
