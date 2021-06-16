import App from './App';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('miau_visible', () => {
  it('miau_visible', async () => {
    render(<App />);

    const button = screen.getByTestId('button');
    fireEvent.click(button);

    const svg = await screen.findByTestId('svg');
    expect(svg).toBeVisible();
  });
});
