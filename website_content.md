# Projects

Under Construction





# Blog

## Simple calculator in javascript using MVC pattern

Comments

What do I want to do? I want to write a simple calculator app with plain JavaScript using a Model-View-Controller design pattern. Check out Demo Process Creating 3 files only What the heck is the design pattern? In the programming world, programmers talk about things like singletons, mvc instead of basic terms like int, and arrays. [...]

## How to apply automated unit testing and continuous integration to a simple JavaScript project?

Comments

What is automated testing? Automated Testing is testing where tests are run without human intervention. What is Continuous Integration? Continuous Integration is the practice of integrating of code change into single codebase continuously. Steps Let’s make pipeline for software development Concept: These can be done with the help of continuous integration. Preparation: Let’s get into [...]

## What is double not !! operator in JavaScript

Comments

Introduction As I was reading some JavaScript open-source projects, I found a double not-in-if statement of the JavaScript file which felt weird to me like this. So let’s find out what is !! in JavaScript. This is a shorthand way to convert any value to a boolean. But before that lets know about the truthy [...]

## Understanding Filter and Reduce in JavaScript

Comments

We already know that we use different types of data structures in our application. One of them is JavaScript Arrays. Today I am going to demonstrate some basic methods used in Array and why it is used. Filter Scenario: We have an array and want to filter value from that based on attributes. So, how [...]

## Design Patterns With VBA

Comments

Design Patterns With VBA In the world of programming, design patterns are reusable solutions to common problems that developers often encounter when designing software applications. While VBA (Visual Basic for Applications) is not a full-fledged object-oriented language, it does support several object-oriented principles, allowing developers to implement design patterns to some extent. In this blog [...]



# About

Full Stack Engineer | RPA Engineer

Under Construction





# Contact Me

Here is my contact list

* Linkedin
* Github
* X





# Home

Welcome to my digital garden.

I love indoor gardening beside programming.

## Latest Posts

### Simple calculator in javascript using MVC pattern

### How to apply automated unit testing and continuous integration to a simple JavaScript project?

### What is double not !! operator in JavaScript

### Understanding Filter and Reduce in JavaScript






# Simple calculator in javascript using MVC pattern

## What do I want to do?

I want to write a simple calculator app with plain JavaScript using a Model-View-Controller design pattern.

Check out Demo

## Process

Creating 3 files only

*   index.html : It consists of a single root element only in the body tag.
*   style.css : It has styling for calculator.
*   script.js : It consists of model, view and controller classes.

## What the heck is the design pattern?

In the programming world, programmers talk about things like singletons, mvc instead of basic terms like int, and arrays.

I am not a big fan of this but you will see many different design patterns used in software applications.

In definition Design pattern Wikipedia

A design pattern is the reusable form of a solution to a design problem.

## What is MVC?

MVC(Model View Controller) is one of the popular design patterns.

*   model : application’s data objects are stored
*   view : User Interface
*   controller: decision maker which is linked between model and view, such as clicking

# Conclusion

Hope it helps you to understand MVC. Happy Coding






# How to apply automated unit testing and continuous integration to a simple JavaScript project?

### What is automated testing?

Automated Testing is testing where tests are run without human intervention.

### What is Continuous Integration?

Continuous Integration is the practice of integrating of code change into single codebase continuously.

## Steps

Let’s make pipeline for software development

### Concept:

*   file changes
*   trigger an automated testing
*   release to production

These can be done with the help of continuous integration.

### Preparation:

Let’s get into Github actions as a CI/CD service.

For CI/CD service, there needs to be configured with a YAML file which takes:

*   name of the pipeline or workflow
*   list of jobs
*   list of steps for every job

Github search config file under ./github/workflows so let’s create javascript.yaml file under ./github/workflows

        name: JavaScript workflow
        on: [push]
        jobs:
          test:
            runs-on: ubuntu-latest
            steps:
            - uses: actions/checkout@v1
            - name: Use Node.js 12.x
              uses: actions/setup-node@v1
              with:
                node-version: "12.x"
            - name: npm install, and test
              run: |
                npm install
                npm test
              env:
                CI: true

Now commit the code and push it to github.

### Observation:

You will see the running job on the GitHub Actions Tab. I committed two times, one for the wrong script and another for the correct script.






