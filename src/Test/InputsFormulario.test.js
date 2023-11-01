import React from 'react';
import { render, screen } from '@testing-library/react';
import Formulario from '../components/Formulario';
import '@testing-library/jest-dom';

test('El componente Formulario muestra campos de entrada', () => {
  render(<Formulario />);

  const nameInput = screen.getByPlaceholderText('Enter your name');
  const emailInput = screen.getByPlaceholderText('Enter your email');
  const messageTextarea = screen.getByPlaceholderText('Enter your message');
  const submitButton = screen.getByText('Submit');

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(messageTextarea).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});
