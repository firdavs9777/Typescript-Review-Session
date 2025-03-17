// .map() creates a new array by applying a function to each element in the original array. It does not modify the original array.
// It is used to transform each element in an array.

let numbers: number[] = [1, 2, 3, 4, 5];
numbers.map((n: number) => {
  console.log(n);
} )
let doubleNumbers = numbers.map(n => n * 2);
console.log(doubleNumbers)



// .find() returns the first element that satisfies the provided condition.
// It stops as soon as it finds the first matching element.
// If no element matches, it returns undefined.

// Real world Example
let users = [
  { id:1, name: "Alice", age: 22 },
  { id: 2, name: "Bob", age: 30}
]

let user = users.find(user => user.id === 2);
console.log(user);


// Filter method
// Filter creates a new array with all elements that pass a test implemented by the provided function
// It does not modify the original array
let numbers_test: number[] = [1, 2, 3, 6]
let evenNumbers = numbers_test.filter(n => n % 2 === 0);
console.log(evenNumbers) // Output: [2,4]


let people = [
  { name: "Alice", age:25},
  { name: "Bob", age: 30 },
  {name: "Charlie", age: 25}
]

let olderThanTwenty = people.filter(n => n.age > 20)
console.log(olderThanTwenty)



// #Reduce Example

let maxNumbers: number[] = [1, 2, 3, 45, 66]
let maxNumber = maxNumbers.reduce((max, current) => (current > max ? current : max), maxNumbers[0]);
console.log(maxNumber)