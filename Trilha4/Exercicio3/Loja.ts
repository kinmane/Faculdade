interface ProdutoLoja {
  codigo: number;
  nome: string;
}

class Loja {
  private produtos: ProdutoLoja[];

  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto: ProdutoLoja): void {
    this.produtos.push(produto);
    console.log(`Produto "${produto.nome}" adicionado com código ${produto.codigo}`);
  }

  buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
    return this.produtos.find((produto) => produto.codigo === codigo);
  }

  listarProdutos(): void {
    console.log("\n=== Lista de Produtos ===");
    if (this.produtos.length === 0) {
      console.log("Nenhum produto cadastrado.");
      return;
    }
    this.produtos.forEach((produto) => {
      console.log(`Código: ${produto.codigo} - Nome: ${produto.nome}`);
    });
  }
}

export { ProdutoLoja, Loja };
