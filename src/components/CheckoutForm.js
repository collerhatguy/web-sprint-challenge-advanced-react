import React from "react";
import useForm from "../hooks/useForm";

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [change, submit, err, values] = useForm(initialValue);

  return (
    <>
      <form onSubmit={submit}>
        <h2 data-testid="header">Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={values.firstName}
            onChange={change}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={values.lastName}
            onChange={change}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={values.address}
            onChange={change}
          />
        </label>
        <label>
          City:
          <input name="city" value={values.city} onChange={change} />
        </label>
        <label>
          State:
          <input name="state" value={values.state} onChange={change} />
        </label>
        <label>
          Zip:
          <input name="zip" value={values.zip} onChange={change} />
        </label>
        <button data-testid="submit">Checkout</button>
      </form>

      {!err && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p data-testid="nameDisplay">
            {values.firstName} {values.lastName}
          </p>
          <p data-testid="addressDisplay">{values.address}</p>
          <p data-testid="address2Display">
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
