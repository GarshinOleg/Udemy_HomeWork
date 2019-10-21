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
    let deadline = '2019-11-01';

    function getTimeRemainig(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()), //сколько осталось до дедлайна
        seconds = Math.floor((t/1000)%60), //получаем количество целых секунд
        minutes = Math.floor((t/1000/60)%60), //получаем количество целых минут
        hours = Math.floor((t/1000/60/60)); //получаем количество целых часов
        //days = Math.floor((t/1000/60/60/24)); //получаем количество целых дней

        return { //возвращаем объект с данными об оставшемся до дедлайна времени
            'total' : t, //все время в миллисекундах
            'seconds' : seconds,
            'minutes' : minutes,
            'hours' : hours
            //'days' : days
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById('timer'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timerInterval = setInterval(updateClock,1000);

            function updateClock() {
                let t = getTimeRemainig(endtime);
                    hours.textContent = t.hours;
                    minutes.textContent = t.minutes;
                    seconds.textContent = t.seconds;

                    if (t.total <= 0){
                    clearInterval(timerInterval);
                    }

            }
    }

    setClock('timer', deadline);
});


