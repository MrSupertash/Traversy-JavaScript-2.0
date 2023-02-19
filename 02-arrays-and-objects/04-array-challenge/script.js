/*
# Array Challenges

### Challenge 1:

**Instructions:**

Use some of the array methods that we looked at to mutate the following array to = the expected result below:

const arr = [1, 2, 3, 4, 5];

**Expected Result:**

console.log(arr); // [6, 5, 4, 3, 2, 1, 0];
*/

// Solution Challenge #1

const arr = [1, 2, 3, 4, 5];

arr.push(6);
arr.unshift(0);
arr.reverse();

console.log(arr);

// Chaining does not work here because push and unshift return the actual values and not the whole of the array that could be worked with again. Other than in array iterator functions like map or splice or something.

// So arr.reverse().unshift(6); does actually work, since the reverse returns an array, but the unshift does not, so we can't make longer chains!

// arr.reverse().unshift(6); // works!
// arr.reverse().unshift(0).push(0); // does NOT work!

/*
### Challenge 2:

**Instructions:**

Combine `arr1` and `arr2` into a new array called `arr3` with the following elements:

```js
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
````

Notice that both `arr1` and `arr2` include the number 5. You will have to find a way to get rid of the extra 5.

**Expected Result:**

```js
console.log(arr3);
// [1,2,3,4,5,6,7,8,9,10]
```
*/

// Solution Challenge #2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

const arr3 = [...arr1, ...arr2.slice(1)];

console.log(arr3);