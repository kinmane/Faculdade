import Agenda from "./Agenda";

// Exemplo de uso:
const minhaAgenda = new Agenda();

console.log("--- Listando agenda vazia ---");
minhaAgenda.listarCompromissos();

console.log("\n--- Adicionando compromissos ---");
minhaAgenda.adicionarCompromisso("Reunião com cliente às 10h");
minhaAgenda.adicionarCompromisso("Almoço com equipe às 12h30");
minhaAgenda.adicionarCompromisso("Dentista às 15h");
minhaAgenda.adicionarCompromisso("Academia às 18h");

console.log("\n--- Listando todos os compromissos ---");
minhaAgenda.listarCompromissos();

console.log(`\nTotal de compromissos: ${minhaAgenda.totalCompromissos()}`);
