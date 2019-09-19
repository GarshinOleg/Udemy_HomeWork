'use strict()';//устанавливаю стандарт ES6

let money = prompt('Ваш бюджет на месяц?','20000'),//2 переменные для введенных пользователем данных
    time = prompt('Введите дату в формате YYYY-MM-DD','2019-09-17');
let appData = {   //ввожу объект appData, как требует задание
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
a1 = prompt('Введите обязательную статью расходов в этом месяце','Еда');
a2 = prompt('Во сколько обойдется?','10000');
appData.expenses.a1 = a2;
a3 = prompt('Введите обязательную статью расходов в этом месяце','ЖКХ');
a4 = prompt('Во сколько обойдется?','4000');
appData.expenses.a3 = a4;
alert("Бюджет на 1 день: "+money/30);
//вывожу в консоль введенные пользователем данные 
console.log(appData);