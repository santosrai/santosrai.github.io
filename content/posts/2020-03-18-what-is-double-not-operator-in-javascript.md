---
template: post
title: What is double not !! operator in JavaScript
slug: posts/What is double not !! operator in JavaScript
draft: false
date: 2020-03-18T04:23:50.505Z
description: Learning double not operator in JavaScript
category: JavaScript Operator
tags:
  - JavaScript Operator
---
### Introduction

As I was reading some JavaScript open source project, I found double not in if statement of JavaScript file which felt weird to me like this.

```javascript
if(!!SomeVariable){ //  ??
        //some 
}
```

So let's found out what is !! in JavaScript.

This is shorthand way to convert any value to a boolean. But before that lets know about truthy and falsey concept in JavaScript. *note : The terms truthy and falsey, which were coined by Douglas Crockford in his book called "JavaScript: The Best Parts".

According to concept, these 6 things are falsey:

* undefined
* null
* NaN
* 0
* ""(empty string)
* false (of Course)

whereas any object like function, arrays etc are truthy.

We do have single not(!) too in JavaScript which also convert a value to the boolean. But double not(!) convert it to a real boolean value.

Lets dive into the code

```javascript
let someVariable = 0;

someVariable ? true : false  //return false
!someVariable ? true : false  //return true
!!someVariable //return false

typeof !!someVariable  // return boolean
```

## Explanation:

1. First expression has 0 so, it return false as result.
2. Second expression will reverse the logical(true or false) state of the given someVariable. So it return true as result.
3. Third expression has converted the someVariable into the boolean with its state i.e. false. 4.You can check type of !!someVariable which return boolean.

## Conclusion:

The double not(!!) is great way to convert any variable to the boolean. Hope this help you understanding double not in JavaScript Projects.
