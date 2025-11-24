import { Texto } from "./Documento";

// Exemplo de uso:
console.log("=== Exercício 2 - Documentos ===\n");

const texto1 = new Texto(
  "Relatório de Vendas",
  "As vendas do mês de novembro aumentaram em 25%."
);

const texto2 = new Texto(
  "Ata de Reunião",
  "Foram discutidos os projetos para o próximo trimestre."
);

const texto3 = new Texto(
  "Manual do Usuário",
  "Este manual contém instruções detalhadas sobre o uso do sistema."
);

console.log(texto1.exibir());
console.log("\n" + texto2.exibir());
console.log("\n" + texto3.exibir());
