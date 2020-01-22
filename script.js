'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();
let appData = {
    budget: money, //бюджет
    timeData: time,
    expenses: {}, //расход
    optionalExpenses: {},
    income: [],
    savings: true

};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
            b = prompt("Во сколько обойдется?");

        if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null && a != "" && b != "" && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            console.log("bad result");
            i--;
        }

    }
}
chooseExpenses();

function detectDayBudget() {
    appData.manyPerDay = (appData.budget / 30).toFixed(1);

    alert("Ежедневный бюджет : " + appData.manyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.manyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.manyPerDay > 100 && appData.manyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.manyPerDay > 200) {
        console.log('Высокий уровень достатка');

    } else {
        console.log('Произошла ошибка');
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?");
        let percent = +prompt("Под какой процент");
        appData.monthIncome = save / 100 / 12 * percent;
        alert('Доход в месяц с вашего депозиnа: ' + (appData.monthIncome).toFixed(1));
    }
}
checkSavings();

function chooseOptExpenses() {
    let optionalExpenses;
    for (let i = 0; i < 3; i++) {
       appData.optionalExpenses[i+1] = prompt("Статья необязательных расходов?");

    }
    console.log(appData.optionalExpenses);
}
chooseOptExpenses();