# What is double not !! operator in JavaScript

### Introduction

As I was reading some JavaScript open-source projects, I found a double not-in-if statement of the JavaScript file which felt weird to me like this.

    if(!!SomeVariable){ //  ??
            //some 
    }

So let’s find out what is !! in JavaScript.

This is a shorthand way to convert any value to a boolean. But before that lets know about the truthy and falsey concepts in JavaScript. *Note: The terms truthy and falsey, which were coined by Douglas Crockford in his book called “JavaScript: The Best Parts”.

According to the concept, these 6 things are falsey:

*   undefined
*   null
*   NaN
*   0
*   “”(empty string)
*   false (of Course)

whereas any object like function, arrays, etc is truthy.

We do have a single not(!) in JavaScript which also converts a value to the boolean. But double not(!) convert it to a real boolean value.

Let’s dive into the code

    let someVariable = 0;
    
    someVariable ? true : false  //return false
    !someVariable ? true : false  //return true
    !!someVariable //return false
    
    typeof !!someVariable  // return boolean

## Explanation:

1.  The first expression has 0 so, it returns false as a result.
2.  Second expression will reverse the logical(true or false) state of the given someVariable. So it return true as result.
3.  Third expression has converted the someVariable into the boolean with its state i.e. false. 4.You can check type of !!someVariable which return boolean.

## Conclusion:

The double not(!!) is great way to convert any variable to the boolean. Hope this help you understanding double not in JavaScript Projects.






# Understanding Filter and Reduce in JavaScript

We already know that we use different types of data structures in our application. One of them is JavaScript Arrays. Today I am going to demonstrate some basic methods used in Array and why it is used.

## Filter

Scenario:

We have an array and want to filter value from that based on attributes. So, how can we filter an array based on attributes?

Solution:

Here comes rescue by the filter. Let’s see a simple example.

    const numbers = [1,2,3,4,5];
    
    const greaterThanThree = numbers.filter(function(number) {
      return number>3;
    });
    //expected output:[ 4, 5 ]

Definition:

> filter() method creates a new array with elements from given array which satisfy the given condition.

Syntax:

    const newArray = array.filter(function(item) {
      return condition;
      });

## Reduce

Scenario:

How to add a function that will run on every element of an array?

Solution:

Here comes rescue by reduce(). Let’s see a simple example.

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

Definition:

`reduce() is function which reduce given array to one single value`

Syntax:

    arr.reduce(callback, initialValue);






# Understanding Filter and Reduce in JavaScript

We already know that we use different types of data structures in our application. One of them is JavaScript Arrays. Today I am going to demonstrate some basic methods used in Array and why it is used.

## Filter

Scenario:

We have an array and want to filter value from that based on attributes. So, how can we filter an array based on attributes?

Solution:

Here comes rescue by the filter. Let’s see a simple example.

    const numbers = [1,2,3,4,5];
    
    const greaterThanThree = numbers.filter(function(number) {
      return number>3;
    });
    //expected output:[ 4, 5 ]

Definition:

> filter() method creates a new array with elements from given array which satisfy the given condition.

Syntax:

    const newArray = array.filter(function(item) {
      return condition;
      });

## Reduce

Scenario:

How to add a function that will run on every element of an array?

Solution:

Here comes rescue by reduce(). Let’s see a simple example.

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

Definition:

`reduce() is function which reduce given array to one single value`

Syntax:

    arr.reduce(callback, initialValue);






# Understanding Filter and Reduce in JavaScript

We already know that we use different types of data structures in our application. One of them is JavaScript Arrays. Today I am going to demonstrate some basic methods used in Array and why it is used.

## Filter

Scenario:

We have an array and want to filter value from that based on attributes. So, how can we filter an array based on attributes?

Solution:

Here comes rescue by the filter. Let’s see a simple example.

    const numbers = [1,2,3,4,5];
    
    const greaterThanThree = numbers.filter(function(number) {
      return number>3;
    });
    //expected output:[ 4, 5 ]

Definition:

> filter() method creates a new array with elements from given array which satisfy the given condition.

Syntax:

    const newArray = array.filter(function(item) {
      return condition;
      });

## Reduce

Scenario:

How to add a function that will run on every element of an array?

Solution:

Here comes rescue by reduce(). Let’s see a simple example.

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

