const cart = [
    { id: 1, name: 'Product 1', price: 130 },
    { id: 2, name: 'Product 2', price: 85 },
    { id: 3, name: 'Product 3', price: 67 },
];

const total = cart.reduce((acc, curr) => (acc + curr.price), 0);
console.log(total);