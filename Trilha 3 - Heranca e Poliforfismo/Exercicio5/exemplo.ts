import { Gerente, Operario, calcularSalarioComBonus } from "./Funcionario";

// Exemplo de uso:
const gerente1 = new Gerente("Ana Paula", 8000);
const gerente2 = new Gerente("Carlos Eduardo", 10000);
const operario1 = new Operario("João Silva", 3000);
const operario2 = new Operario("Maria Santos", 3500);
const operario3 = new Operario("Pedro Costa", 2800);

// Array com diferentes tipos de funcionários
const funcionarios = [gerente1, operario1, gerente2, operario2, operario3];

// Calcula e exibe os salários com bônus usando polimorfismo
calcularSalarioComBonus(funcionarios);
