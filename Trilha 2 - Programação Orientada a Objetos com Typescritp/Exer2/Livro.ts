class Livro {
  titulo: string;
  autor: string;
  paginas: number;
  lido: boolean;

  constructor(
    titulo: string,
    autor: string,
    paginas: number,
    lido: boolean = false
  ) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.lido = lido;
  }

  marcarComoLido(): void {
    this.lido = true;
    console.log(`O livro "${this.titulo}" foi marcado como lido.`);
  }

  exibirInformacoes(): void {
    console.log(`Título: ${this.titulo}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`Páginas: ${this.paginas}`);
    console.log(`Status: ${this.lido ? "Lido" : "Não lido"}`);
  }
}

export default Livro;
