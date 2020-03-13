

function getRandomIntInclusive(min, max) { //Получение случайного целого числа в заданном интервале, включительно
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  } 

//   Во всех заданиях обязательно использовать рекурсию.


// // 1. Написать функцию возведения числа в степень.

function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  
  alert( pow(2, 3) ); // 8


// // 2. Написать функцию поиска наибольшего общего делителя.

let i = getRandomIntInclusive(100,999);
let j = getRandomIntInclusive(100, 999)
console.log(`${i}            ${j}`);
function del(x, y, arg) { //arg - число, на котрое мы делим аргументы
    
    if(Math.max(x, y) == arg) {
        return res;
    } else {
        if(x % arg == 0 && y % arg == 0) {
            res = arg;
        }
        return del(x, y, arg + 1);
    }

}
let res = 1;
console.log(del(i, j, res));  

// // 3. Написать функцию для поиска максимальной цифры в числе.

let start = 0; //start - наибольшая цифра по умолчанию, 0
let temp = 0;
// let number = BigInt(getRandomIntInclusive(1, 999999999999999)); //это не работает
let number = getRandomIntInclusive(1, 999999999); 
console.log(number);
function biggestNumber (arg) { 
    if (arg <= 0){             
        return start;
    } else {
        while (arg % 10 == 0) {       //убираем нулевые разряды числа
            arg = arg / 10;
        }
        if (arg % 10 > start) {
            start = arg % 10;
         }
        }
        temp = arg % 10;                //единицы числа
        return biggestNumber(arg-temp); //возвращаем число с разрядом единиц, равным 0
    }
console.log(biggestNumber(number));


// // 4. Написать функцию, которая определяет простое ли переданное число.

let simpleNumber = getRandomIntInclusive(100, 9999)
console.log(simpleNumber);
let divider = 1; //1 - делитель любого числа
let tempSimpleNumber = 2;
function simpleOrNot (arg) {
    if (divider !== 1 || tempSimpleNumber == arg) {  
        switch (true) {
            case (divider !== 1): {                           //есть делители помимо 1
                return "Число не простое";
            }
            case (divider == 1 && tempSimpleNumber == arg): { // нет делителей помимо 1
                return "Число простое";
            }
        }
        
    } else {
        if(arg % tempSimpleNumber == 0) {
            divider = tempSimpleNumber;
        }
        tempSimpleNumber++;
        return simpleOrNot (arg);
    }
}
console.log(simpleOrNot(simpleNumber));
// // 5. Написать функцию для вывода всех множителей переданного числа в возрастающем порядке.
// // Например: число 18 – множители 2 * 3 * 3.

let tempArray = [];                                     //массив для простых множителей
let numberfactor = getRandomIntInclusive(100,200);
console.log(numberfactor);
let divider = 2;
function factorsOfANumber (arg) {
    if (arg == 1) {
        return tempArray
    } else {
        while (arg % divider == 0) {                        
            tempArray.push(divider);
            arg = arg/divider;
        }
        divider++;
        return factorsOfANumber(arg);
    }
}
console.log(factorsOfANumber(numberfactor));

// 6. Написать функцию, которая возвращает число Фибоначчи
// по переданному порядковому номеру.
// Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на
// том, что каждое число равно сумме двух предыдущих чисел.
// Например: порядковый номер 3 – число 2, порядковый
// номер 6 – число 8

let array = [1, 1];                 //начальный массив чисел Фибоначчи
let k = getRandomIntInclusive(5,40) //порядковый номер числа который нужно вернуть
console.log(k);
function fibonacci(array) {
   if (array.length == k) {
       return array[array.length-1];
   }
   array.push(array[array.length-2] + array[array.length-1]);
   return fibonacci(array);
}
console.log(fibonacci(array));