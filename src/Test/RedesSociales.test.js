import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer';

test('El componente Footer muestra las redes sociales ', () => {
  render(<Footer />);
 const facebookIcon = screen.getByAltText('facebook');
  const instagramIcon = screen.getByAltText('instagram');
  const whatsappIcon = screen.getByAltText('whatsapp');

  expect(facebookIcon).toBeInTheDocument();
  expect(instagramIcon).toBeInTheDocument();
  expect(whatsappIcon).toBeInTheDocument();
  });
