
'use strict'

//1

let x = 10, y = 7;
x > y ? console.log('x больше, чем y'):console.log('x не больше, чем y');

//2
let num=prompt('Введите число');
if(num%2===0){
    //console.log('Число'  + num + 'четное')
}
else{
    //console.log('Число '  + num + ' нечетное')
}

//3
let numb=prompt('Input number');
let str=numb.toString();
if(numb>0 && str.length===1){
    alert('Число '  + numb + ' однозначное положительное');
}
 else if(numb<0 && str.length===1){
    alert('Число '  + numb + ' однозначное отрицательное');
}
else if(numb>0 && str.length===2){
    alert('Число '  + numb + ' двухзначное положительное');
}
else if(numb<0 && str.length===2){
    alert('Число '  + numb + ' двухзначное отрицательное');
}
else if(numb>0 && str.length>=3){
    alert('Число '  + numb + ' трехзначное и более  положительное');
}
else if(numb<0 && str.length>=3){
    alert('Число '  + numb + ' трехзначное и более отрицательное');
}
//4
let number1=+prompt('Input first number');
let number2=+prompt('Input second number');
let number3=+prompt('Input third number');
if(number1>number2 && number1>number3){
    alert(number1);}
    else if(number2>number1 && number2>number3){
        alert(number2);
    }
else{
    alert(number3);
}

//5
let sideA=prompt('Input number');
let sideB=prompt('Input number');
let sideC=prompt('Input number');
if(sideA+sideB>sideC || sideB+sideC>sideA || sideA+sideC>sideB){
    alert('Треугольник существует');
}
else{
    alert ('Треугольник не существует')
}