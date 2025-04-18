import { render, screen } from '@testing-library/react';
import ListaLivros from './ListaLivros';

test('renders learn react link', () => {
  render(<ListaLivros />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
