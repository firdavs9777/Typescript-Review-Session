var numbers = [1, 2, 3, 4, 5];
numbers.map(function (n) {
    console.log(n);
});
var doubleNumbers = numbers.map(function (n) { return n * 2; });
console.log(doubleNumbers);
