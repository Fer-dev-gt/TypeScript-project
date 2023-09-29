(() => {

  // Declaramos una variable con tipo 'any', para que acepte cualquier tipo de dato, es como volver a declarar variables en JavaScript
  // El uso de 'any' no es recomendable, ya que se pierde el tipado de TypeScript, pero en algunos casos es necesario como por ejemplo cuando se trabaja con librerias de terceros
  let myDynamicVariable: any;                                     // Puede aceptar cualquier tipo de dato
  myDynamicVariable = 100;                                        // No va a marcar error cuando la asignemos o reasignemos
  myDynamicVariable = null;
  myDynamicVariable = {};
  myDynamicVariable = [];
  myDynamicVariable = '';


  // Existen 2 formas de conversiones de tipos de datos 'any', la primera es con 'Casteo' usando 'as' y la segunda es con forma 'genérica' usando '<tipoDato>'
  myDynamicVariable = 'Hello';
  const respuestaString = (myDynamicVariable as string).toLowerCase();            // Antes de haber hecho el 'cast' TypeScript no nos permite usar el método 'toLowerCase()' ni tampoco nos lo recomendaba VSCode
  console.log('respuestaString', respuestaString);

  // Forma de casteo 'genérica' usando la sintaxis '<tipoDato>'
  myDynamicVariable = 777;
  const respuestaNumber = (<number> myDynamicVariable).toFixed();                 // Hacemos primero el casteo y luego nos habilita los métodos de los datos tipo 'number'
  console.log('respuestaNumber', respuestaNumber);

})();