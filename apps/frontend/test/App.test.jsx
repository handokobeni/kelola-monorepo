import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../src/App';

describe('App Component', () => {
  it('displays correct heading', () => {
    render(<App />);
    const heading = screen.getByText('Vite + React');
    expect(heading).toBeInTheDocument();
  });

  it('increments counter when button is clicked', () => {
    render(<App />);
    const button = screen.getByRole('button');
    
    // Check initial count
    expect(button).toHaveTextContent('count is 0');
    
    // Click button and verify count increases
    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 1');
  });

  it('renders help text', () => {
    render(<App />);
    const helpText = screen.getByText(/Click on the Vite and React logos to learn more/i);
    expect(helpText).toBeInTheDocument();
  });
});