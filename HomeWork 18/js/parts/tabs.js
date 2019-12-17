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

info.addEventListener('click', function (event) { //при клике на определенный таб - показываем определенный контент ЕСЛИ ПРОЩЕ, то мы определяем НОМЕР ткнутого таба, скрываем все контенты, а затем показываем только нужный[i-ый] контент, совпадающий по номеру с ткнутым табом
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) { //если ткнули в элемент(существующий) и этот элемент ТОТ
        for (let i = 0; i < tab.length; i++) { //итерируем по всем табам
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

module.exports = tabs; //экспортируем модуль