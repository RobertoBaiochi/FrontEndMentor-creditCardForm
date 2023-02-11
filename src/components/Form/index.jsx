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

    if (containNumber) {
      return dispatchFormValidationData({
        type: types.CARD_NAME_SUCCESS,
        payload: false,
      });
    }

    if (cardNameValue.length === 0) {
      return dispatchFormValidationData({
        type: types.CARD_NAME_SUCCESS,
        payload: null,
      });
    }

    return dispatchFormValidationData({
      type: types.CARD_NAME_SUCCESS,
      payload: true,
    });
  };

  const handleOnChangeNumber = (event) => {
    const { value } = event.target;
    const cardNumberValue = value.replace(/([^\d])+/gim, '');
    const formattedNumberValue = cardNumberValue
      .replace(/(\d{4})/g, '$1 ')
      .trim();

    return dispatchFormData({
      type: types.CARD_NUMBER,
      payload: formattedNumberValue,
    });
  };

  const handleOnBlurNumber = (event) => {
    const { value } = event.target;
    const cardNumberValue = value;

    if (cardNumberValue.length === 0) {
      return dispatchFormValidationData({
        type: types.CARD_NUMBER_SUCCESS,
        payload: null,
      });
    }

    if (cardNumberValue.length < 19) {
      return dispatchFormValidationData({
        type: types.CARD_NUMBER_SUCCESS,
        payload: false,
      });
    }

    return dispatchFormValidationData({
      type: types.CARD_NUMBER_SUCCESS,
      payload: true,
    });
  };

  const handleOnChangeMouth = (event) => {
    const { value } = event.target;
    const formattedMouthValue = value.replace(/([^\d])+/gim, '').trim();
    const mouthValueInNumber = Number(formattedMouthValue);

    if (mouthValueInNumber > 12) {
      return dispatchFormData({
        type: types.CARD_MOUTH,
        payload: 12,
      });
    }

    return dispatchFormData({
      type: types.CARD_MOUTH,
      payload: formattedMouthValue,
    });
  };

  const handleOnBlurMouth = (event) => {
    const { value } = event.target;
    const valueInNumber = Number(value);
    const mouthFormatAdjustment = `${'0'}${value}`;

    if (value.length === 1) {
      dispatchFormData({
        type: types.CARD_MOUTH,
        payload: mouthFormatAdjustment,
      });
    }

    if (valueInNumber === 0) {
      dispatchFormData({
        type: types.CARD_MOUTH,
        payload: String(''),
      });

      return dispatchFormValidationData({
        type: types.CARD_MOUTH_SUCCESS,
        payload: null,
      });
    }

    if (value.length === 0 || value === '') {
      return dispatchFormValidationData({
        type: types.CARD_MOUTH_SUCCESS,
        payload: null,
      });
    }

    console.log(value);

    return dispatchFormValidationData({
      type: types.CARD_MOUTH_SUCCESS,
      payload: true,
    });
  };

  const handleOnChangeYear = (event) => {
    const { value } = event.target;
    const formattedYearValue = value.replace(/([^\d])+/gim, '').trim();

    return dispatchFormData({
      type: types.CARD_YEAR,
      payload: formattedYearValue,
    });
  };

  const handleOnBlurYear = (event) => {
    const { value } = event.target;
    const valueInNumber = Number(value);
    const yearFormatAdjustment = `${'0'}${value}`;

    const currentYear = new Date().toLocaleDateString(); // submit
    const sliceYearFormatYY = currentYear.slice(-2); // submit

    if (value.length === 1) {
      return dispatchFormData({
        type: types.CARD_YEAR,
        payload: yearFormatAdjustment,
      });
    }

    if (valueInNumber < sliceYearFormatYY) {
      // submit
      console.log('erro para submit');
    }

    if (value.length === 0) {
      return dispatchFormValidationData({
        type: types.CARD_YEAR_SUCCESS,
        payload: null,
      });
    }

    return dispatchFormValidationData({
      type: types.CARD_YEAR_SUCCESS,
      payload: true,
    });
  };

  useEffect(() => {
    console.log('useEffect', formValidationData);
  }, [formValidationData]);

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
            onChange={handleOnChangeMouth}
            onBlur={handleOnBlurMouth}
          />
          <input
            type="text"
            maxLength={2}
            name="cardYear"
            id="cardYear"
            placeholder="YY"
            value={formData.cardYear}
            onChange={handleOnChangeYear}
            onBlur={handleOnBlurYear}
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
