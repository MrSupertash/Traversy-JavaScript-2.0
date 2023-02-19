/*
## Challenge 1

**Instructions:**

Create a function called `getCelsius()` that takes a temperature in Fahrenheit as an argument and returns the temperature in celsius.

For bonus points, write it as a one line arrow function
*/

// Solution Challenge #1

const getCelsius = tempFahrenheit => (tempFahrenheit - 32) * 5 / 9;

console.log(`The temperature is ${getCelsius(120).toFixed(1)} \xB0C`);


