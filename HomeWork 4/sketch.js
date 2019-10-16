'use strict()'; //сторгий режим(современный)

let money, time; //вводим 2 глобальные переменные

//Первые вопросы про бюджет
function start() {
    money = +prompt('Ваш бюджет на месяц?', '20000'); //2 переменные для введенных пользователем данных
    time = prompt('Введите дату в формате YYYY-MM-DD', '2019-09-17');
    while (isNaN(money) || (money == '') || (money == null)) {
        money = +prompt('Ваш бюджет на месяц?', '20000');
        time = prompt('Введите дату в формате YYYY-MM-DD', '2019-09-17');
    }
}
start();
//задаем основной объект
let appData = { //ввожу объект appData, как требует задание
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    //задаем обязательные статьи доходов
    chooseExpensees: function() {  
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', 'Еда');
        b = prompt('Во сколько обойдется?', '10000');
        if ((typeof (a) === 'string') && (typeof (a) != null) && (typeof (b) != null) &&
            (a != '') && (b != '') && a.length < 50) {
            //console.log('Done');
            appData.expenses[a] = b;
        } else {
            console.log('User error in chooseExpensees');
            alert('Введите корректные значения!');
            i--;
        }
    }
    },
    //спрашиваем про накопления
    checkSavings: function(){
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?', '5000');
                percent = +prompt('Под какой процент?', '12');
            appData.monthIncome=save/100/12*percent;
            alert('Доход в месяц с вашего депозита: '+appData.monthIncome);
        }
    },
    // 1) Оформить расчет дневного бюджета  и вывод на экран этого значения как одну функцию (detectDayBudget)
    detectDayBudget: function(){
//выводим бюджет на 1 день
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Бюджет на 1 день: " + appData.moneyPerDay);
    },
    // 2) Оформить блок кода с расчетом уровня достатка как отдельную функцию (detectLevel)
    detectLevel: function(){
//выводим в лог сообщение об уровне достатка
if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Ошибка in detectLevel');
}
    },
    // 3) Создать функцию для определения необязательных расходов (chooseOptExpenses):
// Необходимо 3 раза спросить у пользователя “Статья необязательных расходов?”
// Записать ответы в объект optionalExpenses в формате Номер - Ответ. 
// optionalExpenses: {
//     1 : “ответ на вопрос”
//     }
//     Вызывать функции не обязательно.
    chooseOptExpenses: function(){
        for (let i = 0; i < 3; i++) {
            let a = prompt('Статья необязательных расходов?', 'Кино');
            
            if ((typeof (a) === 'string') && (typeof (a) != null)  && (a != '') && a.length < 50) {
                //console.log('Done');
                appData.optionalExpenses[i+1] = a;
            } else {
                console.log('User_error in chooseOptExpenses');
                alert('Введите корректные значения!');
                i--;
            }
        }
    },
    //запрос насчет дополнительных доходов
    chooseIncome: function(){
        for (let i = 0; i < 1; i++) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
            if ((typeof (items) === 'string') && (typeof (items) != null) && (items != '') ) {
                appData.income=items.split(',');
                appData.income.push(prompt('Может что то еще?',''));
                appData.income.sort();
                console.log(appData);
            } else {
                alert('Введите корректные значения!');
                i--;
            }
        }
        //  2) При помощи метода перебора массива(forEach) вывести на экран сообщение
        //    "Способы доп. заработка: " и полученные способы (внутри chooseIncome)
        // Товары должны начинаться с 1, а не с 0. Выполняем этот пункт в chooseIncome.
        //console.log('Способы доп.заработка: ');
        appData.income.forEach(function(items, i, income){
         alert('Способы доп.заработка: '+(i+1)+': '+items);
       });       
    }
};

// 3) Используя цикл for in для объекта (appData) вывести 
// в консоль сообщение "Наша программа включает в себя данные: 
// " (вывести весь appData)
console.log("Наша программа включает в себя данные: ");
for (let key in appData){
    console.log(key);
}

//вывожу в консоль введенные пользователем данные 
console.log(appData);
