let num = 266219;
console.log(typeof num);
let str1 = num.toString(); 
// console.log(str1); 
// let i = 0;
// while (i < 6) { // выводит 0, затем 1, затем 2 э...
//   console.log( str1[i]);
  
//       i++;
//   console.log( str1[i++]);
 
// }
let n = 0;
let x = str1[n];
console.log(x);
while (n < 5) {
  n++
x = x * str1[n];
console.log(x);
}