Definition:

`reduce() is function which reduce given array to one single value`

Syntax:

    arr.reduce(callback, initialValue);






# Understanding Filter and Reduce in JavaScript

We already know that we use different types of data structures in our application. One of them is JavaScript Arrays. Today I am going to demonstrate some basic methods used in Array and why it is used.

## Filter

Scenario:

We have an array and want to filter value from that based on attributes. So, how can we filter an array based on attributes?

Solution:

Here comes rescue by the filter. Let’s see a simple example.

    const numbers = [1,2,3,4,5];
    
    const greaterThanThree = numbers.filter(function(number) {
      return number>3;
    });
    //expected output:[ 4, 5 ]

Definition:

> filter() method creates a new array with elements from given array which satisfy the given condition.

Syntax:

    const newArray = array.filter(function(item) {
      return condition;
      });

## Reduce

Scenario:

How to add a function that will run on every element of an array?

Solution:

Here comes rescue by reduce(). Let’s see a simple example.

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

Definition:

`reduce() is function which reduce given array to one single value`

Syntax:

    arr.reduce(callback, initialValue);






# Understanding Filter and Reduce in JavaScript

We already know that we use different types of data structures in our application. One of them is JavaScript Arrays. Today I am going to demonstrate some basic methods used in Array and why it is used.

## Filter

Scenario:

We have an array and want to filter value from that based on attributes. So, how can we filter an array based on attributes?

Solution:

Here comes rescue by the filter. Let’s see a simple example.

    const numbers = [1,2,3,4,5];
    
    const greaterThanThree = numbers.filter(function(number) {
      return number>3;
    });
    //expected output:[ 4, 5 ]

Definition:

> filter() method creates a new array with elements from given array which satisfy the given condition.

Syntax:

    const newArray = array.filter(function(item) {
      return condition;
      });

## Reduce

Scenario:

How to add a function that will run on every element of an array?

Solution:

Here comes rescue by reduce(). Let’s see a simple example.

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

Definition:

`reduce() is function which reduce given array to one single value`

Syntax:

    arr.reduce(callback, initialValue);






# Understanding Filter and Reduce in JavaScript

We already know that we use different types of data structures in our application. One of them is JavaScript Arrays. Today I am going to demonstrate some basic methods used in Array and why it is used.

## Filter

Scenario:

We have an array and want to filter value from that based on attributes. So, how can we filter an array based on attributes?

Solution:

Here comes rescue by the filter. Let’s see a simple example.

    const numbers = [1,2,3,4,5];
    
    const greaterThanThree = numbers.filter(function(number) {
      return number>3;
    });
    //expected output:[ 4, 5 ]

Definition:

> filter() method creates a new array with elements from given array which satisfy the given condition.

Syntax:

    const newArray = array.filter(function(item) {
      return condition;
      });

## Reduce

Scenario:

How to add a function that will run on every element of an array?

Solution:

Here comes rescue by reduce(). Let’s see a simple example.

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

Definition:

`reduce() is function which reduce given array to one single value`

Syntax:

    arr.reduce(callback, initialValue);






# Understanding Filter and Reduce in JavaScript

We already know that we use different types of data structures in our application. One of them is JavaScript Arrays. Today I am going to demonstrate some basic methods used in Array and why it is used.

## Filter

Scenario:

We have an array and want to filter value from that based on attributes. So, how can we filter an array based on attributes?

Solution:

Here comes rescue by the filter. Let’s see a simple example.

    const numbers = [1,2,3,4,5];
    
    const greaterThanThree = numbers.filter(function(number) {
      return number>3;
    });
    //expected output:[ 4, 5 ]

Definition:

> filter() method creates a new array with elements from given array which satisfy the given condition.

Syntax:

    const newArray = array.filter(function(item) {
      return condition;
      });

## Reduce

Scenario:

How to add a function that will run on every element of an array?

Solution:

Here comes rescue by reduce(). Let’s see a simple example.

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

Definition:

`reduce() is function which reduce given array to one single value`

Syntax:

    arr.reduce(callback, initialValue);






# Understanding Filter and Reduce in JavaScript

We already know that we use different types of data structures in our application. One of them is JavaScript Arrays. Today I am going to demonstrate some basic methods used in Array and why it is used.

