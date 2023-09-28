// TypeScript me muestra estas variable con error porque ya han sido declaradas en el mismo scope, incluso si estan en otro archivo, no es como en React donde se pueden declarar variables con el mismo nombre en diferentes archivos
let myProductName = 'Product 1';
let myProductPrice = 77;

// Para poder declarar esta variable tenemos que hacerlo dentro de una función y ejecutarla inmediatamente
(() => {})();                         // Esto es una función anonima/arrow function autoejecutable

(() => {
  // Aca nos deja declarar la variable porque esta en otro scope dentro de la función
  const myProductStock3: number = 1000;
  const myProductName4: string = 'Product 4';
})();