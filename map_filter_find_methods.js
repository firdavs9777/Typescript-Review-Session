// .map() creates a new array by applying a function to each element in the original array. It does not modify the original array.
// It is used to transform each element in an array.
var numbers = [1, 2, 3, 4, 5];
numbers.map(function (n) {
    console.log(n);
});
var doubleNumbers = numbers.map(function (n) { return n * 2; });
console.log(doubleNumbers);
// .find() returns the first element that satisfies the provided condition.
// It stops as soon as it finds the first matching element.
// If no element matches, it returns undefined.
// Real world Example
var users = [
    { id: 1, name: "Alice", age: 22 },
    { id: 2, name: "Bob", age: 30 }
];
var user = users.find(function (user) { return user.id === 2; });
console.log(user);
// Filter method
// Filter creates a new array with all elements that pass a test implemented by the provided function
// It does not modify the original array
var numbers_test = [1, 2, 3, 6];
var evenNumbers = numbers_test.filter(function (n) { return n % 2 === 0; });
console.log(evenNumbers); // Output: [2,4]
var people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 }
];
var olderThanTwenty = people.filter(function (n) { return n.age > 20; });
console.log(olderThanTwenty);
// #Reduce Example
var maxNumbers = [1, 2, 3, 45, 66];
var maxNumber = maxNumbers.reduce(function (max, current) { return (current > max ? current : max); }, maxNumbers[0]);
console.log(maxNumber);
