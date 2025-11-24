class Animal {
  private energia: number;
  protected nome: string;

  constructor(nome: string, energiaInicial: number = 100) {
    this.nome = nome;
    this.energia = energiaInicial;
  }

  protected getEnergia(): number {
    return this.energia;
  }

  protected setEnergia(valor: number): void {
    this.energia = Math.max(0, valor); // Não permite energia negativa
  }

  comer(): void {
    this.energia += 10;
    console.log(`${this.nome} comeu e ganhou 10 de energia.`);
  }

  statusEnergia(): void {
    console.log(`${this.nome} - Energia atual: ${this.energia}`);
  }
}

class Leao extends Animal {
  constructor(nome: string, energiaInicial: number = 100) {
    super(nome, energiaInicial);
  }

  comer(): void {
    console.log(`\n${this.nome} está caçando...`);

    // Gasta energia para caçar
    const energiaGasta = 30;
    this.setEnergia(this.getEnergia() - energiaGasta);
    console.log(`⚡ Gastou ${energiaGasta} de energia na caçada.`);

    if (this.getEnergia() <= 0) {
      console.log(`❌ ${this.nome} não tem energia suficiente para caçar!`);
      return;
    }

    // Recupera energia ao se alimentar da caça
    const energiaRecuperada = 50;
    this.setEnergia(this.getEnergia() + energiaRecuperada);
    console.log(
      `✓ Caçou com sucesso e recuperou ${energiaRecuperada} de energia!`
    );
  }
}

class Passaro extends Animal {
  constructor(nome: string, energiaInicial: number = 100) {
    super(nome, energiaInicial);
  }

  comer(): void {
    console.log(`\n${this.nome} está se alimentando...`);

    // Apenas aumenta energia
    const energiaGanha = 20;
    this.setEnergia(this.getEnergia() + energiaGanha);
    console.log(`✓ Se alimentou e ganhou ${energiaGanha} de energia!`);
  }
}

function alimentarAnimais(animais: Animal[]): void {
  console.log("=========================================");
  console.log("   ALIMENTAÇÃO DOS ANIMAIS");
  console.log("=========================================");

  animais.forEach((animal, index) => {
    console.log(`\n--- Animal ${index + 1} ---`);
    animal.statusEnergia();
    animal.comer();
    animal.statusEnergia();
  });

  console.log("\n=========================================");
  console.log("   ALIMENTAÇÃO FINALIZADA");
  console.log("=========================================");
}

export { Animal, Leao, Passaro, alimentarAnimais };
