interface Item {
  name: string;
  price: number;
  quantity: number;
}

class Cart {
  private items: Item[];

  constructor() {
    this.items = [];
  }

  addItem(item: Item): void {
    this.items.push(item);
    console.log(`Item "${item.name}" adicionado ao carrinho.`);
  }

  getItems(): Item[] {
    return [...this.items];
  }

  calculateTotal(): number {
    return this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  getItemCount(): number {
    return this.items.length;
  }
}

class Payment {
  private status: string;
  private amount: number;

  constructor() {
    this.status = "Pendente";
    this.amount = 0;
  }

  process(amount: number, method: string): void {
    this.amount = amount;
    console.log(
      `\nProcessando pagamento de R$ ${amount.toFixed(2)} via ${method}...`
    );
    this.status = "Pago";
    console.log("✓ Pagamento processado com sucesso!");
  }

  getStatus(): string {
    return this.status;
  }

  getAmount(): number {
    return this.amount;
  }
}

class Shipping {
  private status: string;
  private trackingCode: string;

  constructor() {
    this.status = "Não enviado";
    this.trackingCode = "";
  }

  updateStatus(status: string): void {
    this.status = status;
    console.log(`✓ Status de envio atualizado: ${status}`);
  }

  generateTrackingCode(): void {
    this.trackingCode = `BR${Math.random()
      .toString(36)
      .substring(2, 11)
      .toUpperCase()}`;
    console.log(`✓ Código de rastreamento gerado: ${this.trackingCode}`);
  }

  getStatus(): string {
    return this.status;
  }

  getTrackingCode(): string {
    return this.trackingCode;
  }
}

class OrderV2 {
  private cart: Cart;
  private payment: Payment;
  private shipping: Shipping;
  private orderId: string;

  constructor(cart: Cart, payment: Payment, shipping: Shipping) {
    this.cart = cart;
    this.payment = payment;
    this.shipping = shipping;
    this.orderId = `ORD-${Date.now()}`;
  }

  processOrder(paymentMethod: string): void {
    console.log(`\n=== Processando Pedido ${this.orderId} ===`);

    const total = this.cart.calculateTotal();
    console.log(`Total a pagar: R$ ${total.toFixed(2)}`);

    this.payment.process(total, paymentMethod);

    this.shipping.generateTrackingCode();
    this.shipping.updateStatus("Preparando para envio");
  }

  displayOrder(): void {
    console.log(`\n=== Detalhes do Pedido ${this.orderId} ===`);
    console.log(`Total de itens: ${this.cart.getItemCount()}`);
    console.log(`Valor total: R$ ${this.cart.calculateTotal().toFixed(2)}`);
    console.log(`Status do pagamento: ${this.payment.getStatus()}`);
    console.log(`Status do envio: ${this.shipping.getStatus()}`);
    if (this.shipping.getTrackingCode()) {
      console.log(`Código de rastreamento: ${this.shipping.getTrackingCode()}`);
    }
  }
}

export { OrderV2, Cart, Payment, Shipping, Item };
