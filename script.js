let count = 0;
count += 1;
count += 1;
count += 1;

console.log(count);

// let challenge
let age = 24;
console.log(age);

// const challenge
const name = "Dati";
console.log(name);

// reassigment
let score = 10;

score = 20;

console.log(score);

// Execution Order
let price = 100;
console.log(price);

price = 200;
console.log(price);

const number = 5;
{
  console.log(number);
}

// shadowing
let size = 30;

{
  let size = 20;
  console.log(size);
}

// arrays, indexing , push , pop , change value
let cars = ["BMW", "MERCEDES", "REDBULL"];
cars.push("AUDI");
cars.pop();
cars[0] = "MACLAREN";
console.log(cars);
