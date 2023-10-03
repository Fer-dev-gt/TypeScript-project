// Importamos de la libreria date-fns las funciones subDays y format para manejar fechas y hacer calculos y darle formato, esta libreria tiene full soporte para TypeScript
import { subDays, format } from 'date-fns';                 // Usando VSCode y ponel el mouse encima de la funcion, te muestra información sobre como usarla la funcion importada, es como tener una documentación instantanea

const date = new Date(1998, 1, 28);                         // 0 = enero, 1 = febrero, 2 = marzo, etc. Cramos una fecha con el año, mes y dia
const rta = subDays(date, 30);                              // Le restamos 30 dias a la fecha creada usando el metodo 'subDays' de la libreria date-fns el cual recibo como primer parametro la fecha y como segundo parametro la cantidad de dias a restar
const str = format(rta, 'yyyy/MM/dd')                       // Le damos formato a la fecha usando el metodo 'format' de la libreria date-fns el cual recibo como primer parametro la fecha y como segundo parametro el formato que quiero que tenga la fecha

console.log('Fecha menos 30 dias', str);
;
