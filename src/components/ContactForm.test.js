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
    console.log(firstNameInputError);
    
});

test('renders THREE error messages if user enters no values into any fields.', async () => {
    
});

test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
    
});

test('renders "email must be a valid email address" if an invalid email is entered', async () => {
    
});

test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
    
});

test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {
    
});

test('renders all fields text when all fields are submitted.', async () => {
    
});