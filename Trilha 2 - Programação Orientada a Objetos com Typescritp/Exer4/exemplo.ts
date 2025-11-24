import Temperatura from "./Temperatura";

// Exemplo de uso:
const temp1 = new Temperatura(25);
temp1.exibirConversoes();

console.log("\n--- Outra temperatura ---\n");

const temp2 = new Temperatura(0);
temp2.exibirConversoes();

console.log("\n--- Temperatura negativa ---\n");

const temp3 = new Temperatura(-40);
temp3.exibirConversoes();
