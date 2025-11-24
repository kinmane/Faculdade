import { Biblioteca } from "./Biblioteca";

// Exemplo de uso:
console.log("=== Exercício 4 - Sistema de Biblioteca ===\n");

const biblioteca = new Biblioteca();

// Adicionando livros
biblioteca.adicionarLivro({
  titulo: "1984",
  autor: "George Orwell",
  disponivel: true,
});

biblioteca.adicionarLivro({
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  disponivel: false,
});

biblioteca.adicionarLivro({
  titulo: "Dom Casmurro",
  autor: "Machado de Assis",
  disponivel: true,
});

biblioteca.adicionarLivro({
  titulo: "Harry Potter e a Pedra Filosofal",
  autor: "J.K. Rowling",
  disponivel: true,
});

biblioteca.adicionarLivro({
  titulo: "O Pequeno Príncipe",
  autor: "Antoine de Saint-Exupéry",
  disponivel: false,
});

// Listando todos os livros
biblioteca.listarTodosLivros();

// Exibindo apenas os livros disponíveis
biblioteca.exibirLivrosDisponiveis();
