(() => {

  // let myNumber: number = undefined;                // No se puede asignar un valor 'null' o 'undefined' a una variable de tipo 'string' o 'number' porque no son compatibles
  // let myString: string = null;

  // let myNull = null;                               // Si no especificamos que va a ser 'null' o 'undefined', estos son inferidos como tipo 'any'
  // let myUndefined = undefined                      // Si no especificamos que va a ser 'null' o 'undefined', estos son inferidos como tipo 'any'

  let myNull: null = null;                            // Aqui el valor ya no se seria 'any' sino 'null' o 'undefined' porque estamos especificando el tipo de dato
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;                 // En los pocos casos que se necesite, se puede especificar que una variable puede ser de tipo 'null' o 'undefined' al inicio pero que despues va a ser de un tipo en especifico como number o string
  myNumber = 12;                                      // Esta variable fue inicializada como 'null' pero despues se le asigno un valor de tipo 'number' lo cual es posible porque se especifico que podia ser de tipo 'null' o 'number'

  let myString: string | undefined = undefined;       // En los pocos casos que se necesite, se puede especificar que una variable puede ser de tipo 'null' o 'undefined' al inicio pero que despues va a ser de un tipo en especifico como number o string
  myString = 'Hello World';


  function hi(name: string | null) {                  // Esta funcion puede recibir un parametro de tipo 'string' o 'null' para el nombre
    let hello = 'Hello ';
    if(name) {                                        // Hacemos una validación solo usando el parametro 'name' porque si es 'null' o 'undefined' se va a comportar como 'false' y si tiene un string se va a comportar como 'true'
      hello += name;                                  // Concatenamos el nombre a la variable 'hello'
    } else {
      hello += 'nobody';                              // Si el parametro 'name' es 'null' concatenamos 'nobody' a la variable 'hello'
    }
    console.log(hello);
  }

  hi('Fernando');                                     // El output de esta funcion es 'Hello Fernando'
  hi(null);                                           // El output de esta funcion es 'Hello nobody'

  
  // Usamos el 'optional chaining' para hacer la funcion 'hi' más corta
  function hiV2(name: string | null) {                // Forma más corta de hacer la funcion 'hi' usando el operador 'optional chaining' que es el '??', es como un 'if' pero más corto
    let hello = 'Hello ';
    hello += name?.toUpperCase() || 'nobody';         // Utilizando el 'optional chaining' si el parametro 'name' es 'null' se va a comportar como 'false' y si tiene un string se va a comportar como 'true' y si es 'true' se va a ejecutar el metodo 'toUpperCase' y si es 'false' se va a concatenar 'nobody' a la variable 'hello
    console.log(hello);
  }

  hiV2('Fernando');                                   // El output de esta funcion es 'Hello FERNANDO'
  hiV2(null);                                         // El output de esta funcion es 'Hello nobody'
})();