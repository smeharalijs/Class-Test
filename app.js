
// ****************************** 1 *********************************

// let fruits = ["apple", "banana", "mango", "orange", "stawberry"];
// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
//     let fruit = fruits.indexOf(fruits[i]); 
//     console.log(`Elements at index ${fruit} is  ${fruits[i]}`);
// }





// ****************************** 2 *********************************



// let a = ["cake", "apple pie", "cookie", "chips", "patties"];
// let user = prompt("Enter Bakery Item Name").toLowerCase();
// for(let i = 0; i < a.length; i++){
//     if(user === a[i]){
//         let item = a.indexOf(a[i])
//         console.log(`cookie is available at index ${item} in our bakery`);
//         break;
//     }

//     else{
//         console.log(`We are sorry ${user} is not available in our bakery`);

//     }

// }




// ****************************** 3 *********************************



// let scores = [12, 45, 3, 22, 34, 50];
// let Value = +prompt("Enter the stop value:");
// let stopScore = [];
// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] <= Value) {
//         stopScore.push(scores[i]);
//     }
// }
// console.log(stopScore);




// ****************************** 4 *********************************

// -----a ----


// let line = "";
// for (let i = 1; i <= 4; i++) {
//     line = "*****";
//     console.log(line);
// }




// -----b ----

// let stars = [7]
// let line = "";
// for (let i = stars; i >= 1; i--) {
//     line += "*";
//     console.log(line);
// })


// -----c ----


// let line = "";
// for (let i = 1; i <= 20; i++ ){
//     line += "*";
//     console.log(line);
// }


// ****************************** 5 *********************************





// function calculate(num1, num2, operator) {
//     let num1 = +prompt("Enter Number 1");
//     let operator = prompt("+, -, /, *, %");
//     let num2 = +prompt("Enter Number 2");
//     if (operator == "+") {
//         console.log(num1 + num2);
//     } else if (operator == "-") {
//         console.log(num1 - num2);
//     } else if (operator == "/") {
//         console.log(num1 / num2);
//     } else if (operator == "*") {
//         console.log(num1 * num2);
//     } else if (operator == "%") {
//         console.log(num1 % num2);
//     } else {
//         console.log("Invalid");
//     }
// }
// calculate(num1, num2, operator)



// ****************************** 6 *********************************



// function palindrome() {
//     let word = prompt("Enter polindrom word");
//     let reversedWord = word.split('').reverse().join('');
//     if (word === reversedWord) {
//         return `${word} is a polindrome`
//     } else {
//         return `${word} not a polindrome`
//     }
// }
// console.log(palindrome());




// ****************************** 7 *********************************




// function celsiusToFahrenheit(celsius) {
//     let f = (celsius * 9 / 5) + 32;
//     console.log(`${celsius}°C is ${f}°F.`);
// }
// celsiusToFahrenheit(40);

// function fahrenheitToCelsius(fahrenheit) {
//     let c = (fahrenheit - 32) * 5 / 9;
//     console.log(`${fahrenheit}°F is ${c}°C.`);
// }
// fahrenheitToCelsius(50);



// ****************************** 8 *********************************


// const books = [
//     { title: "book1", author: "author1", price: 20 },
//     { title: "book2", author: "author2", price: 30 },
//     { title: "book3", author: "author3", price: 25 },
//     { title: "book4", author: "author4", price: 15 },
// ];

// function filterBooks(bookArray, maxPrice) {
//     const affordableBooks = [];
//     for (const book of bookArray) {
//         if (book.price <= maxPrice) {
//             affordableBooks.push(book);
//         }
//     }

//     return affordableBooks;
// }

// let  expenseBook = filterBooks(books , 25);
// console.log(expenseBook);

