let num = 266219;
let str1 = num.toString(); //перевод в тип данных string для разбивки числа на цифры
console.log("Исходное число: " + str1);

let y = 1;

for(let i = 0; i < 6; i++) {

 y =  y * str1[i];

}

console.log("п.2) Произведение цифр: " + y); // вывод результата последней итерации цикла 
const s = y ** 3
console.log("п.3) возведение в 3 степени : " + s);
