'use strict';

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,//бюджет
    timeData: time,
    expenses: {},//расход
    optionalExpenses: {},
    income: [],
    savings: false

}; 
let answer1 = prompt("Введите обязательную статью расходов в этом месяце");
let answer2 = prompt("Во сколько обойдется?");
let answer3 = prompt("Введите обязательную статью расходов в этом месяце");
let answer4 = prompt("Во сколько обойдется?");
appData.expenses = {  //заполняем расходы
    answer1: answer2,
    answer3: answer4
};


alert("бюджет на 1 день: "+appData.budget/30);

