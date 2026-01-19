---
title: 'What is double not !! operator in JavaScript'
excerpt: 'Understanding the double not operator and how it converts values to boolean in JavaScript'
date: '2024-01-05'
author: 'Santosh Rai'
---

## Introduction

As I was reading some JavaScript open-source projects, I found a double not-in-if statement of the JavaScript file which felt weird to me like this.

```javascript
if(!!SomeVariable){ //  ??
        //some 
}
```

So let's find out what is `!!` in JavaScript.

This is a shorthand way to convert any value to a boolean. But before that lets know about the **truthy** and **falsey** concepts in JavaScript.

*Note: The terms truthy and falsey, which were coined by Douglas Crockford in his book called "JavaScript: The Best Parts".*

According to the concept, these 6 things are **falsey**:

- `undefined`
- `null`
- `NaN`
- `0`
- `""` (empty string)
- `false` (of Course)

whereas any object like function, arrays, etc is **truthy**.

We do have a single not(`!`) in JavaScript which also converts a value to the boolean. But double not(`!!`) convert it to a real boolean value.

Let's dive into the code:

```javascript
let someVariable = 0;

someVariable ? true : false  //return false
!someVariable ? true : false  //return true
!!someVariable //return false

typeof !!someVariable  // return boolean
```

## Explanation:

1. The first expression has `0` so, it returns `false` as a result.
2. Second expression will reverse the logical(true or false) state of the given `someVariable`. So it return `true` as result.
3. Third expression has converted the `someVariable` into the boolean with its state i.e. `false`.
4. You can check type of `!!someVariable` which return `boolean`.

## Conclusion:

The double not(`!!`) is great way to convert any variable to the boolean. Hope this help you understanding double not in JavaScript Projects.
