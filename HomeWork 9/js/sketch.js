window.addEventListener('DOMContentLoaded', function() { //после загрузки DOM-дерева назначаем событие

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'), //все табы с .info-header-tab
        info = document.querySelector('.info-header'), //элемент-родитель .info-header
        tabContent = document.querySelectorAll('.info-tabcontent'); //тексты к табам .info-tabcontent

    function hideTabContent(a) { //функция, скрывающая контент табов(для начала)
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1); //скрыли 2-4 таб, 1 остался видимым (0-ой, который)

    function showTabContent(b) { //показываем содержимое табов
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) { //при клике на определенный таб - показываем определенный контент ЕСЛИ ПРОЩЕ, то мы определяем НОМЕР ткнутого таба, скрываем все контенты, а затем показываем только нужный[i-ый] контент, совпадающий по номеру с ткнутым табом
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) { //если ткнули в элемент(существующий) и этот элемент ТОТ
            for(let i = 0; i < tab.length; i++) { //итерируем по всем табам
                if (target == tab[i]) { //к кликнутому пользователем элементу подобрали через итерацию нужный таб: 
//                    РАЗВЁРНУТО: И дальше мы реализуем такую логику, что при клике на блок с классом info-header:
// 1) идет проверка, что мы попали в блок, содержащий класс info-header-tab + то, что этот элемент вообще поддерживает событие клика ( if (target && target.classList.contains('info-header-tab')) { )
// 2) Запускаем цикл, чтобы прогнать все табы по порядку (for(let i = 0; i < tab.length; i++))
// 3) Теперь внутри цикла в условии мы проверяем что тот таб, в который тыкнул пользователь совпадает с итерируемым. И когда это условие выполнится - мы запускаем функцию показа именного этого таба. ( if (target == tab[i]) { )
                    hideTabContent(0); //скрывает все табы, чтобы потом показать один, требуемый
                    showTabContent(i); //показываем нужный таб
                    break; //когда нашли и всё сделали, выходим из цикла, чтобы не проверять остальные, заведомо неподходящие варианты
                }
            }
        }
        
    });

    //Timer
    let deadline = '2019-11-01 07:30';

    function getTimeRemainig(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()), //сколько осталось до дедлайна
        seconds = Math.floor((t/1000)%60), //получаем количество целых секунд
        minutes = Math.floor((t/1000/60)%60), //получаем количество целых минут
        hours = Math.floor((t/1000/60/60)%24), //получаем количество целых часов
        days = Math.floor((t/1000/60/60/24)); //получаем количество целых дней, чтобы показывались дни до дедлайна

        return { //возвращаем объект с данными об оставшемся до дедлайна времени
            'total' : t, //все время в миллисекундах
            'seconds' : seconds,
            'minutes' : minutes,
            'hours' : hours,
            'days' : days 
        };
    }

    function setClock(id, endtime) { //получаем данные на HTML странице
        let timer = document.getElementById(id), 
            days = timer.querySelector('.days'), //добавляю дни
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timerInterval = setInterval(updateClock,1000);

            function updateClock() { //обновляем цифры на странице
                let t = getTimeRemainig(endtime); //записываем в t весь объект с временными параметрами
                    days.textContent = t.days; //обновляем дни на странице, 0 в начале ставить НЕ надо
                    if (t.hours>=10) { //если количество часов больше или равно 10
                        hours.textContent = t.hours; //то вставляем в блок без изменений
                    } else { //если 9 и меньше(т.е. одна цифра)
                        hours.textContent = '0' + t.hours; //то добавляем в начало 0
                    }
                    if (t.minutes>=10) { //если количество часов больше или равно 10
                        minutes.textContent = t.minutes; //то вставляем в блок без изменений
                    } else { //если 9 и меньше(т.е. одна цифра)
                        minutes.textContent = '0' + t.minutes; //то добавляем в начало 0
                    }
                    if (t.seconds>=10) { //если количество часов больше или равно 10
                        seconds.textContent = t.seconds; //то вставляем в блок без изменений
                    } else { //если 9 и меньше(т.е. одна цифра)
                        seconds.textContent = '0' + t.seconds; //то добавляем в начало 0
                    }

                    if (t.total <= 0){ //если время вышло
                    clearInterval(timerInterval); //останавливаем таймер
                    days.textContent = '0'; //ставим нули на местах цифр времени
                    hours.textContent = '00'; //ставим нули на местах цифр времени
                    minutes.textContent = '00'; //ставим нули на местах цифр времени
                    seconds.textContent = '00'; //ставим нули на местах цифр времени
                    }

            }
    }

    setClock('timer', deadline); //запускаем таймер (и весь процесс)
});


