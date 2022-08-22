"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

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
          else{ //no esta vacio
            this.left.insert(value);
          }
        }
        else{ // si es mayor va a la der.
          if(!this.right){ //si rama der esta vacia 
            this.right = new BinarySearchTree(value); //crea el nuevo nodo 
            this._length++;

          }
          else{ //no esta vacio
            this.right.insert(value);
          }
        }
      }

    //si es igual no hace nada
  }

  this.contains = function(value){
    console.log("value",this.value,typeof(this.value));
    //console.log(typeof(value));
    if(this.value == value){ //el valor es igual a la raíz?
      return true;
    }
    //es mayor o menor?
    else if(value < this.value){ //es menor
      //hay un valor en el nodo izquierdo?
      if(this.left){ //si
        console.log("si hay en izq");
        return this.left.contains(value); //ver si esta el valor
      }
      else{ //no
        return false;
      }
    }
    else{ //es mayor
      //hay un valor en el nodo derecho?
      if(this.right){ //si
        return this.right.contains(value); //ver si esta el valor
      }
      else{ //no
        return false;
      }
    }
  }
} 

BinarySearchTree.prototype.depthFirstForEach = function(order){
  if(order=="post-order"){
    if(this.left){ //si hay izq
     this.left.depthFirstForEach(order);
    }
    else if(this.right){ //si hay derecha
      this.right.depthFirstForEach(order);
    }
    else{ //rai
      console.log("VAL", this.value);
      return this.arr.push(this.value);
    }
  }

  else if(order=="pre-order"){

  }
  else{ //in-order

  }
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


// No modifiquen nada debajo de esta linea
// --------------------------------
module.exports = {
  BinarySearchTree,
};