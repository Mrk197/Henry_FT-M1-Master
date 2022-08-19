"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
  function LinkedList() {

  this.head = null;
  this.tail = null;

  this.add = function(value){
    var node = new Node(value);
    if(this.tail === null){ //si esta vacía
      node.next = this.head;
      this.head = node;
      this.tail = node;
    }
    else{//si no esta vacia 
      this.tail.next = node;
      this.tail = node;
    }
  };

  this.removefirst = function(){
    if(this.head === null){ 
      return null;
    }
    let elimindo = this.head.value;
    this.head = this.head.next;
    return elimindo;
  }


  this.remove = function(){
    var elimindo = null;
    if(this.head == null){ 
      return null;
    }
    else if(this.head.next != null ){ //si no es el único nodo
      var pre = this.head;
      var temp = this.head.next;
      while(temp.next != null){ //hasta que no exista un siguiente nodo --> hasta llegar a tail
        pre = temp;
        temp = temp.next;
      };
      elimindo = temp.value;
      pre.next = null; //elminamos referencia a último nodo 
      this.tail = pre; //nuevo tail
      return elimindo;
    }
    elimindo = this.tail.value;
    this.head = null;
    this.tail = null;
    return elimindo;
  };


  this.search = function(value){
    if(this.head == null){ //si esta vacio
      return null;
    }
    else if(typeof(value) === 'function'){ //si se esta pasando una función
      let temp = this.head; 
      do{
        console.log("console funcion");
        console.log(value(temp.value));
        if(value(temp.value)){
          return temp.value;
        }
        temp = temp.next;
      }while(temp.next != null) //hasta llegar a tail
      //si ninguno conincidió con la búsqueda
      return null;
    }
    else{//si es cualquier tipo de dato
      let index = 0;
      let temp = this.head;
      while(temp.value != value){
        if(temp.next == null){ //si llego al último nodo y no lo encontró
          return null;
        }
        temp = temp.next;
        index++;
      }
      return temp.value;
    }
  };
}

function Node(data) {
  this.value = data;
  this.next = null;
}

function isEven(value){
  if(value%2 == 0){
    return true;
  }
  return false;
}

let newList = new LinkedList();
newList.add('first');
newList.add(4);
newList.add(8);
//console.log(newList);
//console.log(newList.remove());
console.log(newList);
console.log(newList.search(isEven));
*/

//REVIEW
class LinkedList{
  constructor(){
    this.head = null;
  }

  add(data){
    let node = new Node(data);
    let current = this.head;
    //si esta vacio
    if(!current){
      this.head = node;
      return node;
    }
    //si hay nodos 
    while(current.next){
      current = current.next;
    }
    current.next = node;
    return node;
  }

  remove(data){
    //si esta vacia 
    if(!this.head) return null;
    //si tiene un elemento
    if(this.head && !this.head.next){ //si el nodo esta ocupado y su next es null
      let rmNode = this.head;
      this.head = null;
      return rmNode.value;
    }
    //si tiene más de 1 valor
    let current = this.head;
    while(current.next.next){
      current =  current.next;
    }
    let rmNode = current.next;
    current.next = null; //se "borra"
    return rmNode.value;
  }

  search(value){
    //si esta vacia 
    if(!this.head) return null;
    let current = this.head;
    while(current){
      if(current.value === value) return current.value; //si corresponde al valor 
      else if(typeof value === 'function'){//si es una función
        if(value(current.value)) return current.value;
      }
      current = current.next;
    }
    return null;
  }

}

function Node(data) {
  this.value = data;
  this.next = null;
}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  //array de objetos
  this.numBuckets = 35;
  this.buckets = [];
}

HashTable.prototype.hash = function(key){ //'chris'
  let sum = 0;
  for(let i=0; i< key.length; i++){
    sum += key.charCodeAt(i);
  }
  return sum % this.numBuckets; // Ej. 80%35 = 10
};

HashTable.prototype.set = function(key,value){
  if(typeof key !== 'string') throw new TypeError('Keys must be strings');
  let posArr = this.hash(key);
  //si la posición en el arreglo esta vacia, crea un obj
  if(this.buckets[posArr] === undefined){
    this.buckets[posArr] = {}; //se crea un obj vacio 
  }
  this.buckets[posArr][key] = value;
};

HashTable.prototype.get = function(key){
  let posArr = this.hash(key);
  return this.buckets[posArr][key];
};

HashTable.prototype.hasKey = function(key){
  let posArr = this.hash(key);
  return this.buckets[posArr].hasOwnProperty(key);
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
