import Produto from "./Produto";

// Exemplo de uso:
const produto = new Produto("Notebook", 3500, 15);
produto.exibirInformacoes();

console.log("\n--- Outro produto ---\n");

const produto2 = new Produto("Mouse", 45.9, 120);
produto2.exibirInformacoes();
