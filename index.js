// Se introduce la cedula con guiones o sin ellos XD
// var cedula = prompt('Ingresa el numero de cédula.');


// En caso de que la cedula tenga guiones se borran (siempre contienen 2 guiones)
// var guiones = cedula.replace("-", "").replace("-", "");
// 402-1035092-8


// En esta parte se separan los numeros para poner el ultimo en una varible y los 10 primeros en otra
// var sinGuiones = guiones.split("");
// var ultNum = sinGuiones[10];
// var diezPrimeros = sinGuiones.slice(0, 10);

var cedula = [4,0,2,1,0,3,5,0,9,2]
var porDos = ([cedula[1], cedula[3], cedula[5], cedula[7], cedula[9]]);
var porUno = ([cedula[0], cedula[2], cedula[4], cedula[6], cedula[8]]);

// var posiciones = [1,2,1,2,1,2,1,2,1,2];
// 4,2,0,5,9
// 0,1,3,0,2

let xDos = porDos.map((val) => {
    return val * 2;
}).join("").split("");

union = xDos.concat(porUno);
// let parseado = parseInt(union)


var parsed = union.map((x) => {
    return parseInt(x);
})

let sumar = parsed.reduce((a, b) => {
    return a + b;
})

console.log(sumar)

// const sumar = (elem) => {
//     let suma = 0;
//     console.log(suma += elem);
// }

// sumar(parsed);





