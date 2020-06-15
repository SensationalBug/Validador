// Se introduce la cedula con guiones o sin ellos XD
let cedula = prompt('Ingresa el numero de cédula.');

// En caso de que la cedula tenga guiones se borran (siempre contienen 2 guiones)
let guiones = cedula.replace("-", "").replace("-", "");

// En esta parte se separan los numeros para poner el ultimo en una varible y los 10 primeros en otra
let sinGuiones = guiones.split("");
let ultNum = sinGuiones[10];
let diezPrimeros = sinGuiones.slice(0, 10);

// Aqui se separan los numeros que se multiplican por 2 y los que se quedan igual
let porUno = ([diezPrimeros[0], diezPrimeros[2], diezPrimeros[4], diezPrimeros[6], diezPrimeros[8]]);
let porDos = ([diezPrimeros[1], diezPrimeros[3], diezPrimeros[5], diezPrimeros[7], diezPrimeros[9]]);

// Multiplicar los valores seleccionados por 2
let xDos = porDos.map((val) => {
    return val * 2;
}).join("").split("");

// Unir los dos arrays (El multiplicado y el que se queda igual)
let union = xDos.concat(porUno);

// Se parsea el array para poder operar con el efectivamente
let parsed = union.map((x) => {
    return parseInt(x);
})

// Se suman los valores del array
let sumar = parsed.reduce((a, b) => {
    return ((a + b));
})

// Buscar decena inmediata
let decena = (Math.ceil(sumar / 10) * 10);

// Se resta la decena inmediata de la suma total de los numeros
let total = decena - sumar;


// Se retorna el resultado en un alert()
function final(){
    return (total == ultNum) ? alert("Cédula válida") : alert("Cédula no válida");
}

final();







