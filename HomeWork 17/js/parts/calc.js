//Калькулятор на сайте
let persons = document.querySelectorAll('.counter-block-input')[0], //поле Количество людей
    restDays = document.querySelectorAll('.counter-block-input')[1], //поле На сколько дней
    place = document.getElementById('select'), //выбор базы отдыха
    totalValue = document.getElementById('total'), //ощая сумма
    personsSum = 0, //переменная для Количество людей
    daysSum = 0, //переменная Количество дней
    total = 0; //переменная общей суммы

totalValue.innerHTML = 0; //зануляем сумму на сайте

persons.addEventListener('change', function () { //при вводе в поле Количество людей считается сумма, с проверка ненулевого второго поля
    personsSum = +this.value;
    total = (personsSum + daysSum) * 4000;

    if (restDays.value == '' || persons.value == '') {
        totalValue.innerHTML = 0;
    } else {
        totalValue.innerHTML = total;
    }
});

restDays.addEventListener('change', function () { //при вводе в поле На сколько дней считается сумма, с проверка ненулевого второго поля
    daysSum = +this.value;
    total = (personsSum + daysSum) * 4000;

    if (persons.value == '' || restDays.value == '') {
        totalValue.innerHTML = 0;
    } else {
        totalValue.innerHTML = total;
    }
});

place.addEventListener('change', function () { //изменение суммы при выборе базы
    if (restDays.value == '' || persons.value == '') { //если какое то из полей пустые - занулять сумму
        totalValue.innerHTML = 0;
    } else {
        let a = total; //сумма, но она идет в качестве переменной, так что каждый раз будет такая же
        totalValue.innerHTML = a * this.options[this.selectedIndex].value; //умножаем сумму на К-т базы
    }
});

module.exports = calc; //экспортируем модуль
