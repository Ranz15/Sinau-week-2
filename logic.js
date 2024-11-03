// Variabel Form & Button Submit
// Answer 1
let formUser = document.getElementById("taskPalidrome");
let jawaban = document.getElementById("jawaban");

formUser.addEventListener("submit", function (e) {
  e.preventDefault();

  let inputUser = document.getElementById("inputPalindrome").value;

  function isPalindrome(input) {
    let letter = input.split("");

    let reverseLetters = letter.reverse();

    let joinLetters = reverseLetters.join("");

    if (input.toLowerCase() == joinLetters.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }

  let jawabanConsole = isPalindrome(inputUser);

  jawaban.innerHTML = jawabanConsole;
});

// Answer 2

let formBuzz = document.getElementById("taskFizzBuzz");
let jawabanFizz = document.getElementById("jawabanFizz");

formBuzz.addEventListener("submit", function (e) {
  e.preventDefault;

  let inputFizz = document.getElementById("inputFizz").value;

  function fizzBuzz(input) {
    for (let i = 1; i <= input; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }

  let jawabanBuzz = fizzBuzz(inputFizz);

  jawabanFizz.innerHTML = jawabanBuzz;
});

// Answer 3

let numbers = [];

let sumValue = numbers.reduce(sumArray, 0);

function sumArray(total, num) {
  return total + num;
}

console.log(sumValue);

// Answer 4
let angka = 13;

function isPrime(e) {
  for (let i = 2; i < e; i++) {
    if (e % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(angka));

// Answer 5
let sortingNumber = [5, 4, 3, 2, 1];

function sortArray(value) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < value.length; i += 1) {
      if (value[i - 1] > value[i]) {
        done = false;
        var tmp = value[i - 1];
        value[i - 1] = value[i];
        value[i] = tmp;
      }
    }
  }

  return value;
}

let displaySorted = sortArray(sortingNumber);

console.log(displaySorted);
