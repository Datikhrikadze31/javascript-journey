// // day 4

// function showMessage() {
//   console.log("Learning javascipt with my friend gpt");
// }

// // showMessage();
// // showMessage();
// // showMessage();

// // // function showPrice(price) {
// // //   console.log("Car price is " + price);
// // // }

// // // showPrice(25000);
// // // showPrice(30000);
// // // showPrice(40000);

// // function showCar(brand, price) {
// //   console.log(brand + " costs " + price);
// // }

// // showCar("BMW", 25000);
// // showCar("MERCEDES", 30000);

// // function calculatePrice(price, tax) {
// //   let total = price + tax;
// //   return total;
// // }

// // let outcome = calculatePrice(25000, 15);
// // console.log(outcome);

// // function calculateDiscount(price, discount) {
// //   let total = price - discount;
// //   return total;
// // }
// // let finalPrice = calculateDiscount(3000, 500);
// // console.log(finalPrice);

// // function calculateTotalPrice(price, tax, discount) {
// //   let discountedPrice = price + tax - discount;
// //   return discountedPrice;
// // }

// // let bigSale = calculateTotalPrice(20000, 1000, 500);
// // console.log(bigSale);

// function add(a, b) {
//   let number = a + b;
//   return number;
// }

// function multiply(number) {
//   let result = number * 3;
//   return result;
// }
// let finalNumber = multiply(add(5, 5));

// console.log(finalNumber);

function checkCarPrice(price) {
  if (price > 2000) {
    console.log("Exspenisve car");
  } else {
    console.log("Cheap car");
  }
}
checkCarPrice(1500);
checkCarPrice(3000);

function checkAge(age) {
  if (age >= 18) {
    console.log("You are allowed to drive");
  } else {
    console.log("Too young");
  }
}
checkAge(16);
checkAge(24);
