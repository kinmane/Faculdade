import { Veiculo, Carro, Bicicleta } from "./Veiculo";

// Exemplo de uso:
console.log("--- Testando a classe base Veiculo ---");
const veiculo = new Veiculo();
veiculo.mover();

console.log("\n--- Testando a subclasse Carro ---");
const carro = new Carro();
carro.mover();

console.log("\n--- Testando a subclasse Bicicleta ---");
const bicicleta = new Bicicleta();
bicicleta.mover();
