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
  this.root = new Node(root);
  this.size = 1;
  var currentRoot = this.root;

  this.size = function(){
    return this.size;
  }

  this.insert = function(value){   
    if(value != currentRoot.value){ //si no existe el valor
      //determinar si va a la izq. o der.
      if(value < currentRoot.value){//si es menor va a la izq.
        if(!currentRoot.left){ //si el nodo esta vacio
          let newValue = new Node(value); //crea el nuevo nodo 
          currentRoot.left = newValue; //lo inserta
        }
        else{ //no esta vacio
          currentRoot = currentRoot.left;
          this.insert(value);
        }
      } 
      else{ // si es mayor va a la der.
        if(!currentRoot.rigth){ //si el nodo esta vacio 
          let newValue = new Node(value); //crea el nuevo nodo 
          currentRoot.rigth = newValue;
        }
        else{ //no esta vacio
          currentRoot = currentRoot.rigth;
          this.insert(value);
        }
      }  
    }
    //si es igual no hace nada
    this.size++; //se incremente el tamaño 
  }

  this.contains = function(){

  }
}

BinarySearchTree.prototype.depthFirstForEach = function(){

}

BinarySearchTree.prototype.breadthFirstForEach = function(){
  
}

function Node(data) {
  this.value = data;
  this.left = null;
  this.rigth = null;
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
