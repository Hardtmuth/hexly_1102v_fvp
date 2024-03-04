// Задание 1
const names = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'];
names.forEach((name) => console.log(`Привет, ${name}`));

// Задание 2
const numbers = [1, 2, 3, 4, 5];
const numbersMultiply10 = numbers.map((number) => number * 10);
console.log(numbersMultiply10);

// Задание 3
const anotherNumbers = [5, 12, 8, 130, 44];
const greaterThan10 = anotherNumbers.filter((num) => num > 10);
console.log(greaterThan10);

// Задание 4
const users = [
  {name: 'Иван', age: 23},
  {name: 'Мария', age: 18},
  {name: 'Алексей', age: 32},
  {name: 'Ольга', age: 24},
  {name: 'Сергей', age: 17},
  {name: 'Анна', age: 21},
];
const olderThan18 = users.filter((user) => user.age > 18)
  .map((user) => `${user.name} (${user.age} лет)`);
console.log(olderThan18);

// Задание 5
const sales = [
  {product: 'Телефон', price: 50000, quantity: 1},
  {product: 'Чехол', price: 1500, quantity: 2},
  {product: 'Зарядное устройство', price: 2500, quantity: 1},
];
const total = sales.reduce((acc, sale) => acc + sale.price * sale.quantity, 0);
console.log(`Общая стоимость продаж: ${total}`);
