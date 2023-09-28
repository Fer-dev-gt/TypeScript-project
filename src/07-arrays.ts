(() => {
  // Declarando un array de datos tipo 'number' de manera inferida al solo asignarle valores numericos, TypeScript solo aceptara valores numericos
  let prices = [1,2,2,1,1,212];
  // prices.push('asas');                                 // Ya que el Array 'prices' es de tipo 'number' y solo tipo 'number' no se puede agregar un string
  // prices.push(true);                                   // Tampoco acepta datos tipo 'boolean'
  // prices.push({});                                     // Tampoco acepta datos tipo 'object'
  prices.push(121212);                                    // Si acepta datos tipo 'number'


  let prices2 = [1,2,2,1,1,212, 'hola', true];            // Aqui este Array aceptara datos de tipo 'number', 'string' y 'boolean' ya que fueron declarados de manera implicita '(string | number | boolean)[]'

  let products = ['hola', true];
  products.push(12);                                      // No me deja agregar un dato tipo 'number' ya que el Array 'products' solo acepta datos tipo 'string' y 'boolean'
  products.push(false);                                   // Este tipo de valor si lo acepta ya que es de tipo 'boolean'



  // Manera de declarar un Array de datos de tipo 'string', 'number' y boolean de manera explicita, esto nos sirve cuando al declararlo no tenemos listo un tipo de dato pero sabemos que en el futuro se agregaran mas tipos de datos, por eso los declaramos de una vez
  let mixedArray: (number | string | boolean)[] = ['hola', true];            // Aqui declaramos un Array de datos de tipo 'string', 'number' y boolean de manera explicita y podremos en el futoro agregarle valores tipo 'number' aunque no le hayamos metido ninguno al declararlo al array
  mixedArray.push(12);                                                       // Me acepta un dato tipo 'number' ya que el Array 'mixedArray' acepta datos tipo 'string', 'number' y 'boolean'
  mixedArray.push('as');                                                     // Me acepta un dato tipo 'string' ya que el Array 'mixedArray' acepta datos tipo 'string', 'number' y 'boolean'
  mixedArray.push(true);                                                     // Me acepta un dato tipo 'boolean' ya que el Array 'mixedArray' acepta datos tipo 'string', 'number' y 'boolean'
  mixedArray.push({});                                                       // Este array no acepta datos tipo 'object' ya que no fue declarado de manera explicita
  mixedArray.push([]);                                                       // Tampoco acepta datos tipo 'array' ya que no fue declarado de manera explicita


  let mixedArrayObject: (number | string | boolean | object)[] = ['hola', true];      // Ahora si acepta datos tipo 'object' ya que fue declarado de manera explicita, en JavaScript los arrays son objetos y casi todo es un objeto, se tiene que escribir 'object' con minuscula para que se apliquen las restricciones establecidas
  mixedArrayObject.push(12);
  mixedArrayObject.push('as');
  mixedArrayObject.push(true);
  mixedArrayObject.push({});                                                          // Ahora si acepta datos tipo 'object' ya que fue declarado de manera explicita
  mixedArrayObject.push([]);                                                          // Ahora si acepta datos tipo 'array' ya que fue declarado de manera explicita


  // Como este array solo es de datos tipo 'number' puede operar con seguridad que solo son numeros
  let numbers = [1,2,2,1,1,212];
  numbers.map((item) => item * 2);


  // Como este array solo es de datos tipo 'number' puede operar con seguridad que solo son numeros
  let notNumbers = ['a', 'b', 'c'];
  notNumbers.map((item) => item * 2);                                                   // Aqui me marca un error ya que no puedo multiplicar un string por un numero

})();