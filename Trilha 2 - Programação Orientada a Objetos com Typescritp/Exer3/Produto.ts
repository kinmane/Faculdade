class Produto {
  nome: string;
  preco: number;
  quantidade: number;

  constructor(nome: string, preco: number, quantidade: number) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  calcularValorTotalEstoque(): number {
    return this.preco * this.quantidade;
  }

  exibirInformacoes(): void {
    console.log(`Produto: ${this.nome}`);
    console.log(`Preço unitário: R$ ${this.preco.toFixed(2)}`);
    console.log(`Quantidade em estoque: ${this.quantidade}`);
    console.log(
      `Valor total em estoque: R$ ${this.calcularValorTotalEstoque().toFixed(
        2
      )}`
    );
  }
}

export default Produto;
