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

    hideTabContent(1); //скрыли 2-4 таб, первый остался видимым (0-ой, который, по массивам)

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
    let deadline = '2019-12-01 00:00';

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

    //Modal окно при нажатии кнопки "Унать больше" под таймером

    let more = document.querySelector('.more'), //получаем форму "узнать больше"
        overlay = document.querySelector('.overlay'), //получаем анимацию открытия
        close = document.querySelector('.popup-close'); //получаем крестик "закрыть"

    more.addEventListener('click', function(){ //при нажатии на кнопку "Унать больше"
        overlay.style.display = 'block'; //развернуть форму
        this.classList.add('more-splash'); //анимация открытия
        document.body.style.overflow = 'hidden'; //отключаем прокрутку страницы на заднем фоне
    });

    close.addEventListener('click', function(){ //при нажатии на крестик сверху справа в форме
        overlay.style.display = 'none'; //закрываем/убираем форму
        more.classList.remove('more-splash'); //отключаем анимацию открытия (окно закроется мгновенно)
        document.body.style.overflow = ''; //включаем прокрутку страницы на заднем фоне
    });   

    //Modal окно при нажатии кнопки "Унать подробнее" внизу контента
   let descriptionbtn = document.querySelectorAll('.description-btn'); //массив кнопок "узнать подробнее"

    //перебираем все 4 кнопки "узнать подробнее" и назначаем на каждую прослушиватель как у кнопки "узнать больше"
    descriptionbtn.forEach(function(item){
        item.addEventListener('click', function(){
            overlay.style.display = 'block'; //развернуть форму
            more.classList.add('more-splash'); //анимация открытия
            document.body.style.overflow = 'hidden'; //отключаем прокрутку страницы на заднем фоне
            //а обработка крестика уже функционирует выше!
        });
    });

    //Form ---------------------серверные запросы------------------------------------------------------------------

    //объект с сообщениями выполнения запросов
    let message = { 
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    //работаем с формой обратной связи 
    let form = document.querySelector('.main-form'), //сама форма
        input = form.getElementsByTagName('input'), //поле ввода

        //по заданию тоже самое, только для контактной формы
        contactForm = document.querySelector('#form'), //сама контакная форма(та, что снизу)
        contactInput = contactForm.getElementsByTagName('input'), //поле ввода для контакной формы
        
        statusMessage = document.createElement('div'); //новый раздел, где будем писать о статусе запроса(снизу формы)
        statusMessage.classList.add('status'); //добавляем класс СТАТУС к новому разделу в форме
        //--------------------------------------------------------------------------------------------------------
        //функция для очистки полей
        function clearInput(){
            for (let i = 0; i > input.length; i++) { 
                input[i].value = ''
                alert('Поля очистились!');
            }
        }

        function clearInputContact(){
            for (let i = 0; i > input.length; i++) { 
                contactInput[i].value = ''
                alert('Поля очистились!');
            }
        }

        form.addEventListener('submit', function(event){ //при нажатии на отправить - форма отправляется
            
            event.preventDefault(); //чтобы страница не обновлялась(убираем стандартное поведение браузера)
            form.appendChild(statusMessage); //добавляем в форму наш div

            function smartRequest() { //описываем функцию "умного" запроса через промисы
                return new Promise(function(resolve, reject){
                    let request = new XMLHttpRequest(); //начинаем описывать и отправлять запрос
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
            let formData = new FormData(form); //создаем объект formData
    
            //превращаем formData в JSON-объект
            let obj = {}; //создаем пустой JS-объект
            formData.forEach(function(value, key){
                obj[key] = value;  //методом forEach вносим из formData в пустой JS-объект значения ключ-значение(поле формы - значение)
            });
            let json = JSON.stringify(obj); //превращаем наш JS-объект в JSON-объект
    
            request.send(json); //отправляем JSON-объект
    
            request.addEventListener('readystatechange', function(){ //показ в сообщении статуса запроса
                statusMessage.innerHTML = message.loading; //"загрузка", если еще не загрузился
                if (request.readyState === 4) {
                    if (request.status == 200) {
                        resolve();
                        } else {
                        reject();
                    }
                }
            });

        }); //конец промиса
            
            } //конец функции smartRequest 

            smartRequest()   //запускаем функцию smartRequest
            .then(() => statusMessage.innerHTML = message.success) //в  случае успеха промиса
            .then(clearInput()) //чистим поля
            .catch(() => statusMessage.innerHTML = message.failure) //в  случае провала промиса
            
            //.finally(() => alert('сработало finally!')) 

    }); //конец прослушивателя формы

    //по заданию для контактной формы !!! -------------------!---------------------------------

    contactForm.addEventListener('submit', function(event){ //при нажатии на отправить - форма отправляется
        event.preventDefault(); //чтобы страница не обновлялась(убираем стандартное поведение браузера)
        
        contactForm.appendChild(statusMessage); //добавляем в форму наш div

    function smartRequestContact() { //описываем функцию "умного" запроса через промисы
        return new Promise(function(resolve, reject){
            let request = new XMLHttpRequest(); //начинаем описывать и отправлять запрос
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
            let formData = new FormData(contactForm); //создаем объект formData
    
            //превращаем formData в JSON-объект
            let obj = {}; //создаем пустой JS-объект
            formData.forEach(function(value, key){
                obj[key] = value;  //методом forEach вносим из formData в пустой JS-объект значения ключ-значение(поле формы - значение)
            });
            let json = JSON.stringify(obj); //превращаем наш JS-объект в JSON-объект
    
            request.send(json); //отправляем JSON-объект
    
            request.addEventListener('readystatechange', function(){ //показ в сообщении статуса запроса
                statusMessage.innerHTML = message.loading; //"загрузка", если еще не загрузился
                if (request.readyState === 4) {
                    if (request.status == 200) {
                        resolve();
                        } else {
                        reject();
                    }
                }
            });

        }); //конец промиса
            
            } //конец функции smartRequest 

            smartRequestContact()   //запускаем функцию smartRequest
            .then(() => statusMessage.innerHTML = message.success) //в  случае успеха промиса
            .then(clearInputContact()) //чистим поля
            .catch(() => statusMessage.innerHTML = message.failure) //в  случае провала промиса
            
            //.finally(() => alert('сработало finally!')) 

    }); //конец прослушивателя формы

    //     let request = new XMLHttpRequest(); //начинаем описывать и отправлять запрос
    //     request.open('POST', 'server.php');
    //     request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    //     let formData = new FormData(contactForm); //создаем объект formData

    //     //превращаем formData в JSON-объект
    //     let obj = {}; //создаем пустой JS-объект
    //     formData.forEach(function(value, key){
    //         obj[key] =  value;  //методом forEach вносим из formData в пустой JS-объект значения
    //     });
    //     let json = JSON.stringify(obj); //превращаем наш JS-объект в JSON-объект

    //     request.send(json); //отправляем JSON-объект

    //     request.addEventListener('readystatechange', function(){ //показ в сообщении статуса запроса
    //         if (request.readyState < 4) {
    //             statusMessage.innerHTML = message.loading; //"загрузка", если не загрузился
    //         } else if (request.readyState === 4 && request.status == 200) {
    //             statusMessage.innerHTML = message.success; //"успех", если загрузился
    //         } else {
    //             statusMessage.innerHTML = message.failure; //"ошибка", если произошла ошибка
    //         }
    //     });

    //     //очищаем все поля ввода после отправки запроса
    //     for (let i = 0; i > contactInput.length; i++) { 
    //         contactInput[i].value = '';
    //     }

    // });
});


