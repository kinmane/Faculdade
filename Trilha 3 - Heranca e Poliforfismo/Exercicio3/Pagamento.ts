class Pagamento {
  valor: number;

  constructor(valor: number) {
    this.valor = valor;
  }

  processar(): void {
    console.log(`Processando pagamento de R$ ${this.valor.toFixed(2)}`);
  }
}

class PagamentoCartao extends Pagamento {
  numeroCartao: string;
  nomeTitular: string;

  constructor(valor: number, numeroCartao: string, nomeTitular: string) {
    super(valor);
    this.numeroCartao = numeroCartao;
    this.nomeTitular = nomeTitular;
  }

  private validarCartao(): boolean {
    // Validação simples: verifica se o número tem 16 dígitos
    const apenasNumeros = this.numeroCartao.replace(/\s/g, "");
    return apenasNumeros.length === 16 && /^\d+$/.test(apenasNumeros);
  }

  processar(): void {
    console.log("\n=== Processando Pagamento com Cartão ===");
    console.log(`Titular: ${this.nomeTitular}`);
    console.log(`Número do cartão: ${this.numeroCartao}`);
    console.log(`Valor: R$ ${this.valor.toFixed(2)}`);

    if (this.validarCartao()) {
      console.log("✓ Cartão válido!");
      console.log("✓ Pagamento processado com sucesso!");
    } else {
      console.log("✗ Cartão inválido! Pagamento não autorizado.");
    }
  }
}

class PagamentoBoleto extends Pagamento {
  dataVencimento: string;

  constructor(valor: number, dataVencimento: string) {
    super(valor);
    this.dataVencimento = dataVencimento;
  }

  private gerarCodigoBoleto(): string {
    // Gera um código de boleto fictício
    const codigoAleatorio = Math.floor(Math.random() * 1000000000000)
      .toString()
      .padStart(12, "0");
    return `${codigoAleatorio.slice(0, 5)}.${codigoAleatorio.slice(
      5,
      10
    )} ${codigoAleatorio.slice(10, 15)}.${codigoAleatorio.slice(
      15,
      21
    )} ${codigoAleatorio.slice(21, 26)}.${codigoAleatorio.slice(26, 32)}`;
  }

  processar(): void {
    console.log("\n=== Processando Pagamento com Boleto ===");
    console.log(`Valor: R$ ${this.valor.toFixed(2)}`);
    console.log(`Vencimento: ${this.dataVencimento}`);
    const codigoBoleto = this.gerarCodigoBoleto();
    console.log(`Código do boleto: ${codigoBoleto}`);
    console.log("✓ Boleto gerado com sucesso!");
  }
}

function processarPagamentos(pagamentos: Pagamento[]): void {
  console.log("====================================");
  console.log("   PROCESSAMENTO DE PAGAMENTOS");
  console.log("====================================");

  pagamentos.forEach((pagamento, index) => {
    console.log(`\n--- Pagamento ${index + 1} ---`);
    pagamento.processar();
  });

  console.log("\n====================================");
  console.log("   PROCESSAMENTO FINALIZADO");
  console.log("====================================");
}

export { Pagamento, PagamentoCartao, PagamentoBoleto, processarPagamentos };
