import {
  PagamentoCartao,
  PagamentoBoleto,
  processarPagamentos,
} from "./Pagamento";

// Exemplo de uso:
const pagamento1 = new PagamentoCartao(
  150.0,
  "1234 5678 9012 3456",
  "Gabriel Rorato"
);

const pagamento2 = new PagamentoBoleto(250.5, "30/12/2025");

const pagamento3 = new PagamentoCartao(
  89.9,
  "9876 5432 1098 7654",
  "Maria Silva"
);

const pagamento4 = new PagamentoBoleto(450.0, "15/01/2026");

// Cartão inválido (apenas 12 dígitos)
const pagamento5 = new PagamentoCartao(100.0, "1234 5678 9012", "João Santos");

// Array com diferentes tipos de pagamento
const pagamentos = [pagamento1, pagamento2, pagamento3, pagamento4, pagamento5];

// Processa todos os pagamentos usando polimorfismo
processarPagamentos(pagamentos);
