(()=>{
  // Forma implicita de declarar una variable booleana
  let isEnable = true;                  // Forma de declarar una variable booleana infiriendo el tipo de dato
  // inEnable = 'as';                   // Error, no se puede asignar un string a una variable booleana
  // isEnable = 1212;                   // Solo se puede cambiar a datos booleanos, esto en JavaScript podiamos reemplazar el tipo de dato de una variable
  isEnable = false;                     // Se puede cambiar a false, es permitido

  // Forma explicita de declarar una variable booleana
  let isNew: boolean = true;
  console.log('isNew', isNew);
  isNew = true;
  console.log('isNew', isNew);


  const random = Math.random();                   // Genera un numero aleatorio entre 0 y 1
  console.log('random', random);
  isNew = random >= 0.5 ? 'true' : 'false';       // Error, no se puede asignar un string a una variable booleana
  isNew = random >= 0.5 ? true : false;           // Forma correcta de asignar un valor booleano
  console.log('isNew', isNew);


  const myBoolean: Boolean = true;                // Esto funciona pero en una muy mala practica ya que Boolean es un objeto y no un tipo de dato primitivo
})();