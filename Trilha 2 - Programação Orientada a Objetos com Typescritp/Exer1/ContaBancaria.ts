class ContaBancaria {
  titular: string;
  saldo: number;

  constructor(titular: string, saldoInicial: number = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(valor: number): void {
    if (valor <= 0) {
      console.log("O valor do depósito deve ser positivo.");
      return;
    }
    this.saldo += valor;
    console.log(
      `Depósito de R$ ${valor.toFixed(
        2
      )} realizado. Saldo atual: R$ ${this.saldo.toFixed(2)}`
    );
  }

  sacar(valor: number): void {
    if (valor <= 0) {
      console.log("O valor do saque deve ser positivo.");
      return;
    }
    if (valor > this.saldo) {
      console.log("Saldo insuficiente para realizar o saque.");
      return;
    }
    this.saldo -= valor;
    console.log(
      `Saque de R$ ${valor.toFixed(
        2
      )} realizado. Saldo atual: R$ ${this.saldo.toFixed(2)}`
    );
  }

  consultarSaldo(): number {
    return this.saldo;
  }
}

export default ContaBancaria;
