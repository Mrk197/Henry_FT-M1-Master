'use strict'
// No cambies los nombres de las funciones.
var divisor = 2;
var arrayFactores=[1];
var i=0, j=1;
var cont;

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
  /*let subArray = array.slice(i,i+2);//seleccionar primeros 2 elementos 
  console.log("subArray", subArray);
    if(subArray[0] > subArray[1]){ //se comparan 2 elementos
      array.splice(i,2,subArray[1],subArray[0]); //se intermcabia la posición si el primer valor es mayor 
      if(i+1 < array.length){ //si aún no se recorre todo el arreglo 
        i++; //se mueve una posición
        console.log(array);
        return bubbleSort(array); //se compara siguiente par de elementos 
      }
      else{ //ya se recorrio todo el arreglo
        if(cont == array.length-j) return array; //se han recorrido todos los elementos del arreglo sin ningún cambio 
        else{
          j++; //disminuir en 1 el tamaño del arreglo ya que el último elemento esta ordenado 
          i=0; //regresamos a la primera posición
          cont=0; //reiniciar contador 
          console.log("TODO", array)
          return bubbleSort(array); //recorrer arreglo nuevamente 
        }
      } 
    }
    else{
      cont ++; //se contabiliza la cantidad de comparaciones sin cambio 
      i++; //se mueve de posición 
      return bubbleSort(array); //se compara siguiente par de elementos 
    } */
    console.log("tamaño ",array.length-j);
    while(i+1 < array.length-j){ //recorrer el arreglo 
      let subArray = array.slice(i,i+2);//seleccionar par de elementos
      console.log("SUB", subArray);
      if(subArray[0]>subArray[1]){ //se comparan 2 elementos
        array.splice(i,2,subArray[1],subArray[0]); //se intermcabia la posición si el primer valor es mayor 
        i++;
        console.log("ARRAY", array);
      }
      else{
        i++;
        cont++; //se contabiliza la cantidad de comparaciones sin cambio
        console.log("CONT", cont); 
      }
    }
    j++;
    if(cont === array.length-j){ //se han recorrido todos los elementos del arreglo sin ningún cambio 
      i=0;
      cont=0;
      //j=1;
      return array;
    }
    else{
      //se reinician valores 
      i=0;
      cont=0;
      j=1;
      return bubbleSort(array); //recorrer arreglo nuevamente 
    }
}

console.log(bubbleSort([5, 1, 4, 2, 8]));
console.log(bubbleSort([10, 10, 16, 12])); 

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
