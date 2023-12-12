'use srtict';
let lang = prompt('на каком языке - ru/en?');
console.log(lang);

  
    
if (lang === 'ru') {
    console.log('Понедельник, Вторник, Четверг, Среда, Пятница, Суббота, Воскресенье');
} else if (lang === 'en') {
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
} else {
    console.log('-')
}
// // решение через switch - case

switch (true) {
    case lang == "ru":
        console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
        break
    case lang = "en":
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturrday, Sunday');
        break
        default:
            console.log('-');

}


let x = [
    ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], 
    ['Даня', 24]
    ];
    
    // отбор строки массива
    console.log(x[Number(lang =='en')]); 
    
const namePerson = prompt('Имя персоны');
console.log(namePerson);
namePerson ==='Артем' ? console.log('директор') : namePerson ==='Алексей' ? console.log('преподаватель') : console.log('студент');
