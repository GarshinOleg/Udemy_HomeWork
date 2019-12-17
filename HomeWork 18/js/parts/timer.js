//Timer
let deadline = '2020-00-00 00:00';

function getTimeRemainig(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()), //сколько осталось до дедлайна
        seconds = Math.floor((t / 1000) % 60), //получаем количество целых секунд
        minutes = Math.floor((t / 1000 / 60) % 60), //получаем количество целых минут
        hours = Math.floor((t / 1000 / 60 / 60) % 24), //получаем количество целых часов
        days = Math.floor((t / 1000 / 60 / 60 / 24)); //получаем количество целых дней, чтобы показывались дни до дедлайна

    return { //возвращаем объект с данными об оставшемся до дедлайна времени
        'total': t, //все время в миллисекундах
        'seconds': seconds,
        'minutes': minutes,
        'hours': hours,
        'days': days
    };
}

function setClock(id, endtime) { //получаем данные на HTML странице
    let timer = document.getElementById(id),
        days = timer.querySelector('.days'), //добавляю дни
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timerInterval = setInterval(updateClock, 1000);

    function updateClock() { //обновляем цифры на странице
        let t = getTimeRemainig(endtime); //записываем в t весь объект с временными параметрами
        days.textContent = t.days; //обновляем дни на странице, 0 в начале ставить НЕ надо
        if (t.hours >= 10) { //если количество часов больше или равно 10
            hours.textContent = t.hours; //то вставляем в блок без изменений
        } else { //если 9 и меньше(т.е. одна цифра)
            hours.textContent = '0' + t.hours; //то добавляем в начало 0
        }
        if (t.minutes >= 10) { //если количество часов больше или равно 10
            minutes.textContent = t.minutes; //то вставляем в блок без изменений
        } else { //если 9 и меньше(т.е. одна цифра)
            minutes.textContent = '0' + t.minutes; //то добавляем в начало 0
        }
        if (t.seconds >= 10) { //если количество часов больше или равно 10
            seconds.textContent = t.seconds; //то вставляем в блок без изменений
        } else { //если 9 и меньше(т.е. одна цифра)
            seconds.textContent = '0' + t.seconds; //то добавляем в начало 0
        }

        if (t.total <= 0) { //если время вышло
            clearInterval(timerInterval); //останавливаем таймер
            days.textContent = '0'; //ставим нули на местах цифр времени
            hours.textContent = '00'; //ставим нули на местах цифр времени
            minutes.textContent = '00'; //ставим нули на местах цифр времени
            seconds.textContent = '00'; //ставим нули на местах цифр времени
        }

    }
}

setClock('timer', deadline); //запускаем таймер (и весь процесс)

module.exports = timer; //экспортируем модуль