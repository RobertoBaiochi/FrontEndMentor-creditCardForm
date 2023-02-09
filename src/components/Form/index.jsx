import { useContext } from 'react';
import { StatesContext } from '../../context/StatesProvider/context';
import * as types from '../../context/StatesProvider/types';
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

  const inputAction = (event) => {
    const {name, value} = event.target

    if(name === 'cardName') {

      const cardNameValue = value;
      const charError = event.target.classList;
      const errormsg = event.target.nextSibling;

      charError.remove('erro')
      errormsg.classList.remove('erromsg')

      const treta = cardNameValue.replace(/[0-9]/g, '');
      /* substitui numeros por espaço vazio */
      const teste = cardNameValue.replace(/([^\d])+/gim, '');
      /* substitui letras por espaço vazio */

      if (teste) {
        event.target.blur()
        charError.add('erro')
        errormsg.classList.add('erromsg')
      }


      return dispatch({
        type: 'update',
        payload: { key: name, value: treta },
      });
    }

    if (name === 'cardNumber') {
      const inputValue = value;
      const teste = inputValue.replace(/([^\d])+/gim, '');
      const barril = inputValue.match(/[a-z]/gi);
      const charError = event.target.classList;
      const errormsg = event.target.nextSibling;

      charError.remove('erro')
      errormsg.classList.remove('erromsg')

      if (barril) {
        console.log(barril)
        console.log('erro')
        event.target.blur()
        charError.add('erro')
        errormsg.classList.add('erromsg')
      }

      const alo = teste.replace(/(\d{4})/g, '$1 ').trim();


      return dispatch({
        type: 'update',
        payload: { key: name, value: alo },
      });
    }

    if (name === 'cardMouth') {
      const inputValue = value;
      const teste = inputValue.replace(/([^\d])+/gim, '');
      const barril = inputValue.match(/[a-z]/gi);
      const charError = event.target.classList;
      const errormsg = event.target.nextSibling;

      charError.remove('erro')
      errormsg.classList.remove('erromsg')

      const alo = teste.replace(/(\d{4})/g, '$1 ').trim();
      const aloNumber = Number(alo)

      if (barril) {
        console.log(barril)
        console.log('erro')
        event.target.blur()
        charError.add('erro')
        errormsg.classList.add('erromsg')
      }

      if (aloNumber > 12) return dispatch({
        type: 'update',
        payload: { key: name, value: 12 },
      })

      if (aloNumber < 10 && aloNumber > 1) return dispatch({
        type: 'update',
        payload: { key: name, value: `0${aloNumber}` },
      })

      return dispatch({
        type: 'update',
        payload: { key: name, value: aloNumber },
      });
    }

    if (name === 'cardYear') {
      const inputValue = value;
      const teste = inputValue.replace(/([^\d])+/gim, '');
      const barril = inputValue.match(/[a-z]/gi);
      const charError = event.target.classList;
      const errormsg = event.target.nextSibling;

      charError.remove('erro')
      errormsg.classList.remove('erromsg')

      const alo = teste.replace(/(\d{4})/g, '$1 ').trim();
      const aloNumber = Number(alo)

      if (barril || aloNumber < 1 ) {
        console.log(barril)
        console.log('erro')
        event.target.blur()
        charError.add('erro')
        errormsg.classList.add('erromsg')
      }

      if (aloNumber > 12) return dispatch({
        type: 'update',
        payload: { key: name, value: 12 },
      })

      if (aloNumber < 10 && aloNumber > 1) return dispatch({
        type: 'update',
        payload: { key: name, value: `0${aloNumber}` },
      })

      return dispatch({
        type: 'update',
        payload: { key: name, value: aloNumber },
      });
    }


    // dispatch({
    //   type: 'update',
    //   payload: { key: name, value: value },
    // });

    console.log(name, value)

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
          value={state.cardName}
          onChange={inputAction}
        />
        <ErrorMsg className=''>Wrong format, letters only</ErrorMsg>
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
          value={state.cardNumber}
          onInput={inputAction}
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
            value={state.cardMouth}
            onChange={inputAction}
          />
          <input
            type="text"
            maxLength={2}
            name="cardYear"
            id="cardYear"
            placeholder="YY"
            value={state.cardYear}
            onChange={inputAction}
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
            onChange={(event) =>
              dispatch({ type: types.CARD_CVC, payload: handleCvc(event) })
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
