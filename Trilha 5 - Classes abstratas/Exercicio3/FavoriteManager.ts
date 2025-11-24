abstract class FavoriteManager {
  abstract addFavorite(item: string): void;
  abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
  private favorites: string[];

  constructor() {
    super();
    this.favorites = [];
  }

  addFavorite(item: string): void {
    // Verifica se o filme já existe
    if (this.favorites.includes(item)) {
      console.log(`O filme "${item}" já está na lista de favoritos.`);
      return;
    }

    this.favorites.push(item);
    console.log(`Filme "${item}" adicionado aos favoritos.`);
  }

  getFavorites(): string[] {
    // Retorna a lista ordenada alfabeticamente
    return [...this.favorites].sort();
  }

  displayFavorites(): void {
    console.log("\n=== Filmes Favoritos (Ordem Alfabética) ===");
    const sortedFavorites = this.getFavorites();
    if (sortedFavorites.length === 0) {
      console.log("Nenhum filme favorito cadastrado.");
      return;
    }
    sortedFavorites.forEach((movie, index) => {
      console.log(`${index + 1}. ${movie}`);
    });
  }
}

class BooksFavoriteManager extends FavoriteManager {
  private favorites: string[];

  constructor() {
    super();
    this.favorites = [];
  }

  addFavorite(item: string): void {
    // Verifica se o livro já existe
    if (this.favorites.includes(item)) {
      console.log(`O livro "${item}" já está na lista de favoritos.`);
      return;
    }

    // Insere no início da lista
    this.favorites.unshift(item);
    console.log(
      `Livro "${item}" adicionado aos favoritos (no início da lista).`
    );
  }

  getFavorites(): string[] {
    return [...this.favorites];
  }

  displayFavorites(): void {
    console.log(
      "\n=== Livros Favoritos (Ordem de Adição - Mais Recente Primeiro) ==="
    );
    if (this.favorites.length === 0) {
      console.log("Nenhum livro favorito cadastrado.");
      return;
    }
    this.favorites.forEach((book, index) => {
      console.log(`${index + 1}. ${book}`);
    });
  }
}

export { FavoriteManager, MoviesFavoriteManager, BooksFavoriteManager };
