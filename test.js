// Question 1
// ✅ Correct
let age = 24;
{
  let age = 30;
  console.log(age);
}
console.log(age);

// Question 2
// ✅ Correct
let cars = ["BMW", "MERCEDES", "AUDI"];

cars[0] = "Toyota";
cars[2] = "Ferrari";

console.log(cars);

// Question 3
// ❌ Question 3
cars = [
  { brand: "BMW", price: 20000 },
  { brand: "Mercedes", price: 30000 },
];

console.log(cars.price[0]);
console.log(cars.brand[1]);

// ✅ Correct version
let cars = [
  { brand: "BMW", price: 20000 },
  { brand: "Mercedes", price: 30000 },
];

console.log(cars[0].price);
console.log(cars[1].brand);

// Question 4
// ✅ Correct
function calculatePrice(price, tax) {
  return price + tax;
}

let finalPrice = calculatePrice(20000, 1000);

console.log(finalPrice);

// Question 5
// ✅ Correct
function add(a, b) {
  return a + b;
}
function multiply(number) {
  return number * 2;
}

let result = multiply(add(5, 10));
console.log(result);

// Question 6
// ❌ Question 6
// car = {
//   brand: "BMW",
//   price: 20000,
// };

// function showCar(brand, price) {
//   let carDetails = brand + " Costs " + price;
//   return carDetails;
// }

// let fullPrice = showCar(car);
// console.log(fullPrice);

// ✅ Correct version 1 - keep function, pass 2 values
let car = {
  brand: "BMW",
  price: 20000,
};

function showCar(brand, price) {
  let carDetails = brand + " costs " + price;
  return carDetails;
}

let fullPrice = showCar(car.brand, car.price);
console.log(fullPrice);

// ✅ Correct version 2  make function accept object
//   let car = {
//     brand: "BMW",
//     price: 20000,
//   };

//   function showCar(car) {
//     let carDetails = car.brand + " costs " + car.price;
//     return carDetails;
//   }

//   let fullPrice = showCar(car);
//   console.log(fullPrice);

// Question 7
// ✅ Correct
let prices = [10000, 20000, 30000];

function addTax(price) {
  let total = price + 1000;
  return total;
}

console.log(addTax(prices[0]));
console.log(addTax(prices[1]));
console.log(addTax(prices[2]));

// Question 8
// ✅ Correct
function checkCar(price) {
  if (price > 25000) {
    console.log("Premium car");
  } else {
    console.log("Budget car");
  }
}
checkCar(20000);
checkCar(30000);

// Quetion 9
// ❌ Question
// let car = {
//     price: 30000
//   }

//   function calculateDiscount(price){
//       return price - 2000
//   }

//   console.log(calculateDiscount(car.price))
// Question 10
// You're Very Close
let cars = [
  { brand: "BMW", price: 20000 },
  { brand: "Mercedes", price: 30000 },
];

function checkExpensive(brand, price) {
  if (price > 25000) {
    return "Exspensive";
  } else {
    return "Cheap";
  }
}
// ✅ Correct version
let cars = [
  { brand: "BMW", price: 20000 },
  { brand: "Mercedes", price: 30000 },
];

function checkExpensive(price) {
  if (price > 25000) {
    return "Expensive";
  } else {
    return "Cheap";
  }
}

console.log(checkExpensive(cars[0].price));
console.log(checkExpensive(cars[1].price));
