
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor (es decir no colocar var).
1. Las variables declaradas se limitan al contexto de ejecución en el cual son declaradas. Las variables no declaradas siempre son globales.
2. Las variables declaradas son creadas antes de ejecutar cualquier otro código. Las variables sin declarar no existen hasta que el código que las asigna es ejecutado.
3. Las variables declaradas son una propiedad no-configurable de su contexto de ejecución (de función o global). Las variables sin declarar son configurables (p. ej. pueden borrarse).
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/var


```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); //10
  console.log(a); //8
  var f = function(a, b, c) {
    b = a;
    console.log(b); //8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); //9
}
c(8,9,10);
console.log(b); //10
console.log(x); //1
```



```javascript
console.log(bar); //undefined
console.log(baz); //ReferenceError
foo(); 
function foo() { console.log('Hola!'); } // (Hola!) ya no se imprime por el error
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); //Franco
```

```javascript
var instructor = "Tony";
console.log(instructor); //Tony
(function() {
   if(true) {
      var instructor = "Franco"; 
      console.log(instructor); //Franco
   }
})();
console.log(instructor); //Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); //The Flash
    console.log(pm); //Reverse Flash
}
console.log(instructor); //The Flash
console.log(pm); //Franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"       //2
"2" * "3"    //6
4 + 5 + "px" //9px
"$" + 4 + 5  //$45
"4" - 2     //2
"4px" - 2   //NaN
7 / 0       //Infinity
{}[0]       //Objeto [0]
parseInt("09") //9
5 && 2      //2
2 && 5      //5 
5 || 0      //5
0 || 5      //0
[3]+[3]-[10] //23  ~ "3" + "3" - "10"
3>2>1       //false --> 3>2 = false --> false>1 = false
[] == ![]   //false --> false == false
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); //indefined porque en este paso todavía no esta definida, sólo declarada 
   console.log(foo()); //2 porque se esta ejecutando la función y retorna el valor 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);  //Undefined porque en la primera fase al crearse el contexto de getFood se declaro snack pero en la fase de ejecución como el parámetro es false, la sentnecia if no se ejecuta por lo que el valor de snak dentro de ese contexto no es asignado. 
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); //Aurelio de Rosa porque esta haciendo referencia a la propiedad dentro del contexto local. 

var test = obj.prop.getFullname;

console.log(test()); //Juan Perez porque la variable test esta declarada en el contexto global entonces this.fullname hace referencia a la var fullname del contexto global
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing(); // 1 4 3 2 porque las funciones serTimeout se mandan a otra cola que se ejecuta después y se imprimen de acuerdo a la duración del setTimeout.
```
