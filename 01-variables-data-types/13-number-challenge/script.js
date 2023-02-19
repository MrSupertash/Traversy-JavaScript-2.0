// const x = Math.ceil(Math.random() * 100);
// const y = Math.ceil(Math.random() * 50);

// Math.ceil() vs Math.floor()
/* My first thought was since we want value from 1 - 100, we can just round UP the Math.random() * 100 and would get exactly a range from 0 - 100. This is incorrect, since Math.random() generates a number between greater or EQUAL to 0 and less than 100. If the generated number is indeed exactly 0, no rounding up would happen with Math.ceil() and thus we'll get the range from 0 - 100 in the above example and not between 1 and 100.
The correct solution with Math.ceil() would be this:

const x = Math.ceil(Math.random() * 99 + 1);

and this does indeed look less intuitive than the Math.floor() solution adding 1
*/

const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

const sumOutPut = `${x} + ${y} = ${x + y}`;
const differenceOutPut = `${x} - ${y} = ${x - y}`;
const productOutPut = `${x} * ${y} = ${x * y}`;
const quotientOutPut = `${x} / ${y} = ${x / y}`;
const rmOutPut = `${x} % ${y} = ${x % y}`;

console.log(sumOutPut);
console.log(differenceOutPut);
console.log(productOutPut);
console.log(quotientOutPut);
console.log(rmOutPut);