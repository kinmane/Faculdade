interface LivroBiblioteca {
  titulo: string;
  autor: string;
  genero: string;
  disponivel: boolean;
}

class BibliotecaGestao {
  private livros: LivroBiblioteca[];

  constructor() {
    this.livros = [];
  }

  adicionarLivro(livro: LivroBiblioteca): void {
    this.livros.push(livro);
    console.log(`Livro "${livro.titulo}" adicionado à biblioteca.`);
  }

  filtrarPorGenero(genero: string): LivroBiblioteca[] {
    return this.livros.filter(
      (livro) => livro.genero.toLowerCase() === genero.toLowerCase()
    );
  }

  buscarPorAutor(autor: string): LivroBiblioteca[] {
    return this.livros.filter(
      (livro) => livro.autor.toLowerCase() === autor.toLowerCase()
    );
  }

  obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
    return this.livros
      .filter((livro) => livro.disponivel === true)
      .sort((a, b) => a.titulo.localeCompare(b.titulo));
  }

  listarTodosLivros(): void {
    console.log("\n=== Catálogo Completo ===");
    if (this.livros.length === 0) {
      console.log("Nenhum livro cadastrado.");
      return;
    }
    this.livros.forEach((livro) => {
      const status = livro.disponivel ? "✓" : "✗";
      console.log(
        `[${status}] "${livro.titulo}" - ${livro.autor} (${livro.genero})`
      );
    });
  }

  exibirLivrosPorGenero(genero: string): void {
    const livros = this.filtrarPorGenero(genero);
    console.log(`\n=== Livros do Gênero: ${genero} ===`);
    if (livros.length === 0) {
      console.log(`Nenhum livro encontrado no gênero "${genero}".`);
      return;
    }
    livros.forEach((livro) => {
      const status = livro.disponivel ? "Disponível" : "Indisponível";
      console.log(`"${livro.titulo}" - ${livro.autor} [${status}]`);
    });
  }

  exibirLivrosPorAutor(autor: string): void {
    const livros = this.buscarPorAutor(autor);
    console.log(`\n=== Livros de: ${autor} ===`);
    if (livros.length === 0) {
      console.log(`Nenhum livro encontrado do autor "${autor}".`);
      return;
    }
    livros.forEach((livro) => {
      const status = livro.disponivel ? "Disponível" : "Indisponível";
      console.log(`"${livro.titulo}" (${livro.genero}) [${status}]`);
    });
  }

  exibirLivrosDisponiveisOrdenados(): void {
    const livros = this.obterLivrosDisponiveisOrdenados();
    console.log("\n=== Livros Disponíveis (Ordenados Alfabeticamente) ===");
    if (livros.length === 0) {
      console.log("Nenhum livro disponível no momento.");
      return;
    }
    livros.forEach((livro, index) => {
      console.log(`${index + 1}. "${livro.titulo}" - ${livro.autor} (${livro.genero})`);
    });
  }
}

export { LivroBiblioteca, BibliotecaGestao };
