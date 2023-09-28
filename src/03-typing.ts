// Se pueden crear variables sin "especificar" el tipo de dato y TypeScript lo infiere
(() => {                                              // Esto es una función anonima/arrow function autoejecutable y nos ayuda que no nos salga error por declarar dos veces la misma variable aunque esten en diferentes archivos
  let myProductName = 'Product 1';
  let myProductPrice = 77;
})();


// TypeScript no nos permite asignar un valor de un tipo a una variable de otro tipo diferente al que fue declarado
myProductName = () => {};

// Esto si lo permite
myProductName = 'changed';
myProductName.toLowerCase();

// VSCode me recomendará metodos que se pueden usar con el tipo de dato que se está usando, en este caso un dato tipo number
myProductPrice.toFixed();

// Cuando declaramos una varible constante, TypeScript infiere el tipo de dato y no nos permite cambiarlo ademas VSCode en vez de resaltar el dato como 'number' lo resalta como '1000' ya que es el unico valor que puede tener
const myProductStock = 1000;
myProductStock = 200;                       // Esto no es permitido
const myProductName2 = 'Product 2';


// Forma de declara las variables de arriba de forma explicita
let myProductName3: string = 'Product 3';
let myProductPrice3: number = 77;
const myProductStock3: number = 1000;
const myProductName4: string = 'Product 4';

