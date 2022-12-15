'use strict'
//1
let a=+prompt('input ');
a == 0 ? console.log('Верно'): console.log('Неверно');
//2
let a=+prompt('input ');
a > 0 ? console.log('Верно'): console.log('Неверно');
//3
let a=+prompt('input ');
a < 0 ? console.log('Верно'): console.log('Неверно');
//4
let a=+prompt('input ');
a >= 0 ? console.log('Верно'): console.log('Неверно');
//5
let a=+prompt('input ');
a <= 0 ? console.log('Верно'): console.log('Неверно');
//6
let a=+prompt('input ');
a != 0 ? console.log('Верно'): console.log('Неверно');
//7
let a=prompt('input ');
a == test ? console.log('Верно'): console.log('Неверно');
//8
let a=prompt('input ');
a== 1 ? console.log('Верно'): console.log('Неверно');
//9
let a=+prompt('input ');
a>0 && a<5 ?  console.log('Верно'): console.log('Неверно');
//10
let a=+prompt('input ');
let result=0;
result= a==0 || a==2 ? a+7 : a/10;
alert(result);

//11
let a=+prompt('input ');
let b=+prompt('input');
a<=1 && b>=3 ? console.log(a+b) : console.log(a-b);

//12
let a=+prompt('input ');
let b=+prompt('input');
2<a<11 || 6<=b<14 ? console.log('Верно'): console.log('Неверно');
    
//13
let num=+prompt('input',1,2,3,4)
let result='';
switch(num){
    case 1:
    result='зима';
    break;
     case 2:
     result='весна';
     break;
     case 3:
    result='лето';
    break;
    case 4:
     result='осень';
     break
    default:
    result='ошибка'
}
console.log(result)