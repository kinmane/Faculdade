import { Loja } from "./Loja";

// Exemplo de uso:
console.log("=== Exercício 3 - Cadastro e Busca de Produtos ===\n");

const loja = new Loja();

// Adicionando produtos
loja.adicionarProduto({ codigo: 101, nome: "Notebook Dell" });
loja.adicionarProduto({ codigo: 102, nome: "Mouse Logitech" });
loja.adicionarProduto({ codigo: 103, nome: "Teclado Mecânico" });
loja.adicionarProduto({ codigo: 104, nome: "Monitor LG 24" });
loja.adicionarProduto({ codigo: 105, nome: "Webcam HD" });

// Listando todos os produtos
loja.listarProdutos();

// Buscando produtos por código
console.log("\n=== Buscas ===");

const produto1 = loja.buscarProdutoPorCodigo(102);
if (produto1) {
  console.log(
    `\nProduto encontrado: ${produto1.nome} (Código: ${produto1.codigo})`
  );
} else {
  console.log("\nProduto não encontrado.");
}

const produto2 = loja.buscarProdutoPorCodigo(999);
if (produto2) {
  console.log(
    `\nProduto encontrado: ${produto2.nome} (Código: ${produto2.codigo})`
  );
} else {
  console.log("\nProduto com código 999 não encontrado.");
}

const produto3 = loja.buscarProdutoPorCodigo(104);
if (produto3) {
  console.log(
    `\nProduto encontrado: ${produto3.nome} (Código: ${produto3.codigo})`
  );
} else {
  console.log("\nProduto não encontrado.");
}
