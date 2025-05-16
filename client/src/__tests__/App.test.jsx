import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('App Component', () => {
  test('renders product page title', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const heading = await screen.findByRole('heading', {
      name: /our products/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
