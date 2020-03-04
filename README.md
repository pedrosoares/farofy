# farofy

Manipulate arrays using async function but wait each promise finish to execute next one.

## Problem

```
const data = [1,2,3,4,5, ...100];
const result = data.map(async (number) => {
    return number * 2;
});
console.log(result); // Result is an Array with 100 Promises
```

## Solution

```
const data = [1,2,3,4,5, ...100];
const result = await data.asyncMap(async (number) => {
    return number * 2;
});
console.log(result); // Result is an Array with 100 numbers
```