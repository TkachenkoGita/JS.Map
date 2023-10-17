// Створіть колекцію Set із початковими значеннями 1, 2, 3.
const set = new Set([1,2,3]);
console.log(set)
// За допомогою методу has перевірте наявність елемента зі значенням 3, а потім елемента зі значенням 4
console.log(set.has(3));
console.log(set.has(4));
// Додати ще кілька елементів.
 console.log(set.add(4));
 console.log(set.add(5));
 console.log(set.add(6));
// За допомогою циклу for-of переберіть колекцію та виведіть у консоль.
for(let a of set){
    console.log(a);
}
// Знайдіть суму цих значень.
function sum(set){
    console.log(arguments);
    const arrFromSet=[...arguments];
   console.log( arrFromSet);
 return arrFromSet.reduce((accum, item)=>accum+item);
}
console.log(sum(1,2,3,4,5,6));
// Видаліть елемент 2.
set.delete(2);
console.log(set);
// Очистіть усю колекцію.
set.clear();
console.log(set);

// З масиву [1,6,9,4,9,1,5,6] отримати масив унікальних значень.
const numbers = [1,6,9,4,9,1,5,6];
const uniqueNumbers= new Set(numbers);
console.log(Array.from(uniqueNumbers));
// З масивів [1,6,9,4,9,1,5,6] та [5, 10, 11] отримати один масив унікальних значень.
const numbers2=[5, 10, 11];
const uniqueNumbers2 = new Set(numbers2);
console.log(Array.from(uniqueNumbers2));
const result= [...uniqueNumbers, ...uniqueNumbers2];
console.log(result);
// З масиву
// const messages = [
//   { id: 1, name: 'Ivo', message: 'hello', date: new Date() },
//   { id: 2, name: 'Ivo', message: 'how are you', date: new Date() },
//   { id: 3, name: 'Wally', message: 'hi)', date: new Date() },
//   { id: 4, name: 'Wally', message: 'fine)', date: new Date() },
// ];
// створити: 
const messages = [
    { id: 1, name: 'Ivo', message: 'hello', date: new Date() },
    { id: 2, name: 'Ivo', message: 'how are you', date: new Date() },
    { id: 3, name: 'Wally', message: 'hi)', date: new Date() },
    { id: 4, name: 'Wally', message: 'fine)', date: new Date() },
  ];
// 1) масив імен користувачів (унікальних)
const uniqueNamesOfUsers = new Set (messages);
console.log(uniqueNamesOfUsers);
for(let user of uniqueNamesOfUsers){
    console.log(user.name);
}
