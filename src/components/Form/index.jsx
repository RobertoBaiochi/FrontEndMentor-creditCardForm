import { useContext } from 'react';
import { StatesContext } from '../../context/StatesProvider/context';
import * as types from '../../context/StatesProvider/types';
import {
  handleNumber,
  handleName,
  handleMouth,
  handleYear,
  handleCvc,
} from '../../context/StatesProvider/actions';
import {
  FormSection,
  FormContainer,
  ErrorMsg,
  DateCvcContainer,
  DateContainer,
  CvcContainer,
  Button,
} from './styles';

function FormComponent() {
  const statesContext = useContext(StatesContext);
  const { state, dispatch } = statesContext;

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
          maxLength={16}
          value={state.name}
          onChange={(e) =>
            dispatch({ type: types.CARD_NAME, payload: handleName(e) })
          }
        />
        <ErrorMsg>error message</ErrorMsg>
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
          value={state.number}
          onChange={(e) =>
            dispatch({ type: types.CARD_NUMBER, payload: handleNumber(e) })
          }
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
            max={12}
            name="mouth"
            id="mouth"
            placeholder="MM"
            value={state.mouth}
            onChange={(e) =>
              dispatch({ type: types.CARD_MOUTH, payload: handleMouth(e) })
            }
          />
          <input
            type="text"
            maxLength={2}
            max={12}
            name="year"
            id="year"
            placeholder="YY"
            value={state.year}
            onChange={(e) =>
              dispatch({ type: types.CARD_YEAR, payload: handleYear(e) })
            }
          />
          <ErrorMsg>error message</ErrorMsg>
        </DateContainer>

        <CvcContainer>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="CVC">CVC</label>
          <input
            type="text"
            name="CVC"
            maxLength={3}
            placeholder="e.g. 123"
            id="CVC"
            value={state.cvc}
            onChange={(e) =>
              dispatch({ type: types.CARD_CVC, payload: handleCvc(e) })
            }
          />
          <ErrorMsg>error message</ErrorMsg>
        </CvcContainer>
      </DateCvcContainer>

      <Button type="submit">Confirm</Button>
    </FormSection>
  );
}

export default FormComponent;
