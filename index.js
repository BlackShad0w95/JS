console.log("Hello Panda");


const first_variable = 1
let second_variable = "nazwa"

console.log(first_variable)
console.log(second_variable)


 const zmienna1 = 1;
 const zmienna2 = "1";
 console.log(zmienna1 == zmienna2);
 console.log(zmienna1 === zmienna2);

// == converts to the same type
// === takes variable as it it


let new_variable;
console.log("Check if variable exists and has no value")
console.log(!! new_variable)
console.log(typeof new_variable === 'undefined');

new_variable = 2
console.log("Check if variable exists and has value")
console.log(typeof new_variable != 'undefined');

// var - global
// let - available in specific scope

// Wypisać liczby parzyste w zakresie od 1 do 20

let i = 0;
let end = 20;

console.log("Numbers from do-while")
do {
    if (i%2 === 0) {
        console.log(i);
    }
    i = i+1;
}
while (i<= end)

console.log("Numbers from for")
for (i = 0; i<= end; i++) {
    if (i%2 === 0) {
        console.log(i)
    }
}

i = 0;
console.log("Numbers from while")
while (i<=end) {
    if (i%2 === 0) {
        console.log(i)
    }
    i++;
}

// arrays

const numbers = [];

for (let k = 0; k < 10; k++) {
    numbers[k] = k+1;
}
console.log("Array with numbers")
console.log(numbers)

console.log("Printing value from array through for-in")
for (let number in numbers) {
    console.log(numbers[number])
}

console.log("Printing value from array through for-of")
for (let number of numbers) {
    console.log(number)
}

// for each
// numbers.forEach((ele))



const first_number = 5;
const second_number = 10;

console.log("Bigger number:")
if (first_number > second_number) {
    console.log(first_number)
}
else {
    console.log(second_number)
}

// zmienna1 > zmienna2 ? console.log(zmienna1) : console.log(zmienna2)
console.log("Liczba wieksza: ", first_number > second_number ? first_number : second_number)