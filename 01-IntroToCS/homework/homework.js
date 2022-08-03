'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let n = 0;
  let sum = 0;
  for(let i=num.length-1; i>=0; i--){
    sum += (2**n) * num[i];
    n++;
  }
  return(sum);
}

function DecimalABinario(num) {
  // tu codigo aca
  var binario = "";
  var residuo = 0;
  var bin = "";
  while(num != 0){
    residuo = num % 2;
    num = Math.floor(num/2);
    bin = bin + residuo;
  }
  console.log(bin);
  for(let i=bin.length-1; i>=0; i--){
    binario = binario + bin[i];
  }
  return (binario);
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}


//NOTAS 
//Diferencia entre ** y Math.pow()