## Filter

Scenario:

We have an array and want to filter value from that based on attributes. So, how can we filter an array based on attributes?

Solution:

Here comes rescue by the filter. Let’s see a simple example.

    const numbers = [1,2,3,4,5];
    
    const greaterThanThree = numbers.filter(function(number) {
      return number>3;
    });
    //expected output:[ 4, 5 ]

Definition:

> filter() method creates a new array with elements from given array which satisfy the given condition.

Syntax:

    const newArray = array.filter(function(item) {
      return condition;
      });

## Reduce

Scenario:

How to add a function that will run on every element of an array?

Solution:

Here comes rescue by reduce(). Let’s see a simple example.

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

Definition:

`reduce() is function which reduce given array to one single value`

Syntax:

    arr.reduce(callback, initialValue);






# Understanding Filter and Reduce in JavaScript

We already know that we use different types of data structures in our application. One of them is JavaScript Arrays. Today I am going to demonstrate some basic methods used in Array and why it is used.

## Filter

Scenario:

We have an array and want to filter value from that based on attributes. So, how can we filter an array based on attributes?

Solution:

Here comes rescue by the filter. Let’s see a simple example.

    const numbers = [1,2,3,4,5];
    
    const greaterThanThree = numbers.filter(function(number) {
      return number>3;
    });
    //expected output:[ 4, 5 ]

Definition:

> filter() method creates a new array with elements from given array which satisfy the given condition.

Syntax:

    const newArray = array.filter(function(item) {
      return condition;
      });

## Reduce

Scenario:

How to add a function that will run on every element of an array?

Solution:

Here comes rescue by reduce(). Let’s see a simple example.

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

Definition:

`reduce() is function which reduce given array to one single value`

Syntax:

    arr.reduce(callback, initialValue);






# Understanding Filter and Reduce in JavaScript

We already know that we use different types of data structures in our application. One of them is JavaScript Arrays. Today I am going to demonstrate some basic methods used in Array and why it is used.

## Filter

Scenario:

We have an array and want to filter value from that based on attributes. So, how can we filter an array based on attributes?

Solution:

Here comes rescue by the filter. Let’s see a simple example.

    const numbers = [1,2,3,4,5];
    
    const greaterThanThree = numbers.filter(function(number) {
      return number>3;
    });
    //expected output:[ 4, 5 ]

Definition:

> filter() method creates a new array with elements from given array which satisfy the given condition.

Syntax:

    const newArray = array.filter(function(item) {
      return condition;
      });

## Reduce

Scenario:

How to add a function that will run on every element of an array?

Solution:

Here comes rescue by reduce(). Let’s see a simple example.

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

Definition:

`reduce() is function which reduce given array to one single value`

Syntax:

    arr.reduce(callback, initialValue);






# Understanding Filter and Reduce in JavaScript

We already know that we use different types of data structures in our application. One of them is JavaScript Arrays. Today I am going to demonstrate some basic methods used in Array and why it is used.

## Filter

Scenario:

We have an array and want to filter value from that based on attributes. So, how can we filter an array based on attributes?

Solution:

Here comes rescue by the filter. Let’s see a simple example.

    const numbers = [1,2,3,4,5];
    
    const greaterThanThree = numbers.filter(function(number) {
      return number>3;
    });
    //expected output:[ 4, 5 ]

Definition:

> filter() method creates a new array with elements from given array which satisfy the given condition.

Syntax:

    const newArray = array.filter(function(item) {
      return condition;
      });

## Reduce

Scenario:

How to add a function that will run on every element of an array?

Solution:

Here comes rescue by reduce(). Let’s see a simple example.

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

Definition:

`reduce() is function which reduce given array to one single value`

Syntax:

    arr.reduce(callback, initialValue);






# Understanding Filter and Reduce in JavaScript

We already know that we use different types of data structures in our application. One of them is JavaScript Arrays. Today I am going to demonstrate some basic methods used in Array and why it is used.

## Filter

Scenario:

We have an array and want to filter value from that based on attributes. So, how can we filter an array based on attributes?

Solution:

Here comes rescue by the filter. Let’s see a simple example.

    const numbers = [1,2,3,4,5];
    
    const greaterThanThree = numbers.filter(function(number) {
      return number>3;
    });
    //expected output:[ 4, 5 ]

