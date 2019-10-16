'use strict()';//устанавливаю стандарт ES6

let money = +prompt('Ваш бюджет на месяц?','20000'),//2 переменные для введенных пользователем данных
    time = prompt('Введите дату в формате YYYY-MM-DD','2019-09-17');
let appData = {   //ввожу объект appData, как требует задание
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
// a1 = prompt('Введите обязательную статью расходов в этом месяце','Еда');
// a2 = prompt('Во сколько обойдется?','10000');
// appData.expenses.a1 = a2;
// a3 = prompt('Введите обязательную статью расходов в этом месяце','ЖКХ');
// a4 = prompt('Во сколько обойдется?','4000');
// appData.expenses.a3 = a4;

for (let i=0; i<2;i++){
    let a = prompt('Введите обязательную статью расходов в этом месяце','Еда');
        b = prompt('Во сколько обойдется?','10000');
        if ((typeof(a)=== 'string') && (typeof(a)!= null) && (typeof(b)!= null) 
        && (a != '') && (b != '') && a.length<50) {
            console.log('Done');
            appData.expenses[a] = b;  
        } else {
            console.log('User error');
            alert('Введите корректные значения!');
            i--;
            //ДЗ, что, вернуться на цикл обратно
            //надо вернуть пользователя на шаг назад!
        }
}
appData.moneyPerDay = appData.budget/30;
alert("Бюджет на 1 день: "+appData.moneyPerDay);

if (appData.moneyPerDay<100){
console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay>=100 && appData.moneyPerDay<=2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay>2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Ошибка');
}

//вывожу в консоль введенные пользователем данные 
console.log(appData);
