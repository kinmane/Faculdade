import ContaBancaria from "./ContaBancaria";

// Exemplo de uso:
const conta = new ContaBancaria("Gabriel", 1000);
conta.depositar(500);
conta.sacar(200);
console.log(`Saldo final: R$ ${conta.consultarSaldo().toFixed(2)}`);
