'use strict'
// No cambies los nombres de las funciones.
var divisor = 2;
var arrayFactores=[1];

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  if(num === 1) return arrayFactores;
  else if(num === divisor){
    arrayFactores.push(num);
    //console.log(arrayFactores);
    let factores = arrayFactores;
    //console.log(factores);
    arrayFactores = [1]; //se reinicia array
    divisor = 2;
    return factores;
  }
  else if(num%divisor === 0){ //si el resultado de la divición es entero 
    arrayFactores.push(divisor);
    let nuevoNum = num/divisor;
    return factorear(nuevoNum);
  }
  else{
    divisor++;
    console.log(divisor);
    return factorear(num);
  }
}

//console.log(factorear(180));
//console.log(factorear(32));
//console.log(factorear(33));
//console.log(factorear(15));
//console.log(factorear(18));
//console.log(factorear(48));

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
