'use strict'

let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch(true){
case null:
console.log('вы отменили');
  break;
 case '':
    console.log('Empty String');
case isNaN( +numOrStr ):
   console.log(' number is Ba_NaN')
default:
    console.log('OK!')
}
   