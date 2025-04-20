import { render, screen } from '@testing-library/react';
import ListaLivrosRender from '../ListaLivrosRender';

describe("Testes de renderização", () => {
  test("texto Lista de Livros", () => {
    render(<ListaLivrosRender />)
    const linkElement = screen.getByText(/lista de livros/i);
    expect(linkElement).toBeInTheDocument();
  })

  test("input para o título do livro", () => {
    render(<ListaLivrosRender />);
    const elInput = screen.getByLabelText("Insira um livro:", {
      selector: "input",
    });
    expect(elInput).toBeInTheDocument();
  })

  test("botão Salvar", () => {
    render(<ListaLivrosRender />);
    const elBotao = screen.getByTestId("salvar");
    expect(elBotao).toBeInTheDocument();
  })

  test("render options", () => {
    const { container } = render(<ListaLivrosRender />);
    console.log(container.innerHTML);
    
  })
});