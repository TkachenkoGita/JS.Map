
const map1 =[[1,"first"], [3,"third"]];

// Створіть колекцію Map з цього масиву (по суті, вона співставляє значенням чисел їх порідковий числівник).
const map2 = new Map(map1);
console.log(map2);


// Отримайте кількість елементів
console.log(map2.size);


// Додати та видалити елемент.
console.log(map2.set(2,"second"));
console.log(map2.delete(2));


// Здійсніть пошук за ключом.
console.log(map2.get(1));
console.log(map2.get(2));
console.log(map2.get(3));

// Отримайте список ключів та значень окремо
console.log(map2.keys());
console.log(map2.values());


// Перевірити, чи є в мапі числівник для числа 2.
console.log(map2.get(2));
console.log(map2.has(2));


// Написати функцію, яка перероблятиме текст з числами
// "This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents."
//  на текст з порядковими числівниками за допомогою мапи вище:
// "This year I will enter the first grade. I have two brothers. I am the third child of my parents."

const vocabulary = new Map();
vocabulary.set("1", "first").set("3", "third");

function changeNumbers(number){
    //створити массив чисел [1, 3];
 const ourChangeNumbers = number.split(" ")
    //За массивом якщо є відповідний ключ отримати значення [first, third]
    const ourChangedNumbers= ourChangeNumbers.map(w=>vocabulary.has(w)?vocabulary.get(w):w);
    //Вкласти їx у рядок
    const wordsNumber= `This year I will enter the ${ourChangedNumbers[0]} grade. I have two brothers. I am the ${ourChangedNumbers[1]} child of my parents.`
    return wordsNumber;
}


const number= "1 3" ;
const changeWords= changeNumbers(number);
console.log(changeWords);