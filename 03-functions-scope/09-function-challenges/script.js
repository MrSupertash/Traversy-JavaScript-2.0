/*
## Challenge 1

**Instructions:**

Create a function called `getCelsius()` that takes a temperature in Fahrenheit as an argument and returns the temperature in celsius.

For bonus points, write it as a one line arrow function
*/

// Solution Challenge #1

const getCelsius = tempFahrenheit => (tempFahrenheit - 32) * 5 / 9;

console.log(`The temperature is ${getCelsius(120).toFixed(1)} \xB0C`);


/*
## Challenge 2

**Instructions:**

Create an arrow function called `minMax()` that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array.

**Expected Result:**

console.log(minMax([1, 2, 3, 4, 5])); // { min: 1, max: 5 }
*/

// Solution Challenge #2

const minMax = arr => {
    const obj = {
        min: 0,
        max: 0,        
    };

    arr.forEach(num => {
        if (num < obj.min) {
            obj.min = num;
        };

        if (num > obj.max) {
            obj.max = num;
        }
    });

    return obj;
}

console.log(minMax([1, 23, 3, -4, 5]));


/*
## Challenge 3

Create an IIFE (Immediately Invoked Function Expression) that takes in the length and width of a rectangle outputs it to the console in a message as soon as the page loads.

**Expected Result:**

```JavaScript
// On page load
The area of a rectangle with a length of 10 and a width of 5 is 50.
*/

// Solution Challenge #3

(function () {
    const length = 12;
    const width = 23;
    const area = length * width;
    console.log(`The area of a rectangle with the length of ${length} and width of ${width} is ${area}.`);
})()