import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';

describe('App component', () => {
  it('renders TestButton with initial theme mode', () => {
    render(<App />);
    // The button should display either 'LIGHT' or 'DARK' theme mode
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button.textContent).toMatch(/^(LIGHT|DARK)$/);
  });

  it('toggles theme mode on button click', () => {
    render(<App />);
    const button = screen.getByRole('button');
    const initialTheme = button.textContent;

    fireEvent.click(button);

    // The theme should toggle to the opposite value
    const newTheme = button.textContent;
    expect(newTheme).not.toBe(initialTheme);
    expect(newTheme).toMatch(/^(LIGHT|DARK)$/);
  });
});
