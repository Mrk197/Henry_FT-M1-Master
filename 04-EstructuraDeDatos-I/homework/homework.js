'use strict'


/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

/*function nFactorial2(n) {
  let factorial=n;
  if(n<2) return 1;
  for(let i=n-1; i > 0; i--){
    factorial  *= i;
  }
  return factorial;
}*/
//CON RECURSIVIDAD 
function nFactorial(n){
  if(n<0) return "Error: no es un número positivo";
  if(n<2) return 1; //0,1
  return n * nFactorial(n-1);
}

/*function nFibonacci2(n) {
  if(n===0 || n===1){
    return n;
  }
  else{
    let nodoi=0;
    let nodof=1;
    let resultado;
    for(let i=2; i<n; i++){
      resultado = nodoi + nodof;
      nodoi = nodof;
      nodof = resultado;
    }
    return resultado;
  }
}*/
//CON RECURSIVIDAD 
function nFibonacci(n){
  if(n===0) return n; //0
  if(n < 3) return 1; //2,1 
  return nFibonacci(n-1) + nFibonacci(n-2);
}

//console.log(nFibonacci(8));

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

//CON CLASE
/*class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Queue2 {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value){
    let nuevoNodo = new Node(value);
    console.log(nuevoNodo);
    if(this.size === 0){ //si esta vacio 
      this.first = nuevoNodo;
      this.last = nuevoNodo;
    }
    else if(this.size === 1){ //si es el segundo
      this.first.next = nuevoNodo;
      this.last = nuevoNodo;
    }
    else{
      this.last.next = nuevoNodo;
      this.last = nuevoNodo;
    }
    this.size ++;
  };

  dequeue(){
    if(this.first === null){ //si esta vacia
      console.log("undefined");
      return "Undefined";
    }
    else{ //sin aún no esta vacio '
      var newFirst = this.first.next;
      this.first = newFirst;
      this.size--;
    }
  };

  size(){
    return this.size; 
  };
}

let stack = new Queue();
stack.enqueue('primero');
stack.enqueue('2');
stack.enqueue('3');
stack.enqueue('4');
console.log(stack);
stack.dequeue();
stack.dequeue();
//stack.dequeue();
console.log(stack.size);
console.log(stack);*/


//CON FUNCIÓN CONSTRUCTORA
function Queue(){
  this.arr = [];
  this.enqueue = function(data){ //Forma 1 de agregar métodos
    this.arr.push(data);
  }
}

Queue.prototype.dequeue = function(){//Forma 2 de agregar métodos
  return this.arr.shift();
} 
Queue.prototype.size = function(){
  return this.arr.length;
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
