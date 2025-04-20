import { render, screen } from '@testing-library/react';
import ListaLivros from '../ListaLivros';

//"it" substitui o termo "test"
// it('renders learn react link', () => {
//   render(<ListaLivros />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('Verify if save to reload exists', () => {
  render(<ListaLivros />);
  const string = screen.getByText(/save to reload/);
  expect(string).toBeInTheDocument();
});

it('verifica a substring e ignora case', () => {
  render(<ListaLivros />);
  const string = screen.getByText(/o reload/i);
  expect(string).toBeInTheDocument();
});


// test('verify strings', () => {
//   render(<ListaLivros />);
//   const linkElement = screen.getByText(/learn react/i);
//   const string = screen.getByText(/save to reload/);
  
//   expect(linkElement).toBeInTheDocument();
//   expect(string).toBeInTheDocument();
// });

// describe("Teste de soma", () => {
//   function soma(a, b) {
//     return a + b;
//   }

//   test("O resultado deve ser 5", () => {
//     expect(soma(2, 3)).toBe(5);
// }))}

// describe("Teste de presença de item em array", () => {
//   const NOMES = ["Maurício", "Maujor", "Samy", "Silva"]
//   test("Testa a presença do item 'Maujor no array NOMES", () => {
//     expect(NOMES).toContain("Maujor");
//   })
// })