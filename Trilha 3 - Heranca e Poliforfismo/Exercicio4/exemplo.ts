import { Leao, Passaro, alimentarAnimais } from "./Animal";

// Exemplo de uso:
const leao1 = new Leao("Simba", 80);
const leao2 = new Leao("Mufasa", 120);
const passaro1 = new Passaro("Piu-piu", 60);
const passaro2 = new Passaro("Tweety", 90);

// Array com diferentes tipos de animais
const animais = [leao1, passaro1, leao2, passaro2];

// Alimenta todos os animais usando polimorfismo
alimentarAnimais(animais);

console.log("\n\n--- Testando leão com pouca energia ---");
const leaoCansado = new Leao("Leão Cansado", 20);
leaoCansado.statusEnergia();
leaoCansado.comer(); // Vai gastar energia mas não terá suficiente
leaoCansado.statusEnergia();
