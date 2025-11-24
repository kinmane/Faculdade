abstract class Inventory {
  abstract addItem(item: string, quantity: number): void;
  abstract removeItem(item: string): void;
  abstract getInventory(): Record<string, number>;
}

class WarehouseInventory extends Inventory {
  private inventory: Record<string, number>;

  constructor() {
    super();
    this.inventory = {};
  }

  addItem(item: string, quantity: number): void {
    if (quantity <= 0) {
      console.log("A quantidade deve ser maior que zero.");
      return;
    }

    if (this.inventory[item]) {
      this.inventory[item] += quantity;
      console.log(
        `${quantity} unidades de "${item}" adicionadas. Total: ${this.inventory[item]}`
      );
    } else {
      this.inventory[item] = quantity;
      console.log(`Item "${item}" adicionado com ${quantity} unidades.`);
    }
  }

  removeItem(item: string): void {
    if (this.inventory[item]) {
      delete this.inventory[item];
      console.log(`Item "${item}" removido do inventário.`);
    } else {
      console.log(`Item "${item}" não encontrado no inventário.`);
    }
  }

  getInventory(): Record<string, number> {
    return { ...this.inventory };
  }

  displayInventory(): void {
    console.log("\n=== Inventário do Armazém ===");
    const items = Object.entries(this.inventory);
    if (items.length === 0) {
      console.log("Inventário vazio.");
      return;
    }
    items.forEach(([item, quantity]) => {
      console.log(`${item}: ${quantity} unidades`);
    });
  }
}

class StoreInventory extends Inventory {
  private inventory: Record<string, number>;
  private readonly MAX_QUANTITY = 10;

  constructor() {
    super();
    this.inventory = {};
  }

  addItem(item: string, quantity: number): void {
    if (quantity <= 0) {
      console.log("A quantidade deve ser maior que zero.");
      return;
    }

    const currentQuantity = this.inventory[item] || 0;
    const newQuantity = currentQuantity + quantity;

    if (newQuantity > this.MAX_QUANTITY) {
      console.log(
        `Não é possível adicionar ${quantity} unidades de "${item}". ` +
          `Limite de ${this.MAX_QUANTITY} unidades por item. ` +
          `Quantidade atual: ${currentQuantity}`
      );
      return;
    }

    this.inventory[item] = newQuantity;
    console.log(
      `${quantity} unidades de "${item}" adicionadas. Total: ${this.inventory[item]}`
    );
  }

  removeItem(item: string): void {
    if (this.inventory[item]) {
      delete this.inventory[item];
      console.log(`Item "${item}" removido do inventário.`);
    } else {
      console.log(`Item "${item}" não encontrado no inventário.`);
    }
  }

  getInventory(): Record<string, number> {
    return { ...this.inventory };
  }

  displayInventory(): void {
    console.log("\n=== Inventário da Loja ===");
    const items = Object.entries(this.inventory);
    if (items.length === 0) {
      console.log("Inventário vazio.");
      return;
    }
    items.forEach(([item, quantity]) => {
      console.log(`${item}: ${quantity} unidades (máx: ${this.MAX_QUANTITY})`);
    });
  }
}

export { Inventory, WarehouseInventory, StoreInventory };
