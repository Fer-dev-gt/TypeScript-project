(() => {

  type Sizes = 'S' | 'M' | 'L' | 'XL';                            // Definimos un tipo 'Sizes' que solo puede ser 'S', 'M', 'L' o 'XL'
  type Product = {                                                // Definimos un Alias Type llamado 'Product' que es un Objecto con propiedades que tienen definidas su tipo de dato, esto lo hacemos para reutilizarlo en la función 'addProduct'
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  };

  const products: Product[] = [];                                 // Tambien podemos usar 'Product' para definir los datos que pueden ser agregados al arreglo 'products', asi protegemos el arreglo de que no se agreguen datos que no cumplan con las propiedades como datos de tipo 'string' o 'number'

  const addProduct = (data: Product) => {                         // Aca solo definimos un parametro 'data' que recibira un Objeto de tipo 'Product' con los datos que definimos en el Alias Type 'Product'
    products.push(data);
  }

  addProduct({
    title: 'Zapato',
    createdAt: new Date(1993, 10, 10),
    stock: 12,
  });

  addProduct({
    title: 'Camisa',
    createdAt: new Date(1993, 10, 10),
    stock: 22,
    size: 'M'
  });

  console.log(products);

  products.push(2323);                                          // Me marca erro porque el arreglo 'products' solo puede contener datos de tipo 'Product'
  products.push('2323');                                        // No acepta datos de tipo 'string'
  products.push({});                                            // No acepta datos de tipo 'object' que no cumplan con las propiedades definidas en el Alias Type 'Product'
  products. push({                                              // Aca falta mandar la propiedad 'stock' que es de tipo 'number' y que no es opcional
    title: 'Producto Sin Stock',
    createdAt: new Date(1992, 1, 10),
  })

})();