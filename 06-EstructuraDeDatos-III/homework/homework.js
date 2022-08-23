"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
function BinarySearchTree(root) {
  this._length = 1;
  this.value = root;
  this.left = null;
  this.right = null;
  this.arr = [];

  this.size = function(){
    return this._length;
  }

  this.insert = function(value){     
      if (value !=this.value) { //si no existe el valor
        if(value < this.value){//si es menor va a la izq.
          if(!this.left){ //si rama izq esta vacia 
           this.left = new BinarySearchTree(value); //crea el nuevo nodo
            this._length++;
          }
          else this.left.insert(value); //no esta vacio
        }
        else{ // si es mayor va a la der.
          if(!this.right){ //si rama der esta vacia 
            this.right = new BinarySearchTree(value); //crea el nuevo nodo 
            this._length++;
          }
          else this.right.insert(value); //no esta vacio
        }
      }
    //si es igual no hace nada
  }

  this.contains = function(value){
    if(this.value == value) return true; //el valor es igual a la raíz?
    //es mayor o menor?
    else if(value < this.value){ //es menor
      //hay un valor en el nodo izquierdo?
      if(this.left) return this.left.contains(value); //si, ver si esta el valor
      else return false; //no
    }
    else{ //es mayor
      //hay un valor en el nodo derecho?
      if(this.right) return this.right.contains(value); //si, ver si esta el valor
      else  return false; //no
    }
  }
  
} 

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
  
}

BinarySearchTree.prototype.breadthFirstForEach = function(){
  
}


let arbol = new BinarySearchTree(20);
arbol.insert(12);
console.log(arbol.size());
console.log(arbol);
arbol.insert(22);
arbol.insert(5);
arbol.insert(0);
arbol.insert(1);
console.log(arbol);
console.log(arbol.right.value);
console.log(arbol.depthFirstForEach("post-order"));
  */

function BinarySearchTree(root) {
  this.value = root;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function(){
  if(this.value === null) return 0;
  if(this.left === null && this.right === null) return 1;
  if(this.left === null && this.right !== null) return 1 + this.right.size();
  if(this.right === null && this.left !== null) return 1 + this.left.size();
  return 1 + this.left.size() + this.right.size();
}

BinarySearchTree.prototype.insert = function(value){
  //evaluar value
  if(value > this.value){ //mayores a la der
    //si el nodo esta libre
    if(this.right === null) this.right = new BinarySearchTree(value);
    else this.right.insert(value);
  }
  if(value < this.value){ //menor a la izq
    //si el nodo esta libre
    if(this.left === null) this.left = new BinarySearchTree(value);
    else this.left.insert(value);
  }
}

BinarySearchTree.prototype.contains = function(value){
  if(this.value === value) return true;
  if(value > this.value){ //mayores a la der
    if(this.right === null) return false;
    return this.right.contains(value);
  }
  if(value < this.value){ //menor a la izq
    if(this.left === null) return false;
    return this.left.contains(value);
  }
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
  //post-order
  if(order === "post-order"){
    //CB left
    if(this.left !== null) this.left.depthFirstForEach(cb, order);
    //CB right
    if(this.right !== null) this.right.depthFirstForEach(cb, order);
    //CB en root
    cb(this.value);
  }
  //pre-order
  else if(order === "pre-order"){
    //CB en root
    cb(this.value);
    //CB left
    if(this.left !== null) this.left.depthFirstForEach(cb, order);
    //CB right
    if(this.right !== null) this.right.depthFirstForEach(cb, order);
  }
  //in-order
  else{
    //CB left
    if(this.left !== null) this.left.depthFirstForEach(cb, order);
    //CB en root
    cb(this.value);
    //CB right
    if(this.right !== null) this.right.depthFirstForEach(cb, order);
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, queue = []){
  //guarda lo que hay en la izq
  if(this.left !== null) queue.push(this.left);
  //guarda lo que hay en la der
  if(this.right !== null) queue.push(this.right);

  //ejecutar root
  cb(this.value);
  //si hay elementos en la cola 
  if(queue.length > 0){
    queue.shift().breadthFirstForEach(cb, queue);
  }
}


// No modifiquen nada debajo de esta linea
// --------------------------------
module.exports = {
  BinarySearchTree,
};