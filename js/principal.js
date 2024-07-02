/*Una discoteca desea llevar el control de sus ganancias. Para esto conoce de cada rumbero: su cédula, nombre, edad y sexo. Cada entrada tiene un costo dependiendo del sexo, si es chico vale 25$ y si es chica cuesta en 25% del valor del chico. Por Noche, la discoteca desea saber: a) Pago que realiza cada rumbero b) Total Ganado, c) Porcentaje de rumberas mayores a 21 años, d) Cual sexo asistió más a la discoteca.
*La discoteca suministra la siguiente información demostrativa, para 4 rumberos: (cedula, nombre, edad, sexo) (134, Luis, 23, M) (154, Ana, 22, F) (324, José, 18, M) (286, Carmen, 19, F), según lo cual la salida requerida presenta el siguiente formato:
*Pago que realiza Luis 25$
*Pago que realiza Ana 12.5$
*Pago que realiza José 25$
*Pago que realiza Carmen 12.5$
*Total Ganado 75$
*Porcentaje de rumberas mayores a 21 años: 50% 
*/

import CL_discoteca from './CL_discoteca.js';
import CL_rumberos from './CL_rumberos.js';
//instaciar al objeto Rumbero
let rumberos1 = new CL_rumberos (134, "Luis", 23, "M");
let rumberos2 = new CL_rumberos (154, "Ana", 22, "F"); 
let rumberos3 = new CL_rumberos (324, "José", 18, "M");
let rumberos4 = new CL_rumberos (286, "Carmen", 19, "F");

// instaciar el procesar
let discoteca = new CL_discoteca ();
discoteca.procesarrumberos (rumberos1);
discoteca.procesarrumberos (rumberos2);
discoteca.procesarrumberos (rumberos3);
discoteca.procesarrumberos (rumberos4);

//Salida solicitada
let salida = document.getElementById ("salida"); 

salida.innerHTML+= " <br> Pago que realiza: "+rumberos1.getnombre()+" " + rumberos1.pagoentrada();
salida.innerHTML+= " <br> Pago que realiza: "+rumberos2.getnombre()+" "  +rumberos2.pagoentrada();
salida.innerHTML+= " <br> Pago que realiza: "+rumberos3.getnombre()+" "  +rumberos3.pagoentrada();
salida.innerHTML+= " <br> Pago que realiza: "+rumberos4.getnombre()+" "  +rumberos4.pagoentrada();
salida.innerHTML+=" <br>Total Ganado: "+discoteca.acumpagos;
salida.innerHTML+=" <br> Porcentaje de rumberas mayores a 21: "+discoteca.porcentajeF() +"%";
salida.innerHTML+=" <br> Asistieron : "+discoteca.mayorasis();
