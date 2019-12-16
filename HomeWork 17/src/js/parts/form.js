//Form ---------------------серверные запросы------------------------------------------------------------------
function form() {
    //объект с сообщениями выполнения запросов
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    //работаем с формой обратной связи 
    let form = document.querySelector('.main-form'), //сама форма
        input = form.getElementsByTagName('input'), //поле ввода
        statusMessage = document.createElement('div'); //новый раздел, где будем писать о статусе запроса(снизу формы)
    statusMessage.classList.add('status'); //добавляем класс СТАТУС к новому разделу в форме

    //функция для очистки полей
    function clearInput() {
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
        //alert('Поля очистились!');
    }

    form.addEventListener('submit', function (event) { //при нажатии на отправить - форма отправляется

        event.preventDefault(); //чтобы страница не обновлялась(убираем стандартное поведение браузера)
        form.appendChild(statusMessage); //добавляем в форму наш div

        function smartRequest() { //описываем функцию "умного" запроса через промисы
            return new Promise(function (resolve, reject) {
                let request = new XMLHttpRequest(); //начинаем описывать и отправлять запрос
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                let formData = new FormData(form); //создаем объект formData

                //превращаем formData в JSON-объект
                let obj = {}; //создаем пустой JS-объект
                formData.forEach(function (value, key) {
                    obj[key] = value; //методом forEach вносим из formData в пустой JS-объект значения ключ-значение(поле формы - значение)
                });
                let json = JSON.stringify(obj); //превращаем наш JS-объект в JSON-объект

                request.send(json); //отправляем JSON-объект

                request.addEventListener('readystatechange', function () { //показ в сообщении статуса запроса
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

        smartRequest(form) //запускаем функцию smartRequest
            .then(() => statusMessage.innerHTML = message.success) //в случае успеха промиса
            .then(clearInput) //чистим поля
            .catch(() => statusMessage.innerHTML = message.failure); //в случае провала промиса
        //clearInput(); 
    }); //конец прослушивателя формы

    //по заданию для контактной формы !!! -------------------!---------------------------------
    let contactForm = document.querySelector('#form'), //сама контакная форма(та, что снизу)
        contactInput = contactForm.getElementsByTagName('input'); //поле ввода для контакной формы

    contactForm.addEventListener('submit', function (event) { //при нажатии на отправить - форма отправляется
        event.preventDefault(); //чтобы страница не обновлялась(убираем стандартное поведение браузера)

        contactForm.appendChild(statusMessage); //добавляем в форму наш div

        function smartRequestContact() { //описываем функцию "умного" запроса через промисы
            return new Promise(function (resolve, reject) {
                let request = new XMLHttpRequest(); //начинаем описывать и отправлять запрос
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                let formData = new FormData(contactForm); //создаем объект formData

                //превращаем formData в JSON-объект
                let obj = {}; //создаем пустой JS-объект
                formData.forEach(function (value, key) {
                    obj[key] = value; //методом forEach вносим из formData в пустой JS-объект значения ключ-значение(поле формы - значение)
                });
                let json = JSON.stringify(obj); //превращаем наш JS-объект в JSON-объект

                request.send(json); //отправляем JSON-объект

                request.addEventListener('readystatechange', function () { //показ в сообщении статуса запроса
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

        function clearInputContact() {
            for (let i = 0; i < contactInput.length; i++) {
                contactInput[i].value = '';
            }
            //alert('Поля очистились!');
        }

        smartRequestContact() //запускаем функцию smartRequest
            .then(() => statusMessage.innerHTML = message.success) //в  случае успеха промиса
            .then(clearInputContact) //чистим поля
            .catch(() => statusMessage.innerHTML = message.failure); //в  случае провала промиса
        //clearInput();
        //.finally(() => alert('сработало finally!')) 

    }); //конец прослушивателя формы
}
module.exports = form; //экспортируем модуль