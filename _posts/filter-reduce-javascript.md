---
title: 'Understanding Filter and Reduce in JavaScript'
excerpt: 'Learn how to use filter() and reduce() methods effectively in JavaScript arrays with practical examples'
date: '2024-01-01'
author: 'Santosh Rai'
---

We already know that we use different types of data structures in our application. One of them is JavaScript Arrays. Today I am going to demonstrate some basic methods used in Array and why it is used.

## Filter

### Scenario:

We have an array and want to filter value from that based on attributes. So, how can we filter an array based on attributes?

### Solution:

Here comes rescue by the **filter**. Let's see a simple example.

```javascript
const numbers = [1,2,3,4,5];

const greaterThanThree = numbers.filter(function(number) {
  return number>3;
});
//expected output:[ 4, 5 ]
```

### Definition:

> `filter()` method creates a new array with elements from given array which satisfy the given condition.

### Syntax:

```javascript
const newArray = array.filter(function(item) {
  return condition;
});
```

## Reduce

### Scenario:

How to add a function that will run on every element of an array?

### Solution:

Here comes rescue by **reduce()**. Let's see a simple example.

```javascript
// numbers array
const numbers = [1, 2, 3, 4];

//reducer is a function which you want to do operation in every iteration 
// here accumulator is summing up currentValue 
const reducer = (accumulator, currentValue) => accumulator + currentValue;

//--> case1 : currentValue undefined
// 1 + 2 + 3 + 4
console.log(numbers.reduce(reducer));
// expected output: 10

//--> case2 : currentValue defined as 5
// 5 + 1 + 2 + 3 + 4
console.log(numbers.reduce(reducer, 5));
// expected output: 15
```

### Definition:

`reduce()` is function which reduce given array to one single value

### Syntax:

```javascript
arr.reduce(callback, initialValue);
```
