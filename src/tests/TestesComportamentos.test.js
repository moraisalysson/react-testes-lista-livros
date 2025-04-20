import { fireEvent, render, screen } from "@testing-library/react";
import ListaLivrosRender from "../ListaLivrosRender"

// describe("Testes de comportamento", () => {
//     test("click no botão Salvar", () => {
//         render(<ListaLivrosRender />);
//         const botaoSalvar = screen.getByTestId("salvar");
//         expect(console.log(botaoSalvar));
//     });
// })

describe("Testes de comportamento", () => {
    test("evento change e form submit", () => {
        const { container } = render(<ListaLivrosRender />);
        // expect(console.log(container.innerHTML));
        const input = screen.getByTestId("titulo");
        const [form] = container.querySelectorAll("form");
        fireEvent.change(input, { target: { value: "React JS" } });
        fireEvent.submit(form);
        // expect(console.log(container.innerHTML));
        const livroItem = screen.getByTestId("ReactJS");
        const booleano = livroItem.hasChildNodes("Reactj JS");
        expect(booleano).toBeTruthy();
    });
})