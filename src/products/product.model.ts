// Aqui definimos el modelo de datos de un producto como el nombre, la fecha de creación, el stock y el tamaño.
// Tambien definimos los 'Sizes' validos para un producto.

// Exportamos estos tipos para poder usarlos en otros archivos.
// Al usar un Moduls ya no tenemos que definir todo esto en una arrow function autoejecutable.

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export type Product = {
  name: string,                                                   // Si hacemos un cambio al nombre de alguna propiedad, este cambio se reflejara en todos los archivos que importen este tipo. Lo cual nos obliga a mantener un estandar en el nombre de las propiedades para encontrar errores a tiempo.
  createdAt: Date,
  stock: number,
  size?: Sizes
};