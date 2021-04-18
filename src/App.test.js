import { render } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
  const page = document.querySelector('.page');
  expect(page).not.toBe(null);
});
