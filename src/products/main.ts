// Importamos todo lo que necesitamos de product.service.ts para que aca solo nos encarguemos de usar las funciones.
import { createProduct, calcularStock, products } from "./product.service";

createProduct({
  name: 'Zapato',
  createdAt: new Date(1993, 10, 10),
  stock: 12,
});

createProduct({
  name: 'Camisa',
  createdAt: new Date(1993, 10, 10),
  stock: 22,
  size: 'M'
});

console.log(products);

const total = calcularStock();
console.log('Total productos en Stock:', total);

