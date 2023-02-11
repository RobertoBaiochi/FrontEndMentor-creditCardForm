import { useContext, useEffect } from 'react';
import { StatesContext } from '../../context/StatesProvider/context';
import {
  FormSection,
  FormContainer,
  ErrorMsg,
  DateCvcContainer,
  DateContainer,
  CvcContainer,
  Button,
} from './styles';
import * as types from '../../context/StatesProvider/types';

function FormComponent() {
  const statesContext = useContext(StatesContext);
  const {
    formData,
    dispatchFormData,
    formValidationData,
    dispatchFormValidationData,
  } = statesContext;

  const handleOnChangeName = (event) => {
    const { value } = event.target;

    return dispatchFormData({
      type: types.CARD_NAME,
      payload: value,
    });
  };

  const handleOnBlurName = (event) => {
    const { value } = event.target;
    const cardNameValue = value;
    const containNumber = /[0-9]/g.test(cardNameValue);

    if (containNumber === true) {
      return dispatchFormValidationData({
        type: types.CARD_NAME_ERROR,
        payload: true,
      });
    }

    return dispatchFormValidationData({
      type: types.CARD_NAME,
      payload: false,
    });
  };

  const handleOnChangeNumber = (event) => {
    const { value } = event.target;
    const cardNumberValue = value.replace(/([^\d])+/gim, '');
    const formatedNumberValue = cardNumberValue.replace(/(\d{4})/g, '$1 ').trim();

    console.log(formatedNumberValue)

    return dispatchFormData({
      type: types.CARD_NUMBER,
      payload: formatedNumberValue,
    })
  };

  const handleOnBlurNumber = (event) => {
    const { value } = event.target;
    const cardNumberValue = value;

    if (cardNumberValue.length < 19) {
      console.log('deu erro');
    }

    console.log(cardNumberValue);
    return cardNumberValue;
  };

  useEffect(() => {
    console.log('useEffect', formValidationData);
  }, [formValidationData]);

  // if (name === 'cardName') {
  //
  //   const treta = cardNameValue.match(/[0-9]/g);
  //   /* substitui numeros por espaço vazio */
  //   // const teste = cardNameValue.match(/([^\d])+/gim);
  //   /* substitui letras por espaço vazio */

  //   if (treta) {
  //     console.log(treta)
  //     return dispatchformValidatyData({type: types.CARD_NAME, payLoad: formData})

  //   }

  //   return dispatchformValidatyData({type: types.CARD_NAME, payLoad: formData});
  // }

  // if (name === 'cardNumber') {
  //   const inputValue = value;
  //   const teste = inputValue.replace(/([^\d])+/gim, '');
  //   const barril = inputValue.match(/[a-z]/gi);
  //   const charError = event.target.classList;
  //   const errormsg = event.target.nextSibling;

  //   charError.remove('erro');
  //   errormsg.classList.remove('erromsg');

  //   if (barril) {
  //     event.target.blur();
  //     charError.add('erro');
  //     errormsg.classList.add('erromsg');
  //   }

  //   const alo = teste.replace(/(\d{4})/g, '$1 ').trim();

  //   return (
  //     dispatch({
  //       type: 'update',
  //       payload: { key: name, value: alo, correctCardNumber: true },
  //     }),
  //     console.log(state.correctCardNumber)
  //   );
  // }

  // if (name === 'cardMouth') {
  //   const inputValue = value;
  //   const teste = inputValue.replace(/([^\d])+/gim, '');
  //   const barril = inputValue.match(/[a-z]/gi);
  //   const charError = event.target.classList;
  //   const errormsg = event.target.nextSibling;

  //   charError.remove('erro');
  //   errormsg.classList.remove('erromsg');

  //   const alo = teste.trim();
  //   const aloNumber = Number(alo);

  //   if (barril) {
  //     event.target.blur();
  //     charError.add('erro');
  //     errormsg.classList.add('erromsg');
  //   }

  //   if (aloNumber > 12)
  //     return dispatch({
  //       type: 'update',
  //       payload: { key: name, value: 12 },
  //     });

  //   if (aloNumber < 10 && aloNumber > 1)
  //     return dispatch({
  //       type: 'update',
  //       payload: { key: name, value: `0${aloNumber}` },
  //     });

  //   return dispatch({
  //     type: 'update',
  //     payload: { key: name, value: aloNumber },
  //   });
  // }

  // if (name === 'cardYear') {
  //   const inputValue = value;
  //   const teste = inputValue.replace(/([^\d])+/gim, '');
  //   const barril = inputValue.match(/[a-z]/gi);
  //   const charError = event.target.classList;
  //   const errormsg = event.target.nextSibling;
  //   const currentYear = new Date().toLocaleDateString();
  //   const sliceYearYY = currentYear.slice(-2);
  //   console.log(currentYear.slice(-2));

  //   charError.remove('erro');
  //   errormsg.classList.remove('erromsg');

  //   const alo = teste.trim();
  //   const aloNumber = Number(alo);

  //   if (barril) {
  //     event.target.blur();
  //     charError.add('erro');
  //     errormsg.classList.add('erromsg');
  //   }

  //   if (aloNumber < sliceYearYY) {
  //     console.log('erro para submit');
  //   }

  //   return dispatch({
  //     type: 'update',
  //     payload: { key: name, value: alo },
  //   });
  // }

  // if (name === 'cardCvc') {
  //   const inputValue = value;
  //   const teste = inputValue.replace(/([^\d])+/gim, '');
  //   const barril = inputValue.match(/[a-z]/gi);
  //   const charError = event.target.classList;
  //   const errormsg = event.target.nextSibling;

  //   charError.remove('erro');
  //   errormsg.classList.remove('erromsg');

  //   const alo = teste.trim();

  //   if (barril) {
  //     event.target.blur();
  //     charError.add('erro');
  //     errormsg.classList.add('erromsg');
  //   }

  //   return dispatch({
  //     type: 'update',
  //     payload: { key: name, value: alo },
  //   });
  // }

  // return dispatch({
  //   type: 'update',
  //   payload: { key: name, value },
  // });

  const HandleSubmit = (event) => {
    event.preventDefault();

    if (formData.cardName.length > 10) {
      console.log('cardName', formData.cardName);
    }
  };

  return (
    <FormSection>
      <FormContainer>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="cardName">Cardholder Name</label>
        <input
          type="text"
          name="cardName"
          id="cardName"
          placeholder="e.g. Jane Appleseed"
          maxLength={20}
          value={formData.cardName}
          onChange={handleOnChangeName}
          onBlur={handleOnBlurName}
        />
        <ErrorMsg className="">Wrong format, letters only</ErrorMsg>
      </FormContainer>

      <FormContainer>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          name="cardNumber"
          id="cardNumber"
          placeholder="e.g. 1234 5678 9123 0000"
          maxLength={19}
          value={formData.cardNumber}
          onInput={handleOnChangeNumber}
          onBlur={handleOnBlurNumber}
          pattern="[0-9 ]+"
        />
        <ErrorMsg>error message</ErrorMsg>
      </FormContainer>

      <DateCvcContainer>
        <DateContainer>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="mouth">Exp. Date (MM/YY)</label>
          <input
            type="text"
            maxLength={2}
            name="cardMouth"
            id="cardMouth"
            placeholder="MM"
            value={formData.cardMouth}
            onChange={handleOnChangeName}
          />
          <input
            type="text"
            maxLength={2}
            name="cardYear"
            id="cardYear"
            placeholder="YY"
            value={formData.cardYear}
            onChange={handleOnChangeName}
          />
          <ErrorMsg>error message</ErrorMsg>
        </DateContainer>

        <CvcContainer>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="CVC">CVC</label>
          <input
            type="text"
            name="cardCvc"
            maxLength={3}
            placeholder="e.g. 123"
            id="cardCvc"
            value={formData.cardCvc}
            onChange={handleOnChangeName}
          />
          <ErrorMsg>error message</ErrorMsg>
        </CvcContainer>
      </DateCvcContainer>

      <Button type="submit" onSubmit={HandleSubmit}>
        Confirm
      </Button>
    </FormSection>
  );
}

export default FormComponent;
