# TypeScript Review

Welcome to the **TypeScript Review** repository! This project aims to provide a comprehensive learning resource for TypeScript. Whether you're a beginner or looking to deepen your knowledge, this repo will help you understand both core and advanced TypeScript features.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Concepts Covered](#concepts-covered)
  - [Basic TypeScript Features](#basic-typescript-features)
  - [Advanced TypeScript Concepts](#advanced-typescript-concepts)
  - [Object-Oriented Programming](#object-oriented-programming)
  - [Generics and Advanced Types](#generics-and-advanced-types)
  - [Asynchronous Programming](#asynchronous-programming)
- [How to Use](#how-to-use)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This repository is a hands-on guide to learning TypeScript from scratch. It covers all the essential concepts such as types, functions, classes, generics, and interfaces, and also dives deep into advanced topics like type aliases, union types, and decorators. It is designed for developers who want to gain practical knowledge of TypeScript and use it effectively in real-world projects.

## Installation

To get started, clone this repository to your local machine:

```bash
git clone https://github.com/firdavs9777/Typescript-Review-Session.git

1. tsc basics.ts 
2. node basics.ts
```

```bash
typescript_review/
├── src/
│   ├── basics/
│   ├── advanced/
│   ├── oop/
│   └── generics/
├── tsconfig.json
├── README.md
└── package.json



```
# JavaScript & TypeScript Array Methods: `map()`, `filter()`, `find()`, `reduce()`

## Key Differences:
- **`.map()`**: Transforms every element in the array to a new value.
- **`.filter()`**: Filters the array to include only elements that satisfy the condition.
- **`.find()`**: Finds the first element that satisfies the condition.
- **`.reduce()`**: Reduces the array to a single value, typically used for aggregating or summarizing data.

---

## 1. `.map()`
Transforms each element in an array and returns a new array.

### Example 1: Doubling Numbers
```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let doubled = numbers.map(n => n * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]
```
## 2. `.filter()`
```typescript

let numbers: number[] = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]
```
## 3. `.find()`
```typescript 

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];
let user = users.find(user => user.name === "Bob");
console.log(user); // Output: { id: 2, name: "Bob" }

```
### Sum of Numbers -  `.reduce()`

```typescript 
let numbers: number[] = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum); // Output: 15
