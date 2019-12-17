//Modal окно при нажатии кнопки "Унать больше" под таймером

let more = document.querySelector('.more'), //получаем форму "узнать больше"
    overlay = document.querySelector('.overlay'), //получаем анимацию открытия
    close = document.querySelector('.popup-close'); //получаем крестик "закрыть"

more.addEventListener('click', function () { //при нажатии на кнопку "Унать больше"
    overlay.style.display = 'block'; //развернуть форму
    this.classList.add('more-splash'); //анимация открытия
    document.body.style.overflow = 'hidden'; //отключаем прокрутку страницы на заднем фоне
});

close.addEventListener('click', function () { //при нажатии на крестик сверху справа в форме
    overlay.style.display = 'none'; //закрываем/убираем форму
    more.classList.remove('more-splash'); //отключаем анимацию открытия (окно закроется мгновенно)
    document.body.style.overflow = ''; //включаем прокрутку страницы на заднем фоне
});

//Modal окно при нажатии кнопки "Унать подробнее" внизу контента
let descriptionbtn = document.querySelectorAll('.description-btn'); //массив кнопок "узнать подробнее"

//перебираем все 4 кнопки "узнать подробнее" и назначаем на каждую прослушиватель как у кнопки "узнать больше"
descriptionbtn.forEach(function (item) {
    item.addEventListener('click', function () {
        overlay.style.display = 'block'; //развернуть форму
        more.classList.add('more-splash'); //анимация открытия
        document.body.style.overflow = 'hidden'; //отключаем прокрутку страницы на заднем фоне
        //а обработка крестика уже функционирует выше!
    });
});

module.exports = modal; //экспортируем модуль