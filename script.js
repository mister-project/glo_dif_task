let num = 266219;
let str1 = num.toString(); //перевод в тип данных string для разбивки числа на цифры
console.log("Исходное число: " + str1);


// let i = 0;
// while (i < 6) { // выводит 0, затем 1, затем 2 э...
//   console.log( str1[i]);
  
//       i++;
//   console.log( str1[i++]);
 
// }
// let n = 0;
// let x = str1[n];
// console.log(x);
// while (n < 5) {
//   n++
// x = x * str1[n];
// console.log(x);
// }
 


let y = 1;

for(let i = 0; i < 6; i++) {

 y =  y * str1[i];

}

console.log("п.2) Произведение цифр: " + y); // вывод результата последней итерации цикла 
const s = y ** 3
console.log("п.3) возведение в 3 степени : " + s);
