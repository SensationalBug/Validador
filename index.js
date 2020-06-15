// Se introduce la cedula con guiones o sin ellos XD
var cedula = prompt('Ingresa el numero de cédula.');


// En caso de que la cedula tenga guiones se borran (siempre contienen 2 guiones)
var guion1 = cedula.replace("-", "");
var guion2 = guion1.replace("-", "");
// 402-1035092-8


// En esta parte se separan los numeros para poner el ultimo en una varible y los 10 primeros en otra
var sinGuiones = guion2.split("");
var ultNum = sinGuiones[10];
var diezPrimeros = sinGuiones.slice(0, 10);
