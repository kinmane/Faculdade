import { OrderV1 } from "./OrderV1";
import { OrderV2, Cart, Payment, Shipping } from "./OrderV2";

console.log("=== Exercício 1 - Separação de Responsabilidades ===\n");
console.log("=".repeat(60));

console.log("\n>>> VERSÃO 1: Classe Order com Múltiplas Responsabilidades <<<");
console.log("(Baixa Coesão e Alto Acoplamento)\n");

const orderV1 = new OrderV1();

orderV1.addItem({ name: "Notebook", price: 3500, quantity: 1 });
orderV1.addItem({ name: "Mouse", price: 50, quantity: 2 });
orderV1.addItem({ name: "Teclado", price: 150, quantity: 1 });

orderV1.calculateTotal();
orderV1.processPayment("Cartão de Crédito");
orderV1.updateShipping("Enviado");

orderV1.displayOrder();

console.log("\n" + "=".repeat(60));

console.log("\n>>> VERSÃO 2: Responsabilidades Separadas <<<");
console.log("(Alta Coesão e Baixo Acoplamento)\n");

const cart = new Cart();
const payment = new Payment();
const shipping = new Shipping();

cart.addItem({ name: "Notebook", price: 3500, quantity: 1 });
cart.addItem({ name: "Mouse", price: 50, quantity: 2 });
cart.addItem({ name: "Teclado", price: 150, quantity: 1 });

const orderV2 = new OrderV2(cart, payment, shipping);

orderV2.processOrder("Cartão de Crédito");

shipping.updateStatus("Em trânsito");

orderV2.displayOrder();

console.log("\n" + "=".repeat(60));
console.log("\n>>> COMPARAÇÃO <<<");
console.log("\nVersão 1 (Problemática):");
console.log("- Uma classe fazendo tudo (baixa coesão)");
console.log("- Difícil de testar e manter");
console.log("- Mudanças em uma funcionalidade afetam toda a classe");

console.log("\nVersão 2 (Melhorada):");
console.log("- Cada classe tem uma responsabilidade única (alta coesão)");
console.log("- Fácil de testar cada componente isoladamente");
console.log("- Baixo acoplamento através de injeção de dependências");
console.log("- Mudanças isoladas não afetam outras funcionalidades");
