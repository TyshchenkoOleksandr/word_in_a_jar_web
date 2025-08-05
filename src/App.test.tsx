import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';

describe('App component', () => {
  it('renders the Vite and React logos', () => {
    render(<App />);

    expect(screen.getByAltText(/Vite logo/i)).toBeInTheDocument();
    expect(screen.getByAltText(/React logo/i)).toBeInTheDocument();
  });

  it('renders initial heading and button', () => {
    render(<App />);
    expect(screen.getByText(/Vite\s*\+\s*React/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /count is 0/i })).toBeInTheDocument();
  });

  it('increments count on button click', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 1');
  });
});
