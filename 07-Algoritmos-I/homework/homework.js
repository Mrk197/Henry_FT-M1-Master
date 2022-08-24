'use strict'
// No cambies los nombres de las funciones.
var divisor = 2;
var arrayFactores=[];

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  if(num === 1) return num;
  else if(num === divisor){
    arrayFactores.push(num);
    console.log(arrayFactores);
    return arrayFactores.join(",");
  }
  else if(num%divisor === 0){ //si el resultado de la divición es entero 
    arrayFactores.push(divisor);
    let nuevoNum = num/divisor;
    factorear(nuevoNum);
  }
  else{
    divisor++;
    console.log(divisor);
    factorear(num);
  }
}

console.log(factorear(1));
console.log(factorear(2));
console.log(factorear(3));
console.log(factorear(15));
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
