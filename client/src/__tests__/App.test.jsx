import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Componente App', () => {
  test('renderiza el título principal', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { name: /react beer ecommerce challenge/i });
    expect(heading).toBeInTheDocument();
  });

  test('renderiza el párrafo con el texto "Hello World"', () => {
    render(<App />);
    const paragraph = screen.getByText(/hello world/i);
    expect(paragraph).toBeInTheDocument();
  });
});
