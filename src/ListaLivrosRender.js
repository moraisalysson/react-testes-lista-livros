import { useState } from 'react';
import './App.css';

function ListaLivrosRender() {

  const [livros, setLivros] = useState([]);
  const [livro, setLivro] = useState("");

  const handleSalvar = (e) => {
    e.preventDefault();
    console.log("Botão Salvar foi clicado");

    const novosLivros = [...livros, livro];

    setLivros(novosLivros);
  }

  return (
    <div className="App">
      <header>
        <h1>Lista de Livros</h1>
      </header>
      <form onSubmit={(e) => handleSalvar(e)}>
        <div>
          <label htmlFor="titulo">Insira um livro:</label>
          <input
            id="titulo"
            type='text'
            placeholder='nome do livro'
            data-testid="titulo"
            onChange={(e) => setLivro(e.target.value)}
          />
          <button type='submit' id="salvar" data-testid="salvar">Salvar</button>
        </div>
      </form>
      {livros.map((livro) =>
        <div
          key={livro.replace(/\s/g, "")}
          data-testid={livro.replaceAll(/\s/g, "")}
          className='container'
          id={livro.replace(/\s/g, "")}
        >
          <p>
            {livro} <button>X</button>
          </p>
        </div>
      )}
    </div>
  );
}

export default ListaLivrosRender;
