'use srtict';
let lang = prompt('на каком языке - ru/en?');
console.log(lang);
if (lang === 'ru') {
    console.log('Понедельник, Вторник, Среда, Пятница, Суббота, Воскресенье');
} else if (lang === 'en') {
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
} else {
    console.log('введено не верное значение')
}

// решение через switch - case

switch (lang) {
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Пятница, Суббота, Воскресенье');
        break
    case 'en':
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
        break
        default:
            console.log('введено не верное значение');

}