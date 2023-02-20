const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];


// Create an array of company names

const companyNames = companies.map(company => company.name);
console.log(companyNames);


// Create an array with just company and category

const categorizedCompanies = companies.map(company => ( { name: company.name, category: company.category } ));
console.log(categorizedCompanies);


// Create an array of the length of each company in years

const companyYears = companies.map(company => ( { name: company.name, length: company.end - company.start } ));
console.log(companyYears);


// Chain map methods

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squareRootAndDouble = numbers
    .map(number => Math.sqrt(number))
    .map(sqrt => sqrt * 2);

console.log(squareRootAndDouble);


// Chaining different methods

const evenDoubled = numbers.filter(number => number % 2 === 0).map(number => number * 2);

console.log(evenDoubled);