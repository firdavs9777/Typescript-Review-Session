// -- Array Types

let numbers: number[] = [1, 2, 23, 4, 5]

// Using the "Array<type> syntax"

let names: Array<string> = ["Alice", "Bob", "Charlie"];
let phoneNumbers: Array<number> = [+82108272672, +82103553223]; 
let users: (string | number)[]

users = [1, "Max"];
users = [1, 2]
console.log(users)


// Access elements
let firstNumber = numbers[0]; // 1

// Modify elements
numbers[2] = 10; // Now the array becomes [1, 2, 10, 4, 5]

// Adding elements
numbers.push(6); // Now the array becomes [1, 2, 10, 4, 5, 6]

// Removing elements
numbers.pop(); // Removes 6, array becomes [1, 2, 10, 4, 5]
console.log(numbers)