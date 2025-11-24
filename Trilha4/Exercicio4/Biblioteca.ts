interface Livro {
  titulo: string;
  autor: string;
  disponivel: boolean;
}

class Biblioteca {
  private livros: Livro[];

  constructor() {
    this.livros = [];
  }

  adicionarLivro(livro: Livro): void {
    this.livros.push(livro);
    console.log(`Livro "${livro.titulo}" adicionado à biblioteca.`);
  }

  buscarLivrosDisponiveis(): Livro[] {
    return this.livros.filter((livro) => livro.disponivel === true);
  }

  listarTodosLivros(): void {
    console.log("\n=== Todos os Livros ===");
    if (this.livros.length === 0) {
      console.log("Nenhum livro cadastrado.");
      return;
    }
    this.livros.forEach((livro) => {
      const status = livro.disponivel ? "Disponível" : "Indisponível";
      console.log(`"${livro.titulo}" - ${livro.autor} [${status}]`);
    });
  }

  exibirLivrosDisponiveis(): void {
    const disponiveis = this.buscarLivrosDisponiveis();
    console.log("\n=== Livros Disponíveis ===");
    if (disponiveis.length === 0) {
      console.log("Nenhum livro disponível no momento.");
      return;
    }
    disponiveis.forEach((livro) => {
      console.log(`"${livro.titulo}" - ${livro.autor}`);
    });
  }
}

export { Livro, Biblioteca };
