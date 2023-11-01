import React from 'react';
import { render, screen} from  '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/Button';

test('El componente Button muestra el texto proporcionado como prop', () => {
    render(<Button label="Haz clic" />);
    const buttonElement = screen.getByText(/Haz clic/i);
    expect(buttonElement).toBeInTheDocument();
});
