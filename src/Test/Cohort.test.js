import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer';

test('El componente Footer muestra la palabra "COHORT"', () => {
  render(<Footer />);
  const cohortText = screen.getByText('COHORT');
  expect(cohortText).toBeInTheDocument();
});


