// x is not defined, so the following will log "Uncaught ReferenceError: x is not defined" in the console. 
// console.log(x);

// try {
//     // so here, if we put it into the try ... catch, if the try fails, we "catch" the error and respond to that. The console will no longer say "Uncaught error", because, well, we caught it. And instead will do what we tell it to.
//     console.log(x);
// } catch(error) {
//     console.log('Error: ' + error)
// }

function double(number) {
    if (isNaN(number)) {
        // here we create our own Error response
        throw new Error(number + ' is not a number')
    }
    return number * 2;
}

try {
    const y = double('hello')
    console.log(y);
} catch (error) {
    // this here will take the above created Error for the function that declared it
    console.log(error)
}