// Vamos establecer nuestro 'scope' para no tener problemas con las variables
(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice: ', productPrice);


  let customerAge: number = 27;
  customerAge = customerAge + 1;                                // Esto si lo permite TypeScript
  // customerAge = customerAge + '1';                           // Esto no lo permite TypeScript, en JavaScript el output seria '281' pero en TypeScript no
  console.log('customerAge: ', customerAge);


  // Si solo queremos declarar una variable y no asignarle un valor, obligatoriamente debemos especificar el tipo de dato
  let productsInStock: number;
  console.log('productsInStock: ', productsInStock);            // Esto nos dara 'undefined' en JavaScript, pero en TypeScript nos dara un error ya que no se le ha asignado un valor, este erro no impedira que se ejecute el codigo javascript pero si nos dara un error en la consola de TypeScript
  if(productsInStock > 10) {                                    // Aca tambien nos dara un error ya que no se le ha asignado un valor a la variable 'productsInStock'
    console.log('is available');
  }

  let discount = parseInt('100');                               // Al usar 'parseInt' tomamos un valor de tipo 'string' y lo convertimos a 'number' esto es algo que no se puede hacer en JavaScript
  console.log('discount: ', discount);
  if(discount <= 200) {
    console.log('discount is a not NaN');
  } else {
    console.log('discount is NaN');
  }

  // Los valor hexadecimales tambien entran en el contexto de los 'numbers'
  let hex = 0xfff;                                                // Esto es un valor hexadecimal que tambien es un 'number'
  console.log('hex: ', hex);

  // Tambien podemos usar valores binarios ya que cuentan como 'numbers'
  let bin = 0b1010;            // output 10                       // Esto es un valor binario que tambien es un 'number', si le coloco un 2 al final del valor binario me dara un error ya que no es un valor binario valido
  console.log('bin: ', bin);


  // No es buena idea declarar un valor 'number' con Number, ya que esto es un objeto y no un valor primitivo
  const myNumber: Number = 10;                                    // Esto es un objeto y no un valor primitivo
})();