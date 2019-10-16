'use strict()'; //сторгий режим(современный)

let money, time, fuser; //вводим 2 глобальные переменные

//HomeWork 6
let startCountButton = document.getElementById('start'),//кнопка Начать расчет
    

    budgetValueBlock = document.getElementsByClassName('budget-value')[0], //правое поле Бюджет
    daybudgetValueBlock = document.getElementsByClassName('daybudget-value')[0], //правое поле Бюджет на 1 день
    levelValueBlock = document.getElementsByClassName('level-value')[0], //правое поле Уровень дохода
    expensesValueBlock = document.getElementsByClassName('expenses-value')[0], //правое поле Обязательные расходы
    optionalexpensesValueBlock = document.getElementsByClassName('optionalexpenses-value')[0], //правое поле Возможные траты
    incomeValueBlock = document.getElementsByClassName('income-value')[0], //правое поле Дополнительный доход
    monthsavingsValueBlock = document.getElementsByClassName('monthsavings-value')[0], //правое поле Накопления за 1 месяц
    yearsavingsValueBlock = document.getElementsByClassName('yearsavings-value')[0], //правое поле Накопления за 1 год

    expensesInput = document.getElementsByClassName('expenses-item'), //поля ввода обязательных расходов

    assert1Button = document.getElementsByTagName('button')[0],//1 кнопка "Утвердить"
    
    assert2Button = document.getElementsByTagName('button')[1],//2 кнопка "Утвердить"
    
    countButton = document.getElementsByTagName('button')[2],//кнопка "Рассчитать"
    
    
    optionalexpensesInput = document.querySelectorAll('.optionalexpenses-item'); //поля необязательных расходов
    

    let otherInput = [];//массив под остальные поля
    otherInput[0] = document.querySelector('#income'), //поле ввода возможного дохода
    otherInput[1] = document.querySelector('#savings'), //чек-бокс "есть ли накопления"
    otherInput[2] = document.querySelector('#sum'), //поле ввода суммы накоплений
    otherInput[3] = document.querySelector('#percent'), //поле ввода процента
    otherInput[4] = document.querySelector('.year-value'), //поле ввода года
    otherInput[5] = document.querySelector('.month-value'), //поле ввода месяца
    otherInput[6] = document.querySelector('.day-value'); //поле ввода дня
    //console.log(otherInput);

//HomeWork 7
//кнопка Начать расчет
startCountButton.addEventListener('click', function() {
    // fuser = 1; //предохранитель снят - можно активировть остальные кнопки
    money = +prompt('Ваш бюджет на месяц?', '20000'); //2 переменные для введенных пользователем данных
    time = prompt('Введите дату в формате YYYY-MM-DD', '2019-09-17');
    while (isNaN(money) || (money == '') || (money == null)) {
        money = +prompt('Ваш бюджет на месяц?', '20000');
        time = prompt('Введите дату в формате YYYY-MM-DD', '2019-09-17');
    }
    appData.budget = money;
    appData.time = time;
    budgetValueBlock.textContent = money.toFixed();
    otherInput[4].value = new Date(Date.parse(time)).getFullYear();
    otherInput[5].value = new Date(Date.parse(time)).getMonth() + 1;
    otherInput[6].value = new Date(Date.parse(time)).getDate();
    assert1Button.disabled = false; //делаем остальные кнопки активными
    assert2Button.disabled = false; //делаем остальные кнопки активными
    countButton.disabled = false; //делаем остальные кнопки активными
});

//кнопка 1 Утвердить
assert1Button.disabled = true; //пока не нажмем кнопку "Начать расчет" - эта кнопка неактивна
assert1Button.addEventListener('click', function(){
    let sum = 0;    //сумма обязательных расходов
    for (let i = 0; i < expensesInput.length; i++) {
        let a = expensesInput[i].value;
            b = expensesInput[++i].value;
        if ((typeof (a) === 'string') && (typeof (a) != null) && (typeof (b) != null) &&
            (a != '') && (b != '') && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            alert('Введите корректные значения!');
            i--;
        }
    }
    expensesValueBlock.textContent = sum; //записываем в поле "Обязательные расходы"
    appData.budget = money-sum; //обновили значение бюджета в главном объекте
    // budgetValueBlock.textContent = (money-sum).toFixed(); //вносим коррективы в "Доход"

});

//кнопка 2 Утвердить
assert2Button.disabled = true; //пока не нажмем кнопку "Начать расчет" - эта кнопка неактивна
assert2Button.addEventListener('click', function() {
    for (let i = 0; i < optionalexpensesInput.length; i++) {
        //let a = optionalexpensesInput[i].value; переписал без использования переменной а
        appData.optionalExpenses[i+1] = optionalexpensesInput[i].value;
        optionalexpensesValueBlock.textContent += optionalexpensesInput[i].value + ' ';
    }
});

//кнопка "Рассчитать"
countButton.disabled = true; //пока не нажмем кнопку "Начать расчет" - эта кнопка неактивна
countButton.addEventListener('click', function() {
    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        daybudgetValueBlock.textContent = appData.moneyPerDay;
            if (appData.moneyPerDay < 100) {
            levelValueBlock.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
            levelValueBlock.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            levelValueBlock.textContent = 'Высокий уровень достатка';
        } else {
            levelValueBlock.textContent = 'Ошибка';
        }
    } else {
        daybudgetValueBlock.textContent = 'Ошибка';
    }
   
});

//Поле статьи возможного дохода
otherInput[0].addEventListener('input', function() {
    let items = otherInput[0].value;
    appData.income=items.split(',');
    incomeValueBlock.textContent = appData.income;
});

//чек-бокс есть ли накопления
otherInput[1].addEventListener('click', function(){
    if (appData.savings == true){
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

//поле ввода суммы накоплений(в связке с процентом накоплений)
otherInput[2].addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +otherInput[2].value; //накопления в месяц
            percent = +otherInput[3].value; //процентная ставка

        appData.monthIncome=sum/100/12*percent; //записываем в объект новое свойство monthIncome
        appData.yearIncome=sum/100*percent; //записываем в объект новое свойство yearIncome

        monthsavingsValueBlock.textContent = appData.monthIncome.toFixed(1); //в правое поле накопления за 1 месяц
        yearsavingsValueBlock.textContent = appData.yearIncome.toFixed(1); //в правое поле накопления за 1 год
    }
});

//поле ввода процента накоплений(в связке с суммой накоплений)
otherInput[3].addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +otherInput[2].value; //накопления в месяц
            percent = +otherInput[3].value; //процентная ставка

        appData.monthIncome=sum/100/12*percent; 
        appData.yearIncome=sum/100*percent;

        monthsavingsValueBlock.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValueBlock.textContent = appData.yearIncome.toFixed(1);
    }
});



//HomeWork 2-3
//задаем основной объект
let appData = { //ввожу объект appData, как требует задание
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    
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

