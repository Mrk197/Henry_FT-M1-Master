'use strict'
// No cambies los nombres de las funciones.
var divisor = 2;
var arrayFactores=[1];
var i=0, j=1;
var cont=0;

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  if(num === 1) return arrayFactores;
  else if(num === divisor){
    arrayFactores.push(num);
    let factores = arrayFactores;
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
   /* console.log("tamaño ",array.length-j);
    while(i+1 <= array.length-j){ //recorrer el arreglo 
      let subArray = array.slice(i,i+2);//seleccionar par de elementos
      //console.log("SUB", subArray);
      if(subArray[0]>subArray[1]){ //se comparan 2 elementos
        array.splice(i,2,subArray[1],subArray[0]); //se intermcabia la posición si el primer valor es mayor 
        i++;
        //console.log("ARRAY", array);
      }
      else{
        i++;
        cont++; //se contabiliza la cantidad de comparaciones sin cambio
        //console.log("CONT", cont); 
      }
    }
    j++;
    if(cont === array.length-j){ //se han recorrido todos los elementos del arreglo sin ningún cambio 
      i=0;
      cont=0;
      j=1;
      return array;
    }
    else{
      //se reinician valores 
      i=0;
      cont=0;
      j=1;
      return bubbleSort(array); //recorrer arreglo nuevamente 
    }*/
  let swap = true;
  while(swap){
    swap = false;
    for(let i=0; i < array.length; i++){
      if(array[i] > array[i+1]){
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        swap = true;
      }
    }
  }
  console.log(array);
  return array;
}

//console.log(bubbleSort([5, 1, 4, 2, 8]));
//console.log(bubbleSort([10, 10, 8,16, 12])); 

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  /*let i=0;
  let subArray = array.slice(i,i+2);
  while(i <= array.length-1)
  {
    for(let i=subArray.length-1; i==0; i--){ //recorrer nuevo arreglo del ultimo al primero 
      if(subArray[i-1]>subArray[i]){ //se comparan 2 elementos
        subArray.splice(i-1,2,subArray[i],subArray[i-1]); //se intermcabia la posición el último con el penúltimo 
        break;
      }
    }
    i++;
    subArray.concat(array.slice(i,i+1)) ; //añadir siguiente elemento 
  }
  return subArray;*/

  for(let i=1; i < array.length; i++){
    //guarda posición anterior
    let x = i-1;
    //guarda posición actual 
    let temp = array[i];
    while(x >= 0 && temp < array[x]){ //el valor actual es menor al anterior?
      array[x+1] = array[x];
      x--;
    }
    array[x+1] = temp;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //identificación del número más chico
  for(let i=0; i<array.length; i++){
    let min = i;
    //recorre el array buscando el número más chico 
    for(let x = i+1; x < array.length; x++){
      if(array[min] > array[x]) min = x; //actualizamos el index del número más chico
    }   
    //intercambiamos valores entre el num más chico y el "primer" valor 
    if(i !== min){
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
