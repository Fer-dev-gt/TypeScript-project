(() => {
  // Forma implicita de retorno de una funcion
  const calcularTotal = (prices: number[]) => {                    // Funcion que recibe un array de numeros y calcula el total de la suma de todos los numeros
    let total = 0;
    prices.forEach(item => total += item);
    return total;
  };

  const rta = calcularTotal([1,2,1,1,1]);
  console.log(rta);


  // Forma explicita de retorno de una funcion
  const calcularTotal2 = (prices: number[]): number => {           // Aca especificamos que esta funcion solo puede retornar un 'number', puede retornar uno o más tipos de datos
    let total = 0;
    prices.forEach(item => total += item);
    return total.toString();                                       // Si retornamos un string, nos dara error
  } ;


  const calcularTotal3 = (prices: number[]): string => {           // El number tendra que ser un string al retornar
    let total = 0;
    prices.forEach(item => total += item);
    return total.toString();                                       // Ya no da error porque estamos retornando un string
  };


  // Forma explicitar de retorno void de una funcion osea que no retorna nada

  const printTotal = (prices: number[]): void => {                 // Aca especificamos que esta funcion no retorna nada usado 'void'
    const rta = calcularTotal(prices);
    console.log('El precio total es: ', rta);
  }

  printTotal([1,2,3,4,5]);                                         // Como esta función no retorna nada, no podemos asignarla a una variable
})();