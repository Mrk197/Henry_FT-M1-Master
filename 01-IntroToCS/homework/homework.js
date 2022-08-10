'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let n = 0;
  let sum = 0;
  for(let i=num.length-1; i>=0; i--){
    //sum += (2**n) * parseInt(num[i]); //se agrega parseInt para ser explicitos, aunque JS lo resuelva sin ponerlo
    sum += (2**n) * (+num[i]); // + convierte a numero 
    n++;
  }
  return(sum);
}

console.log(BinarioADecimal('1011'));


function DecimalABinario(num) {
  // tu codigo aca
  var binario = "";
  while(num != 0){
    binario = (num % 2) + binario;
    num = Math.floor(num/2);
  }
  return (binario);
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}


//NOTAS 
//Diferencia entre ** y Math.pow() -->>optimización
//do While -->> ejecuto ... reviso y continuo?
//while -->> reviso si continuo? ... ejecuto