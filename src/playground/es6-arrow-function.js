// ES5
var square = function(x) {
    return x * x;
}

// ES6 Arrow Function
const squareArrow = (x) => {
    return x * x;
}

// ES6 Arrow Function Expression (Implied return)
const squareArrowExpression = (x) => x * x;

// arguments object - no longer bound in arrow function
const add = (a, b) => {
    //console.log(arguments); // throws error
    return a + b;
}

// this keyword - no longer bound in arrow function
// map - loop for arrays
const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());

