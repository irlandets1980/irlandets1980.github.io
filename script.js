'use strict';

let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money, //бюджет
    timeData: time,
    expenses: {}, //расход
    optionalExpenses: {},
    income: [],
    savings: false

};




for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");

    if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null && a != "" && b != "" && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {                            
        console.log ("bad result");
        i--;
    }

};
appData.manyPerDay = appData.budget / 30;

alert("Ежедневный бюджет : " + appData.budget / 30);

if (appData.manyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.manyPerDay > 100 && appData.manyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.manyPerDay > 200) {
    console.log('Высокий уровень достатка');

}else{
    console.log('Произошла ошибка');
}