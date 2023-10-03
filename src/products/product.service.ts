// En este archivo nos enfocaremos en definir las funciones que usaremos en main.ts

import { Product, Sizes } from './product.model';               // Podemos importar los tipos definidos en el modelo de datos. Ya sea todos o solo los que necesitemos.

// Podemos exportar variables, funciones, clases, etc. para usarlas en otros archivos.
export const products: Product[] = [];

export const createProduct = (data: Product) => {               // Si cambiamos el nombre de la función, este cambio se reflejara en todos los archivos que importen esta función. Lo cual nos obliga a mantener un estandar en el nombre de las funciones para encontrar errores a tiempo.
  products.push(data);
}

export const calcularStock = (): number =>{                                     // Función que calcula el stock total de todos los productos.
  return products.reduce((total, product) => total + product.stock, 0);         // Usamo el método 'reduce' para sumar el stock de todos los productos.
}