'use strict';
let arrOfIntagers = [],
    min = 1000,
    max = 9000,
    random = Math.floor(min + Math.random() * (max + 1 - min)),
    numberString = random.toString(),
    sum = 0;

for (let i = 0; i < numberString.length; i++) {
    arrOfIntagers.push(numberString[i]);
}
for (let i = 0; i < arrOfIntagers.length; i++) {
    sum += parseInt(arrOfIntagers[i]);

}
document.write(`Случайное число: ${random}`);
document.write(`<br> Сумма цифр числа: ${sum}`);