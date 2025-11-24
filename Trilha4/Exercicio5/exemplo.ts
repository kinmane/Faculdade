import { BibliotecaGestao } from "./BibliotecaGestao";

console.log("=== Exercício 5 - Gestão de Bibliotecas Avançada ===\n");
const biblioteca = new BibliotecaGestao();
biblioteca.adicionarLivro({
  titulo: "1984",
  autor: "George Orwell",
  genero: "Ficção Científica",
  disponivel: true,
});
biblioteca.adicionarLivro({
  titulo: "A Revolução dos Bichos",
  autor: "George Orwell",
  genero: "Ficção Política",
  disponivel: true,
});
biblioteca.adicionarLivro({
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  genero: "Fantasia",
  disponivel: false,
});
biblioteca.adicionarLivro({
  titulo: "O Hobbit",
  autor: "J.R.R. Tolkien",
  genero: "Fantasia",
  disponivel: true,
});
biblioteca.adicionarLivro({
  titulo: "Dom Casmurro",
  autor: "Machado de Assis",
  genero: "Romance",
  disponivel: true,
});
biblioteca.adicionarLivro({
  titulo: "Harry Potter e a Pedra Filosofal",
  autor: "J.K. Rowling",
  genero: "Fantasia",
  disponivel: true,
});
biblioteca.adicionarLivro({
  titulo: "O Pequeno Príncipe",
  autor: "Antoine de Saint-Exupéry",
  genero: "Infantil",
  disponivel: false,
});
biblioteca.adicionarLivro({
  titulo: "Cem Anos de Solidão",
  autor: "Gabriel García Márquez",
  genero: "Realismo Mágico",
  disponivel: true,
});
biblioteca.adicionarLivro({
  titulo: "A Metamorfose",
  autor: "Franz Kafka",
  genero: "Ficção Filosófica",
  disponivel: false,
});
biblioteca.adicionarLivro({
  titulo: "Crime e Castigo",
  autor: "Fiódor Dostoiévski",
  genero: "Romance",
  disponivel: true,
});
biblioteca.listarTodosLivros();
biblioteca.exibirLivrosPorGenero("Fantasia");
biblioteca.exibirLivrosPorGenero("Romance");
biblioteca.exibirLivrosPorAutor("George Orwell");
biblioteca.exibirLivrosPorAutor("J.R.R. Tolkien");
biblioteca.exibirLivrosDisponiveisOrdenados();
