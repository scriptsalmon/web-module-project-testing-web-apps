import React from 'react';
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from './ContactForm';

//arrange
//act
//assert


test('renders without errors', ()=>{
    render(<ContactForm />);
});

test('renders the contact form header', () => {
    render(<ContactForm />);
    const headerElem = screen.queryByText(/contact form/i);
    expect(headerElem).toBeInTheDocument();
});

test('renders ONE error message if user enters less then 5 characters into firstname.', async () => {
    //arrange 
    render(<ContactForm />);
    const firstNameInput = screen.getByLabelText(/first name*/i);
    //act
    userEvent.type(firstNameInput, "name");
    // console.log(firstNameInput.value);
    //assert
    const firstNameInputError = screen.queryByText(/firstName must have at least 5 characters./i);
    // console.log(firstNameInputError);
    expect(firstNameInputError).toBeInTheDocument();
});

test('renders THREE error messages if user enters no values into any fields.', async () => {
    //arrange
    render(<ContactForm />);
    const firstNameInput = screen.getByLabelText(/first name*/i);
    const lastNameInput = screen.getByLabelText(/last name*/i);
    const emailInput = screen.getByLabelText(/email*/i);
    //act
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
        //input fields should be blank
    expect(firstNameInput).toHaveValue("");
    expect(lastNameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    //assert
        //click submit button with empty fields
    const submitButton = screen.getByRole("button");
    submitButton.click();
        //identify three error messages, one for each field
    const errorMessage = screen.getAllByTestId("error");
    expect(errorMessage.length).toBe(3);
    // console.log(errorMessage.length);
});

test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
    //arrange
    render(<ContactForm/>);
        //declare elements
    const firstNameInput = screen.getByLabelText(/first name*/i);
    const lastNameInput = screen.getByLabelText(/last name*/i);
    const emailInput = screen.getByLabelText(/email*/i);
        //confirm elements exist
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
        //check initial value of input elements
    expect(firstNameInput).toHaveValue("");
    expect(lastNameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    //act
        //fill out firstName and lastName fields
    userEvent.type(firstNameInput, "Eduardo");
    userEvent.type(lastNameInput, "Burkenstein")
        //click submit button with empty fields
    const submitButton = screen.getByRole("button");
    submitButton.click();
    //assert
        //identify three error messages, one for each field
    const errorMessage = screen.getAllByTestId("error");
    expect(errorMessage.length).toBe(1);
});

test('renders "email must be a valid email address" if an invalid email is entered', async () => {
    //arrange
    render(<ContactForm />);
    const emailInput = screen.getByLabelText(/email*/i);
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveValue("");
    //act
    userEvent.type(emailInput, "yellowbill9021");
    // console.log(emailInput.value);
    //assert
    // const errorMessage = screen.queryByText("email must be a valid email address.");
    // expect(errorMessage).toBeInTheDocument();

    const errorMessage = screen.getAllByTestId("error");
    expect(errorMessage.length).toBe(1);
});

test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
    
});

test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {
    
});

test('renders all fields text when all fields are submitted.', async () => {
    
});