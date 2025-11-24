import {
  Circulo,
  Quadrado,
  Triangulo,
  imprimirAreas,
} from "./FiguraGeometrica";

// Exemplo de uso:
const circulo = new Circulo(5);
const quadrado = new Quadrado(4);
const triangulo = new Triangulo(6, 8);

// Array com diferentes figuras geométricas
const figuras = [circulo, quadrado, triangulo];

// Imprime as áreas de todas as figuras
imprimirAreas(figuras);

console.log("\n--- Testando com mais figuras ---\n");

const figuras2 = [
  new Circulo(10),
  new Quadrado(7),
  new Triangulo(5, 12),
  new Circulo(3),
  new Quadrado(2.5),
];

imprimirAreas(figuras2);
