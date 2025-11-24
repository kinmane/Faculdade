interface Item {
  name: string;
  price: number;
  quantity: number;
}

class OrderV1 {
  private items: Item[];
  private totalPrice: number;
  private paymentStatus: string;
  private shippingStatus: string;

  constructor() {
    this.items = [];
    this.totalPrice = 0;
    this.paymentStatus = "Pendente";
    this.shippingStatus = "Não enviado";
  }

  addItem(item: Item): void {
    this.items.push(item);
    console.log(`Item "${item.name}" adicionado ao pedido.`);
  }

  calculateTotal(): void {
    this.totalPrice = this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    console.log(`Total calculado: R$ ${this.totalPrice.toFixed(2)}`);
  }

  processPayment(method: string): void {
    console.log(`Processando pagamento via ${method}...`);
    this.paymentStatus = "Pago";
    console.log("Pagamento processado com sucesso!");
  }

  updateShipping(status: string): void {
    this.shippingStatus = status;
    console.log(`Status de envio atualizado: ${status}`);
  }

  displayOrder(): void {
    console.log("\n=== Detalhes do Pedido ===");
    console.log(`Total de itens: ${this.items.length}`);
    console.log(`Valor total: R$ ${this.totalPrice.toFixed(2)}`);
    console.log(`Status do pagamento: ${this.paymentStatus}`);
    console.log(`Status do envio: ${this.shippingStatus}`);
  }
}

export { OrderV1, Item };
