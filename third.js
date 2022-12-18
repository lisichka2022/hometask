'use strict'
let yearOfBirth=prompt('Ваш год рождения ' );
let currentAge=new Date().getFullYear() - yearOfBirth;
if(yearOfBirth===null){
    alert('Жаль, что Вы не захотели ввести свою дату рождения')
}
let town=prompt('В каком городе Вы живете?');
if(town===null){
    alert('Жаль, что Вы не захотели ввести свой город')
}
let favouriteSport=prompt('Ваш любимый вид спорта');
if(yearOfBirth===null){
    alert('Жаль, что Вы не захотели ввести свой любимый вид спорта')
}
let message
switch(town){
    case 'Киев':
        message= 'Ты живешь в столице Украины';
        break;
    case 'Москва':
        message= 'Ты живешь в столице россии';
        break;
    case 'Минск':
        message= 'Ты живешь в столице Беларуси ';   
        break;
        default:
        message='ты живешь в городе ' + town;
        break;
            }
let message1;
switch(favouriteSport){
    case 'плаванье':
        message1= 'Круто! Хочешь стать Максимом Крипаком? ';
        break;
    case 'футбол':
            message1='Круто! Хочешь стать Месси? ';
         break;
    case 'бокс':
            message1='Круто! Хочешь стать Александром Усиком? ';
}
let result= String(currentAge)+ '  ' +   message + '  ' +   message1;
alert(result);