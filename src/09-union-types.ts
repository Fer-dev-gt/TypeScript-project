// Usamos los 'Union Types' para declarar una variable que puede tener diferentes tipos de datos pero no todos como es en el caso de 'any' se utiliza el símbolo de pipe '|' entre los tipos de datos que se pueden asignar a la variable.
(() => {
  let userId: string | number;                                  // Usamos los 'Union Types' para declarar una variable que puede tener diferentes tipos de datos pero no todos como es en el caso de 'any' se utiliza el símbolo de pipe '|' entre los tipos de datos que se pueden asignar a la variable. Esta variable puede ser de tipo 'string' o 'number' pero no de tipo 'boolean' o 'object' o 'any' o 'null' o 'undefined' o 'void' o 'never' o 'unknown'.
  userId = 1212;
  userId = 'asasa';
  // userId = true;                                             // No podemos asignar un valor de tipo 'boolean' a una variable de tipo 'string | number'.

  // En una función en la parte de los parámetros podemos usar 'Union Types' para indicar que un parámetro puede ser de un tipo de dato o de otro tipo de dato en este caso el parámetro 'myText' puede ser de tipo 'string' o de tipo 'number' pero no de cualquier otro tipo de dato.
  function greeting(myText: string | number) {
    if(typeof myText === 'string') {                            // Podemos usar el operador 'typeof' para saber si el parámetro 'myText' es de tipo 'string' o de tipo 'number'. El '===' es para comparar el tipo de dato y el valor.
      console.log(`string: ${myText.toUpperCase()}`);           // Si el parámetro 'myText' es de tipo 'string' podemos usar los métodos de los strings como 'toUpperCase()'.
    } else {
      console.log(`number: ${myText.toFixed(1)}`);              // Si el parámetro 'myText' es de tipo 'number' podemos usar los métodos de los numbers como 'toFixed()'.
    }
  }

  // Para ejecutar la función 'greeting()' podemos pasarle un valor de tipo 'string' o de tipo 'number' pero no de cualquier otro tipo de dato.
  greeting('Fernando');
  greeting(12.7897777);

  // Estas invocaciones a la función 'greeting()' no son válidas porque no estamos pasando un valor de tipo 'string' o de tipo 'number'.
  // greeting(null);
  // greeting({});
})();