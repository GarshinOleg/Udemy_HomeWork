let menuItemButtons = document.getElementsByClassName('menu-item'), //псевдомассив из кнопок
    menu = document.getElementsByClassName('menu')[0], //в переменную элемент-родителя для кнопок 
    fifthItem = document.createElement('li'), //создаем переменную - новый элемент(5ую кнопку)
    titleText = document.getElementById('title'), //задаем элемент-заголовок
    parentOfAdvert = document.getElementsByClassName('column')[1], //родитель рекламы
    advert = document.getElementsByClassName('adv')[0], //реклама
    answer = document.getElementById('prompt'); //ответчик

//переставялем кнопки местами
menu.insertBefore(menuItemButtons[2],menuItemButtons[1]);

//добавляем 5ую кнопку
fifthItem.textContent = 'Пятый пункт'; //текст кнопки
fifthItem.classList.add('menu-item'); //класс кнопки 
menu.appendChild(fifthItem); //наконец то вставляем 5ую кнопку

//заменяем картинку(фон)
document.body.style.backgroundImage = "url('img/apple_true.jpg')";

//меняем заголовок
titleText.innerHTML = '<h1>Мы продаем только подлинную технику Apple</h1>';

//убираем рекламу
parentOfAdvert.removeChild(advert);
//advert.remove();

//спрашиваем пользоваьтеля
let userAnswer = prompt('Ваше отношение к технике Apple','Хорошая, но дорогая');
answer.textContent = userAnswer;