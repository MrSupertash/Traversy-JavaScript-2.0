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