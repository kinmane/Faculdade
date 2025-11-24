interface Produto {
  id: number;
  nome: string;
  preco: number;
}

class ItemLoja implements Produto {
  id: number;
  nome: string;
  preco: number;

  constructor(id: number, nome: string, preco: number) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
  }

  exibirInformacoes(): void {
    console.log(`ID: ${this.id}`);
    console.log(`Nome: ${this.nome}`);
    console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
  }
}

export { Produto, ItemLoja };
