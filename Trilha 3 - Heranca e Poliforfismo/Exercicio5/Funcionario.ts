abstract class Funcionario {
  private nome: string;
  private salario: number;

  constructor(nome: string, salario: number) {
    this.nome = nome;
    this.salario = salario;
  }

  getNome(): string {
    return this.nome;
  }

  getSalario(): number {
    return this.salario;
  }

  setSalario(salario: number): void {
    if (salario > 0) {
      this.salario = salario;
    }
  }

  abstract calcularBonus(): number;

  calcularSalarioComBonus(): number {
    return this.salario + this.calcularBonus();
  }

  exibirDetalhes(): void {
    console.log(`Nome: ${this.nome}`);
    console.log(`Cargo: ${this.constructor.name}`);
    console.log(`Salário base: R$ ${this.salario.toFixed(2)}`);
    console.log(`Bônus: R$ ${this.calcularBonus().toFixed(2)}`);
    console.log(
      `Salário total: R$ ${this.calcularSalarioComBonus().toFixed(2)}`
    );
  }
}

class Gerente extends Funcionario {
  constructor(nome: string, salario: number) {
    super(nome, salario);
  }

  calcularBonus(): number {
    return this.getSalario() * 0.1; // 10% de bônus
  }
}

class Operario extends Funcionario {
  constructor(nome: string, salario: number) {
    super(nome, salario);
  }

  calcularBonus(): number {
    return this.getSalario() * 0.05; // 5% de bônus
  }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
  console.log("=========================================");
  console.log("   CÁLCULO DE SALÁRIOS COM BÔNUS");
  console.log("=========================================\n");

  let totalSalarios = 0;
  let totalBonus = 0;

  funcionarios.forEach((funcionario, index) => {
    console.log(`--- Funcionário ${index + 1} ---`);
    funcionario.exibirDetalhes();
    console.log();

    totalSalarios += funcionario.calcularSalarioComBonus();
    totalBonus += funcionario.calcularBonus();
  });

  console.log("=========================================");
  console.log(`Total em salários: R$ ${totalSalarios.toFixed(2)}`);
  console.log(`Total em bônus: R$ ${totalBonus.toFixed(2)}`);
  console.log("=========================================");
}

export { Funcionario, Gerente, Operario, calcularSalarioComBonus };
