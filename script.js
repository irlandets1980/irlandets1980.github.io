'use strict';

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses : {},
    income : [],
    savings: false

};
let question1 = prompt("Введите обязательную статью расходов в этом месяце");
let question2 = prompt("Во сколько обойдется?");
appData.expenses = {
    question1: question2,
    question1: question2,
};



// let sum = 2+3;

// let arr = ['plum.png','orange.bmp'];

// console.log('сумма равна = '+sum);
// let answer = +prompt('вы уверены?','да');
// console.log(answer);
