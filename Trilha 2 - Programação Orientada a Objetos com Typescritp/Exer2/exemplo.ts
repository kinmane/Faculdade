import Livro from "./Livro";

// Exemplo de uso:
const livro = new Livro("1984", "George Orwell", 328);
livro.exibirInformacoes();
console.log("\n--- Marcando como lido ---\n");
livro.marcarComoLido();
livro.exibirInformacoes();
