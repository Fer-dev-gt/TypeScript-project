// Para trabajar con libreria que no tienen soporte para typescript es necesario instalar el paquete '@types/nombre-libreria' para que TypeScript lo reconozca y nos marque error cuando no se esten usando bien los metodos de la libreria

import _ from 'lodash';                                    // Importamos la libreria lodash la cual no tiene soporte para Typescript, lodash nos dice que para importarlo tenemos que escribir '_' en vez de 'lodash' porque es mas corto

const data = [                                             // Creamos un arreglo de objetos, el cual vamos a agrupar por el rol de cada uno usando un metodo de 'lodash'
  {
    username: 'Fernando',
    role: 'admin'
  },
  {
    username: 'Valentina',
    role: 'seller'
  },
  {
    username: 'Zulema',
    role: 'seller'
  },
  {
    username: 'Santiago',
    role: 'customer'
  }
];

const rta = _.groupBy(data, (item) => item.role);           // Usamos el metodo 'groupBy' de '_' para agrupar los objetos del arreglo 'data' por el rol de cada uno, el metodo 'groupBy' recibe como primer parametro el arreglo de objetos y como segundo parametro una funcion que recibe como parametro cada objeto del arreglo y retorna el valor por el cual se va a agrupar, en este caso el rol de cada uno
console.log(rta);                                           // El output seria un objeto con 3 propiedades, cada una con un arreglo de objetos, los cuales estan agrupados por el rol de cada uno
