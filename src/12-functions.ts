(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';                                  // Declaramos un 'Literal Type' para las tallas

  function createProductToJson(                                         // Recibo unos parametros y retorno un objeto en formato JSON
    title: string,                                                      // En el apartado de los parametros podemos definir el tipo de dato que recibimos por cada parametro
    createdAt: Date,                                                    // Acá podemos usar Date porque es un tipo de dato de JS y no tiene equivalente primitivo
    stock: number,
    size: Sizes
  ) {
    return {                                                            // Retornamos un objeto en formato JSON
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto1 = createProductToJson('P1', new Date(), 12, 'XL');    // No marca error siempre y cuando le pasemos los parametros que definimos en la funcion y sean del tipo de dato que definimos

  console.log(producto1);                                               // Imprimimos el objeto
  console.log(producto1.title);                                         // Como es un objeto tambien podemos acceder a sus propiedades e imprimirlas
  console.log(producto1.stock);
  console.log(producto1.size);                                          // El output es 'XL' porque es el valor que le pasamos al parametro 'size'


  // Esta es una segunda version de la funcion anterior, usamos y Arrow Function y definimos el tipo de dato que retornamos pero tambien hay parametros opcionales usando el 'operator ?'
  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes                                                        // El parametro 'size' es opcional, por lo tanto no es obligatorio pasarlo, esto al colocar el 'operator ?' que indica que es opcional
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto2 = createProductToJsonV2('P1', new Date(), 12)         // No marca error porque el parametro 'size' es opcional, lo podemos enviar o no y no marca error

  console.log(producto2);
  console.log(producto2.title);
  console.log(producto2.stock);
  console.log(producto2.size);                                          // El output es 'undefined' porque no le pasamos el parametro 'size' a la funcion y es un parametro opcional
})();