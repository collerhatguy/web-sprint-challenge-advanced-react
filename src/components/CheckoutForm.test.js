import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.getByTestId("header")
    expect(header).toBeVisible()
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)
    // form values
    const name = "jacob"
    const lastName = "shomali"
    const address = "1234 somewhere street"
    const city = "whosville"
    const state = "antarctica"
    const zip = "66666"

    // getting inputs
    const nameInput = screen.getByLabelText(/first name:/i) 
    const lastNameInput = screen.getByLabelText(/last name:/i) 
    const addressInput = screen.getByLabelText(/address:/i) 
    const cityInput = screen.getByLabelText(/city:/i) 
    const stateInput = screen.getByLabelText(/state:/i) 
    const zipInput = screen.getByLabelText(/zip:/i) 
    const submit = screen.getByTestId("submit")

    // filling out inputs
    userEvent.type(nameInput, name)
    userEvent.type(lastNameInput, lastName)
    userEvent.type(addressInput, address)
    userEvent.type(cityInput, city)
    userEvent.type(stateInput, state)
    userEvent.type(zipInput, zip)
    userEvent.click(submit);

    // check if visible

    const nameDisplay = screen.getByTestId("nameDisplay");
    const addressDisplay = screen.getByTestId("addressDisplay");
    const address2Display = screen.getByTestId("address2Display");
    
    expect(nameDisplay).toBeVisible()
    expect(addressDisplay).toBeVisible()
    expect(address2Display).toBeVisible()
});
