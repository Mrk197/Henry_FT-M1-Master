'use strict'
// No cambies los nombres de las funciones.

/*
*/

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  /*if(array.length <= 1){
    return array;

  }
  let n = Math.floor(Math.random() * array.length);
  var pivote = array[n];
  var left = [];
  var rigth = [];

  for(var i= 0; i<array.length; i++){ //se recorre arreglo y se compara con el pivote 
    if(i === n){
      i++; //salta el pivote  
    }
    array[i] < pivote ? left.push(array[i]) : rigth.push(array[i]);
  }
  let ordenado = quickSort(left).concat(pivote, quickSort(rigth));
  return ordenado.filter(function(dato){return dato != undefined });
}

function merge(left, right) {
  let arr = [];
   //recorrer mientras haya elemetos a la izquierda y derecha
  while (left.length && right.length) { //si uno esta vacio, se termina
      if (left[0] < right[0]) { //si el de la izquierda es menor 
          arr.push(left.shift());  //ingresarlo al nuevo arreglo
      } else { //si es el derecho el menor
          arr.push(right.shift()); //ingresarlo al nuevo arreglo 
      }
  }
  //regresar copia de nuevo arreglo y si quedaron elementos en subarrays
  return [ ...arr, ...left, ...right ];*/

  if(array.length <= 1) return array;

  let pivot = array[Math.floor(Math.random() * array.length)];
  let left = [];
  let right = [];
  let equal = [];

  //recorrer arreglo
  for(let i=0; i< array.length; i++){
    if(array[i] < pivot){
      left.push(array[i]);
    }
    else if(array[i] > pivot){
      right.push(array[i]);
    }
    else{
      equal.push(array[i]);
    }
  }

  return quickSort(left).concat(equal).concat(quickSort(right));

}



function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  /*
  const half =  Math.floor(array.length/2); //calcula la mitad
  
  // terminar hasta el se haya dividido al menor tamaño
  if(array.length < 2){
    return array; 
  }
  
  const left = array.splice(0, half) //divide a la mitad 
  return merge(mergeSort(left),mergeSort(array)); //une elementos ordenados 
   */
  
  if(array.length === 1) return array;
  
  let division = split(array); //[[left],[rigth]]
  let left = division[0]; //[left]
  let right = division[1]; //[rigth]

  return paste(mergeSort(left), mergeSort(right));
}

//funcion que divide el arreglo 
function split(array){
  let middle = Math.floor(array.length/2);
  let left = array.slice(0, middle);
  let right = array.slice(middle)

  return [left, right]; //[[left],[rigth]]
}

//función que ordena y une 
function paste(left, right){
  let array = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
      array.push(left[leftIndex]);
      leftIndex++;
    }
    else{
      array.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


let a = [5,8,15,20,2,5,40];
console.log(quickSort(a));
console.log(mergeSort(a));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
