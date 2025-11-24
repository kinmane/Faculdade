import { ItemLoja } from "./Produto";

// Exemplo de uso:
console.log("=== Exercício 1 - Produtos ===\n");

const item1 = new ItemLoja(1, "Notebook", 3500.0);
const item2 = new ItemLoja(2, "Mouse", 45.9);
const item3 = new ItemLoja(3, "Teclado", 150.0);

console.log("--- Item 1 ---");
item1.exibirInformacoes();

console.log("\n--- Item 2 ---");
item2.exibirInformacoes();

console.log("\n--- Item 3 ---");
item3.exibirInformacoes();
