(() => {
// Usamos como parametro un Objeto cuando tenemos que pasar muchas propiedades, asi no tenemos que pasar una por una

const login = (data: {email: string, password: number}) => {            // Definicimos el parametro 'data' como un Objeto con dos propiedades, 'Email' que tiene que ser de tipo 'string' y 'password' que tiene que ser de tipo 'number'
  console.log(data.email, data.password);
};

login({                                             // Si solo mandamos un objeto cualquiera, nos dara error, ya que no cumple con las propiedades que definimos en el parametro
  email: 'fernando@gmail.com',                      // La propiedad 'email' tiene que ser de tipo 'string'
  password: 12121212                                // La propiedad 'password' tiene que ser de tipo 'number'
});


type Sizes = 'S' | 'M' | 'L' | 'XL';                        // Definimos un tipo 'Sizes' que solo puede ser 'S', 'M', 'L' o 'XL'

const products: any[] = [];                                 // Definimos un arreglo de tipo 'any' llamado 'products' que puede contener cualquier tipo de dato, lo inicializamos vacio

const addProduct = (data: {
  title: string,                                            // Definimos la propiedad 'title' que tiene que ser de tipo 'string'
  createdAt: Date,
  stock: number,
  size?: Sizes                                              // La propiedad 'size' es opcional, puede ser de tipo 'Sizes' o 'undefined' osea que podemos no mandarla
}) => {
  products.push(data);                                      // Agregamos el objeto 'data' al arreglo 'products'
}

addProduct({                                                // Cuando ejecuto esta función no mande la propiedad 'size' ya que es opcional asi que no pasa ningun error
  title: 'Zapato',
  createdAt: new Date(1993, 10, 10),
  stock: 12,
});

console.log(products);

addProduct({
  title: 'Zapato',
  createdAt: new Date(1993, 10, 10),
  stock: 12,
  size: 'S'                                                   // Si no mando una de las opciones que definimos en el tipo 'Sizes' nos dara error
});

console.log(products);                                        // El output de esta función es un arreglo con dos objetos, el primero no tiene la propiedad 'size' y el segundo si


})();