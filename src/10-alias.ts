(() => {
  // Forma de utilizar un ’alias’ para definir un tipo de dato y no tener que repetirlo en cada variable
  type UserID = string | number | boolean;                    // Usando la palabra reservada ’type’ definimos un ’alias’ y adentro de este 'alias' definimos los tipos de datos que queremos que acepte
  let userId: UserID;                                         // Ahora cada vez que queramos definir una variable con este tipo de dato, solo tenemos que utilizar el ’alias’ en este caso ’UserID’

  function greeting(myText: UserID) {                         // Aqui tambien ya no tenemos que definir el tipo de dato, solo utilizamos el ’alias’, en este caso ’UserID’
    if(typeof myText === 'string' ) {
      console.log(`string ${myText.toUpperCase()}`);
    }
  }


  // Literal types, nos permite definir un numero limitado de valores u opciones que puede tener una variable
  type Sizes = 'S' | 'M' | 'L' |'XL';                               // En este caso definimos un ’alias’ llamado ’Sizes’ y dentro de este ’alias’ definimos los valores que puede tener la variable, en este caso ’S’, ’M’, ’L’ y ’XL’, todos tienen que ser de tipo ’string’
  let shirtSize: Sizes;                                             // Ahora cada vez que queramos definir una variable con este tipo de dato, solo tenemos que utilizar el ’alias’ en este caso ’Sizes’ y ya tendrá establecidos los valores que puede tener la variable
  shirtSize = 'S';                                                  // El valor 'S' cumple con las reglas definidas en el ’alias’ ’Sizes’
  shirtSize = 'L';
  shirtSize = 'XL';
  // shirtSize = 's';                                               // Este valor no cumple con las reglas definidas en el ’alias’ ’Sizes’
  // shirtSize = 'adfas';                                           // Este valor no cumple con las reglas definidas en el ’alias’ ’Sizes’

  function greetinAndSizes(myText: UserID, size: Sizes) {           // Al usar los 'Literal types' y 'Alias' nos ahorramos tener que definir el tipo de dato de cada variable, solo utilizamos el ’alias’ haciendo más legible el código
    if(typeof myText === 'string' ) {
      console.log(`string ${myText.toUpperCase()}`);
    }
  }

  greetinAndSizes(1111, 'S');                                       // Este invocación cumple con las reglas definidas en el ’alias’ ’Sizes’ y ’UserID’, tiene un numero y un string valido de las opciones definidas en el ’alias’ ’Sizes’
  greetinAndSizes("1111", 'XL');                                    // Acá enviamos un string y un string valido de las opciones definidas en el ’alias’ ’Sizes’
  greetinAndSizes(1111, 'No acepta');                               // Como acá el string 'No acepta' no es valido de las opciones definidas en el ’alias’ ’Sizes’ nos marca un error
})();