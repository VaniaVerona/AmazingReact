import React from 'react';
import { render, screen } from '@testing-library/react';
import Formulario from '../components/Formulario';
import '@testing-library/jest-dom';

test('El componente Formulario muestra etiquetas para los campos', () => {
  render(<Formulario />);

  const nameLabel = screen.getByText('Name:');
  const emailLabel = screen.getByText('Email address:');
  const mensajeLabel = screen.getByText('Message:');

  expect(nameLabel).toBeInTheDocument();
  expect(emailLabel).toBeInTheDocument();
  expect(mensajeLabel).toBeInTheDocument();
});

