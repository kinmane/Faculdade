abstract class FiguraGeometrica {
  abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica {
  raio: number;

  constructor(raio: number) {
    super();
    this.raio = raio;
  }

  calcularArea(): number {
    return Math.PI * this.raio ** 2;
  }
}

class Quadrado extends FiguraGeometrica {
  lado: number;

  constructor(lado: number) {
    super();
    this.lado = lado;
  }

  calcularArea(): number {
    return this.lado ** 2;
  }
}

class Triangulo extends FiguraGeometrica {
  base: number;
  altura: number;

  constructor(base: number, altura: number) {
    super();
    this.base = base;
    this.altura = altura;
  }

  calcularArea(): number {
    return (this.base * this.altura) / 2;
  }
}

function imprimirAreas(figuras: FiguraGeometrica[]): void {
  console.log("=== Áreas das Figuras Geométricas ===\n");
  figuras.forEach((figura, index) => {
    const nomeFigura = figura.constructor.name;
    const area = figura.calcularArea();
    console.log(`${index + 1}. ${nomeFigura}: ${area.toFixed(2)} unidades²`);
  });
}

export { FiguraGeometrica, Circulo, Quadrado, Triangulo, imprimirAreas };
