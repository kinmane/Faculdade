import { MoviesFavoriteManager, BooksFavoriteManager } from "./FavoriteManager";

console.log("=== Exercício 3 - Gerenciador de Favoritos ===\n");
console.log("--- FILMES FAVORITOS ---");
const movies = new MoviesFavoriteManager();
movies.addFavorite("O Poderoso Chefão");
movies.addFavorite("Matrix");
movies.addFavorite("Interestelar");
movies.addFavorite("A Origem");
movies.addFavorite("Pulp Fiction");
console.log("\n--- Tentando adicionar filme duplicado ---");
movies.addFavorite("Matrix");
movies.displayFavorites();
console.log("\n--- Adicionando mais filmes ---");
movies.addFavorite("Clube da Luta");
movies.addFavorite("Forrest Gump");
movies.displayFavorites();
console.log("\n--- Lista retornada pelo método getFavorites() ---");
console.log(movies.getFavorites());
console.log("\n" + "=".repeat(50));
console.log("\n--- LIVROS FAVORITOS ---");
const books = new BooksFavoriteManager();
books.addFavorite("1984");
books.addFavorite("O Senhor dos Anéis");
books.addFavorite("Dom Casmurro");
books.addFavorite("Harry Potter");
console.log("\n--- Tentando adicionar livro duplicado ---");
books.addFavorite("1984");
books.displayFavorites();
console.log("\n--- Adicionando mais livros (vão para o início) ---");
books.addFavorite("O Pequeno Príncipe");
books.addFavorite("A Revolução dos Bichos");
books.displayFavorites();
console.log("\n--- Lista retornada pelo método getFavorites() ---");
console.log(books.getFavorites());
console.log("\n--- Observação ---");
console.log(
  "Note que os filmes são exibidos em ordem alfabética, " +
    "enquanto os livros são exibidos com os mais recentemente adicionados primeiro."
);
