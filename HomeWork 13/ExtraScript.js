//дополнительное задание
//          +Создать класс options
// ·       + Он должен содержать свойства: height, width, bg, fontSize, textAlign
// ·       + Он должен содержать метод, создающий новый div на странице, записывающий в него любой текст и при помощи cssText изменять свой стиль из переданных параметров
// ·        +Создать новый объект через класс
// ·        +Вызвать его метод и получить элемент на странице

class Options { //объявление класса Options, надо писать с большой буквы
    constructor(height, width, bg, fontSize, textAlign) { //что будет делаться при создании нового экземпляра класса
        this.height = height; //свойство "height" у этого экземпляра и т.д.
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    //какими методами будет обладать этот класс:
    createDiv(text = 'some default text') { //метод "createDiv" класса options
        let div = document.createElement('div'); //создает новый элемент с тэгом div
        document.body.appendChild(div); //вставляем в конце body 
        div.textContent = text; //записывает текст от пользователя в него
        div.style.cssText = `height: ${this.height}px; width: ${this.width}px; 
        background-color: ${this.bg}; font-Size: ${this.fontSize}px; 
        text-align: ${this.textAlign};`; //придаем тексту стиль из переданных параметров

    }
}
//Создать новый объект через класс
let newObjectOfOptions = new Options (50, 150, 'red', 16, 'center');
// Вызвать его метод и получить элемент на странице
newObjectOfOptions.createDiv('любой текст');