Definition:

> filter() method creates a new array with elements from given array which satisfy the given condition.

Syntax:

    const newArray = array.filter(function(item) {
      return condition;
      });

## Reduce

Scenario:

How to add a function that will run on every element of an array?

Solution:

Here comes rescue by reduce(). Let’s see a simple example.

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

Definition:

`reduce() is function which reduce given array to one single value`

Syntax:

    arr.reduce(callback, initialValue);






# Understanding Filter and Reduce in JavaScript

We already know that we use different types of data structures in our application. One of them is JavaScript Arrays. Today I am going to demonstrate some basic methods used in Array and why it is used.

## Filter

Scenario:

We have an array and want to filter value from that based on attributes. So, how can we filter an array based on attributes?

Solution:

Here comes rescue by the filter. Let’s see a simple example.

    const numbers = [1,2,3,4,5];
    
    const greaterThanThree = numbers.filter(function(number) {
      return number>3;
    });
    //expected output:[ 4, 5 ]

Definition:

> filter() method creates a new array with elements from given array which satisfy the given condition.

Syntax:

    const newArray = array.filter(function(item) {
      return condition;
      });

## Reduce

Scenario:

How to add a function that will run on every element of an array?

Solution:

Here comes rescue by reduce(). Let’s see a simple example.

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

Definition:

`reduce() is function which reduce given array to one single value`

Syntax:

    arr.reduce(callback, initialValue);






# Understanding Filter and Reduce in JavaScript

We already know that we use different types of data structures in our application. One of them is JavaScript Arrays. Today I am going to demonstrate some basic methods used in Array and why it is used.

## Filter

Scenario:

We have an array and want to filter value from that based on attributes. So, how can we filter an array based on attributes?

Solution:

Here comes rescue by the filter. Let’s see a simple example.

    const numbers = [1,2,3,4,5];
    
    const greaterThanThree = numbers.filter(function(number) {
      return number>3;
    });
    //expected output:[ 4, 5 ]

Definition:

> filter() method creates a new array with elements from given array which satisfy the given condition.

Syntax:

    const newArray = array.filter(function(item) {
      return condition;
      });

## Reduce

Scenario:

How to add a function that will run on every element of an array?

Solution:

Here comes rescue by reduce(). Let’s see a simple example.

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

Definition:

`reduce() is function which reduce given array to one single value`

Syntax:

    arr.reduce(callback, initialValue);






# Understanding Filter and Reduce in JavaScript

We already know that we use different types of data structures in our application. One of them is JavaScript Arrays. Today I am going to demonstrate some basic methods used in Array and why it is used.

## Filter

Scenario:

We have an array and want to filter value from that based on attributes. So, how can we filter an array based on attributes?

Solution:

Here comes rescue by the filter. Let’s see a simple example.

    const numbers = [1,2,3,4,5];
    
    const greaterThanThree = numbers.filter(function(number) {
      return number>3;
    });
    //expected output:[ 4, 5 ]

Definition:

> filter() method creates a new array with elements from given array which satisfy the given condition.

Syntax:

    const newArray = array.filter(function(item) {
      return condition;
      });

## Reduce

Scenario:

How to add a function that will run on every element of an array?

Solution:

Here comes rescue by reduce(). Let’s see a simple example.

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

Definition:

`reduce() is function which reduce given array to one single value`

Syntax:

    arr.reduce(callback, initialValue);






# Understanding Filter and Reduce in JavaScript

We already know that we use different types of data structures in our application. One of them is JavaScript Arrays. Today I am going to demonstrate some basic methods used in Array and why it is used.

## Filter

Scenario:

We have an array and want to filter value from that based on attributes. So, how can we filter an array based on attributes?

Solution:

Here comes rescue by the filter. Let’s see a simple example.

    const numbers = [1,2,3,4,5];
    
    const greaterThanThree = numbers.filter(function(number) {
      return number>3;
    });
    //expected output:[ 4, 5 ]

Definition:

> filter() method creates a new array with elements from given array which satisfy the given condition.

Syntax:

    const newArray = array.filter(function(item) {
      return condition;
      });

## Reduce

Scenario:

How to add a function that will run on every element of an array?

Solution:

Here comes rescue by reduce(). Let’s see a simple example.

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

