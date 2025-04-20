import { render, screen } from "@testing-library/react";
import ListaLivrosRender from "../ListaLivrosRender"

describe("Outro arquivo de teste", () => {
    test("renderização texto xpto", () => {
        render(<ListaLivrosRender />);
        const linkElement = screen.getByText(/xpto/i);
        expect(linkElement).toBeInTheDocument();
    })
})