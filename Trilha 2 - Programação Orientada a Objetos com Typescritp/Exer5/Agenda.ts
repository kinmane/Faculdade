class Agenda {
  compromissos: string[];

  constructor() {
    this.compromissos = [];
  }

  adicionarCompromisso(compromisso: string): void {
    this.compromissos.push(compromisso);
    console.log(`Compromisso "${compromisso}" adicionado com sucesso!`);
  }

  listarCompromissos(): void {
    if (this.compromissos.length === 0) {
      console.log("Nenhum compromisso agendado.");
      return;
    }

    console.log("=== Lista de Compromissos ===");
    this.compromissos.forEach((compromisso, index) => {
      console.log(`${index + 1}. ${compromisso}`);
    });
  }

  totalCompromissos(): number {
    return this.compromissos.length;
  }
}

export default Agenda;
