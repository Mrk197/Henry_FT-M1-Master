'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let n = Math.floor(Math.random() * array.length);
  console.log(n);
  var pivote = array[n]; //elige número random como pivote
  console.log(pivote);
  var subIzq = [];
  var subDer = [];
  var arrayOrdenado = [];
  for(let i=0; i < array.length; i++){ //recorrer arreglo y acomodar menores a la izq y mayores a la der 
    if(i != n){ //saltar pocición del pivote 
      if(array[i] > pivote){
        subDer.push(array[i]);
      }
      else{
        subIzq.push(array[i]);
      }
    }
  }
  //concatenar
  subIzq.concat(pivote, subDer);
  console.log("ORDENADO 1", subIzq);
  return subIzq;
  //arrayOrdenado.concat(izq, pivote, der);
  //return arrayOrdenado;
  /*else{ //segui dividiendo
    let izq = [];
    let der = [];
    if(!subIzq){ //si esta vacio 
      der = mergeSort(subDer); //sólo se hace la derecha 
    }
    else if(!subDer){
      izq = mergeSort(subIzq); //sólo se hace la izquierda
    }
    else{ //se hacen ambas
      der = mergeSort(subDer);
      izq = mergeSort(subIzq);
    }
    arrayOrdenado.concat(izq, pivote, der);
    return arrayOrdenado;
  }*/
}

console.log(mergeSort([5,8,15,20,2,5,40]));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
