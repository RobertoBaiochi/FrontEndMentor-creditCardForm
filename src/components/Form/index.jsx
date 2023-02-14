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
    formValidationData,
    formErrorMsg,
    dispatchFormData,
    dispatchFormValidationData,
    dispatchErrorMsg,
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
      return (
        dispatchFormValidationData({
          type: types.CARD_NAME_SUCCESS,
          payload: false,
        }),
        dispatchErrorMsg({
          type: types.CARD_NAME_ERROR,
          error: 'Wrong format, letters only.',
        })
      );
    }

    if (cardNameValue.length === 0) {
      return (
        dispatchFormValidationData({
          type: types.CARD_NAME_SUCCESS,
          payload: null,
        }),
        dispatchErrorMsg({
          type: types.CARD_NAME_ERROR,
          error: '',
        })
      );
    }

    if (formData.cardName) {
      const fullName = formData.cardName.split(' ');
      if (!fullName[1]) {
        return (
          dispatchFormValidationData({
            type: types.CARD_NAME_SUCCESS,
            payload: false,
          }),
          dispatchErrorMsg({
            type: types.CARD_NAME_ERROR,
            error: 'Required first and last name.',
          })
        );
      }
    }

    return (
      dispatchFormValidationData({
        type: types.CARD_NAME_SUCCESS,
        payload: true,
      }),
      dispatchErrorMsg({
        type: types.CARD_NAME_ERROR,
        error: '',
      })
    );
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
      return (
        dispatchFormValidationData({
          type: types.CARD_NUMBER_SUCCESS,
          payload: null,
        }),
        dispatchErrorMsg({
          type: types.CARD_NUMBER_ERROR,
          error: '',
        })
      );
    }

    if (cardNumberValue.length < 19) {
      return (
        dispatchFormValidationData({
          type: types.CARD_NUMBER_SUCCESS,
          payload: false,
        }),
        dispatchErrorMsg({
          type: types.CARD_NUMBER_ERROR,
          error: 'Missing numbers.',
        })
      );
    }

    return (
      dispatchFormValidationData({
        type: types.CARD_NUMBER_SUCCESS,
        payload: true,
      }),
      dispatchErrorMsg({
        type: types.CARD_NUMBER_ERROR,
        error: '',
      })
    );
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

      return (
        dispatchFormValidationData({
          type: types.CARD_MOUTH_SUCCESS,
          payload: null,
        }),
        dispatchErrorMsg({
          type: types.CARD_DATE_ERROR,
          error: '',
        })
      );
    }

    if (value.length === 0 || value === '') {
      return (
        dispatchFormValidationData({
          type: types.CARD_MOUTH_SUCCESS,
          payload: null,
        }),
        dispatchErrorMsg({
          type: types.CARD_DATE_ERROR,
          error: '',
        })
      );
    }

    if (value.length >= 1) {
      return (
        dispatchFormValidationData({
          type: types.CARD_MOUTH_SUCCESS,
          payload: true,
        }),
        dispatchErrorMsg({
          type: types.CARD_DATE_ERROR,
          error: '',
        })
      );
    }

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

    const currentYear = new Date().toLocaleDateString();
    const sliceYearFormatYY = currentYear.slice(-2);

    if (value.length === 0) {
      return (
        dispatchFormValidationData({
          type: types.CARD_YEAR_SUCCESS,
          payload: null,
        }),
        dispatchErrorMsg({
          type: types.CARD_DATE_ERROR,
          error: '',
        })
      );
    }

    if (value.length === 1) {
      dispatchFormData({
        type: types.CARD_YEAR,
        payload: yearFormatAdjustment,
      });
    }

    if (formData.cardMouth.length === 0) {
      return (
        dispatchFormValidationData({
          type: types.CARD_MOUTH_SUCCESS,
          payload: false,
        }),
        dispatchErrorMsg({
          type: types.CARD_DATE_ERROR,
          error: 'The month is required.',
        })
      );
    }

    if (
      valueInNumber < sliceYearFormatYY ||
      Number(yearFormatAdjustment) < sliceYearFormatYY
    ) {
      return (
        dispatchFormValidationData({
          type: types.CARD_YEAR_SUCCESS,
          payload: false,
        }),
        dispatchErrorMsg({
          type: types.CARD_DATE_ERROR,
          error: 'This card is expired.',
        })
      );
    }

    return (
      dispatchFormValidationData({
        type: types.CARD_YEAR_SUCCESS,
        payload: true,
      }),
      dispatchErrorMsg({
        type: types.CARD_DATE_ERROR,
        error: '',
      })
    );
  };

  const handleOnChangeCvc = (event) => {
    const { value } = event.target;
    const formattedCvcValue = value.replace(/([^\d])+/gim, '').trim();

    return dispatchFormData({
      type: types.CARD_CVC,
      payload: formattedCvcValue,
    });
  };

  const handleOnBlurChangeCvc = (event) => {
    const { value } = event.target;

    if (value.length === 0) {
      return (
        dispatchFormValidationData({
          type: types.CARD_CVC_SUCCESS,
          payload: null,
        }),
        dispatchErrorMsg({
          type: types.CARD_CVC_ERROR,
          error: '',
        })
      );
    }

    if (value.length < 3) {
      return (
        dispatchFormValidationData({
          type: types.CARD_CVC_SUCCESS,
          payload: false,
        }),
        dispatchErrorMsg({
          type: types.CARD_CVC_ERROR,
          error: 'Missing numbers.',
        })
      );
    }

    return (
      dispatchFormValidationData({
        type: types.CARD_CVC_SUCCESS,
        payload: true,
      }),
      dispatchErrorMsg({
        type: types.CARD_CVC_ERROR,
        error: '',
      })
    );
  };

  const HandleSubmit = (event) => {
    event.preventDefault();

    console.log('submit', formData);
    console.log('useEffect', formValidationData);
  };

  const isAvailable = () => {
    const isTrue = (current) => current === true;
    const valuesFormSuccess = Object.values(formValidationData);
    const isAllSuccess = valuesFormSuccess.every(isTrue);

    return isAllSuccess;
  };

  useEffect(() => {
    isAvailable();
    console.log('useEffect', formValidationData);
    console.log('useEffect', formErrorMsg);
  }, [formValidationData, formErrorMsg]);

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
          className={
            formValidationData.cardNameSuccess ||
            formValidationData.cardNameSuccess === null
              ? ''
              : 'erro'
          }
        />
        <ErrorMsg>{formErrorMsg.cardNameErrorMsg}</ErrorMsg>
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
          className={
            formValidationData.cardNumberSuccess ||
            formValidationData.cardNumberSuccess === null
              ? ''
              : 'erro'
          }
        />
        <ErrorMsg>{formErrorMsg.cardNumberErrorMsg}</ErrorMsg>
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
            className={
              formValidationData.cardMouthSuccess ||
              formValidationData.cardMouthSuccess === null
                ? ''
                : 'erro'
            }
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
            className={
              formValidationData.cardYearSuccess ||
              formValidationData.cardYearSuccess === null
                ? ''
                : 'erro'
            }
          />
          <ErrorMsg>{formErrorMsg.cardDateErrorMsg}</ErrorMsg>
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
            onChange={handleOnChangeCvc}
            onBlur={handleOnBlurChangeCvc}
            className={
              formValidationData.cardCvcSuccess ||
              formValidationData.cardCvcSuccess === null
                ? ''
                : 'erro'
            }
          />
          <ErrorMsg>{formErrorMsg.cardCvcErrorMsg}</ErrorMsg>
        </CvcContainer>
      </DateCvcContainer>

      <Button disabled={!isAvailable()} type="submit" onClick={HandleSubmit}>
        Confirm
      </Button>
    </FormSection>
  );
}

export default FormComponent;
