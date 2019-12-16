function slider() {
    //Slider ----------------------------------------------- Slider ------------------------------------------------
    let slideIndex = 1, //индекс текущего слайда
        slides = document.querySelectorAll('.slider-item'), //сами слайды
        prev = document.querySelector('.prev'), //стрелочка НАЗАД
        next = document.querySelector('.next'), //стрелочка ВПЕРЕД
        dotsWrap = document.querySelector('.slider-dots'), //обёртка точек слайдера(тот раздел, где точки)
        dots = document.querySelectorAll('.dot'); //сами точки

    showSlides(slideIndex); //запускаем показ слайдов

    function showSlides(n) {
        if (n > slides.length) { //чтобы перематывалось в начало, если дошло до конца
            slideIndex = 1;
        }
        if (n < 1) { //чтобы перематывалось в конец, если нажали стрелку НАЗАД, когда стоит первый слайд
            slideIndex = slides.length;
        }
        slides.forEach((item) => item.style.display = 'none'); //сначала скрываем все слайды
        dots.forEach((item) => item.classList.remove('dot-active')); //убираем "активность" с любых точек
        slides[slideIndex - 1].style.display = 'block'; //показываем нужный слайд(сначала первый)
        dots[slideIndex - 1].classList.add('dot-active'); //активируется нужная точка(она становится черной и ее не видно)
    }

    function plusSlides(n) { //показ следующего слайда
        showSlides(slideIndex += n);
    }

    function currentSlide(n) { //показ текущего слайда
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function () { //при нажатии на стрелку НАЗАД - показ прдыдущего слайда
        plusSlides(-1);
    });
    next.addEventListener('click', function () { //при нажатии на стрелку ВПЕРЕД - показ следующего слайда
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function (event) { //при клике на точке - показывается соответствующий слайдер
        for (let i = 0; i < dots.length + 1; i++) { //перебираем все слайдеры
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) { //делегирование, i-1, потому что  slideIndex д.б. от 1 до 4, это номер слайда, а не индекс массива
                currentSlide(i); //показать нужный слайдер
            }
        }
    });
}
module.exports = slider; //экспортируем модуль