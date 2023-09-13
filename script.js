// FIZZ BUZZ
// 1. Skaičius nuo 1 iki 100.
// 2. Skaičiai, kurie dalinasi iš 3 turi būti pakeisti į žodį „Fizz";
// 3. Skaičiai, kurie dalinasi iš 5 turi būti pakeisti į žodį „Buzz";
// 4. Skaičiai, kurie dalinasi iš 3 ir 5 turi būti pakeisti į žodį „FizzBuzz";

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// 5. Skaičiai, kurie dalinasi iš 7, turi būti pakeisti į žodį „Biff".
// 5.1. Skaičiai, kurie dalinasi iš 7 ir 3 turi būti pakeisti į žodį „FizzBiff";
// 5.2. Skaičiai, kurie dalinasi iš 7 ir 5 turi būti pakeisti į žodį „BuzzBiff";
// 5.3. Skaičiai, kurie dalinasi iš 7, iš 5 ir iš 3 turi būti pakeisti į žodį „FizzBuzzBiff";

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
    console.log("FizzBuzzBiff");
  } else if (i % 5 === 0 && i % 7 === 0) {
    console.log("BuzzBiff");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0 && i % 7 === 0) {
    console.log("FizzBiff");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 7 === 0) {
    console.log("Biff");
  } else {
    console.log(i);
  }
}