Definition:

`reduce() is function which reduce given array to one single value`

Syntax:

    arr.reduce(callback, initialValue);






# Design Patterns With VBA

**Design Patterns With VBA**

In the world of programming, design patterns are reusable solutions to common problems that developers often encounter when designing software applications. While VBA (Visual Basic for Applications) is not a full-fledged object-oriented language, it does support several object-oriented principles, allowing developers to implement design patterns to some extent. In this blog post, we’ll explore three design patterns that can be applied in VBA: Abstraction, Encapsulation, and Polymorphism.

**1\. Abstraction**

Abstraction is the process of hiding complex implementation details and providing a simplified interface for the user to interact with. In VBA, you can achieve abstraction by using classes and interfaces.

Example: Suppose you have a module that handles different types of file operations (reading, writing, deleting, etc.). Instead of exposing all the implementation details to the user, you can create an abstract class or interface that defines the common methods for file operations. Then, you can create concrete classes that implement these methods for specific file types (e.g., TextFileHandler, ExcelFileHandler, etc.).

**2\. Encapsulation**

Encapsulation is the mechanism of bundling data and methods together within a class, and controlling access to these members from outside the class. In VBA, you can achieve encapsulation by using classes and defining the appropriate access modifiers (Public, Private, Friend) for the class members.

Example: Suppose you have a class that represents a bank account. You can encapsulate the account details (account number, balance, etc.) within the class and provide public methods to perform operations like depositing or withdrawing money.

**3\. Polymorphism**

Polymorphism is the ability of objects to take on many forms. In VBA, you can achieve polymorphism through method overloading and method overriding.

Example: Suppose you have a class that represents different shapes (e.g., Circle, Rectangle, Triangle). You can define a common method like `CalculateArea()` in a base class (e.g., `Shape`), and then override this method in the derived classes to provide specific implementations for calculating the area of each shape.

While VBA may not be as robust as other object-oriented languages, understanding and applying design patterns can help you write more maintainable, extensible, and reusable code. By leveraging principles like abstraction, encapsulation, and polymorphism, you can create more modular and flexible applications in the world of VBA.






# Simple calculator in javascript using MVC pattern

# What do I want to do?

I want to write a simple calculator app with plain JavaScript using a Model-View-Controller design pattern.

Check out [Demo]()

# Process

Creating 3 files only

*   index.html : It consists of a single root element only in the body tag.
*   style.css : It has styling for calculator.
*   script.js : It consists of model, view and controller classes.

## What the heck is the design pattern?

In the programming world, programmers talk about things like singletons, mvc instead of basic terms like int, and arrays.

I am not a big fan of this but you will see many different design patterns used in software applications.

In definition [Design pattern Wikipedia]()

A design pattern is the reusable form of a solution to a design problem.

## What is MVC?

MVC(Model View Controller) is one of the popular design patterns.

*   model : application’s data objects are stored
*   view : User Interface
*   controller: decision maker which is linked between model and view, such as clicking

# Conclusion

Hope it helps you to understand MVC. Happy Coding






# How to apply automated unit testing and continuous integration to a simple JavaScript project?

### What is automated testing?

Automated Testing is testing where tests are run without human intervention.

### What is Continuous Integration?

Continuous Integration is the practice of integrating of code change into single codebase continuously.

## Steps

Let’s make pipeline for software development

### Concept:

*   file changes
*   trigger an automated testing
*   release to production

These can be done with the help of continuous integration.

### Preparation:

Let’s get into Github actions as a CI/CD service.

For CI/CD service, there needs to be configured with a YAML file which takes:

*   name of the pipeline or workflow
*   list of jobs
*   list of steps for every job

Github search config file under ./github/workflows so let’s create javascript.yaml file under ./github/workflows

        name: JavaScript workflow
        on: [push]
        jobs:
          test:
            runs-on: ubuntu-latest
            steps:
            - uses: actions/checkout@v1
            - name: Use Node.js 12.x
              uses: actions/setup-node@v1
              with:
                node-version: "12.x"
            - name: npm install, and test
              run: |
                npm install
                npm test
              env:
                CI: true

Now commit the code and push it to github.

### Observation:

You will see the running job on the GitHub Actions Tab. I committed two times, one for the wrong script and another for the correct script.



