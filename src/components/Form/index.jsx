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
        />
        <ErrorMsg>error message</ErrorMsg>
      </FormContainer>

      <DateCvcContainer>
        <DateContainer>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="date">Exp. Date (MM/YY)</label>
          <input type="text" name="date" id="date" placeholder="MM" />
          <input type="text" name="date" id="date" placeholder="YY" />
          <ErrorMsg>error message</ErrorMsg>
        </DateContainer>

        <CvcContainer>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="CVC">CVC</label>
          <input type="text" name="CVC" id="CVC" placeholder="e.g. 123" />
          <ErrorMsg>error message</ErrorMsg>
        </CvcContainer>
      </DateCvcContainer>

      <Button type="submit">Confirm</Button>
    </FormSection>
  );
}

export default FormComponent;
