(() => {
  let productTitle = 'My amazing product';
  // productTitle = null;                                             // Error, no se puede asignar null a una variable de tipo string
  // productTitle = () => {};                                         // Error, no se puede asignar una funcion a una variable de tipo string
  // productTitle = 123;                                              // Error, no se puede asignar un numero a una variable de tipo string
  productTitle = 'My amazing product changed';                        // Si se puede asignar un string a una variable de tipo string
  console.log('productTitle', productTitle);

  const productDesctiption = "You can use double or single quote";    // Se puede usar comillas dobles o simples para declarar un string
  console.log('productDesctiption', productDesctiption);

  let productPrice = 100;
  let isNew: boolean = false;

  // Las ventajas que trae usar 'backtick' son: escribir en multiples lineas, interpolacion de variables y expresiones para no hacer una concatenacion tradicional, tambien podemos conservar la identacion
  const summary = `
    title: ${productTitle},
    description: ${productDesctiption},
    price: ${productPrice},
    isNew: ${isNew}
  `;
  console.log('summary', summary);


  const myString: String = 'Hello World';                               // Esto funciona pero en una muy mala practica ya que String es un objeto lo cual puede traer problemas
})();