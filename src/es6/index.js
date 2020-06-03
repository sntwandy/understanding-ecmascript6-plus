// Default values before ECMAScript 6

function newFunction (name, age, country) {
    var name = name || 'Megan';
    var age = age || 20;
    var country = country || 'Dominican Republic';

    console.log(name, age, country);
}

// Default values after ECMAScript 6

function newFunction2 (name = 'Megan', age = 20, country = 'Dominican Republic') {
    console.log(name, age, country);
}

newFunction2() // Output default values
newFunction2('Megan E.', 20, 'DOM');


// Templates literals before ECMAScript 6

let hello = 'Hello';
let world = 'World!';

let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// Template literals after ECMAScript 6

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// **********************************************

// Multilines before ECMAScript 6

let lorem = 'lorem  ipsum \n' + 'continues' ;

// Multilines after ECMASript 6

let lorem2 = `Other epic phrase
now is other epic phrase`;

console.log(lorem);
console.log(lorem2);

// Destructuring before ECMScript 6

let person = {
    'name': 'Megan',
    'age': 20,
    'country': 'DOM',
}

console.log(person.name, person.age, person.country);

// Destructuring after ECMAScript 6

let { name, age, country } = person;

console.log(name, age, country);

// Spread Operator before ECMAScript 6

let team1 = ['Megan', 'Zeus', 'Darcy'];
let team2 = ['Atenas', 'Wandy', 'Querty'];

let education1 = ['Gravity', 'Megan', 'Zeus', 'Darcy', 'Atenas', 'Wandy', 'Querty'];

// Spread Operator after ECMAScript 6
let education2 = ['Gravity', ...team1, ...team2];

console.log( { education2 } );

// Using let with ECMAScript 6

{
    var globalVar = 'Global var';
}

{
    let globalLet = 'Global let';
    console.log(globalLet);
}

console.log(globalVar);


// Using const with ECMAScript 6

const a = 'b';
a = 'a'; // Output: Error

// *************************************

// Objects parameters before ECMAScript 6

let name = 'Megan';
let age = 20;

obj = { name: name, age: age };

// Objects parameters after ECMAScript 6

obj2 = { name, age };

console.log(obj2);

// function and arrow functions before ECMAScript 6

const names = [ { name: 'Megan', age: 20 }, { name: 'Wandy', age: 21 } ];

let listOfNames = names.map( function (item) {
    console.log(item.name);
} );

// function and arrow functions after ECMAScript 6

let listOfNames2 = names.map( item => console.log(item.name) );

const listOfNames3 = (name, age, country) => {
    // code here
};

const listOfNames4 = name => {
    // code here
}

number = 5;
const square = num => num * num;

console.log(square(number));


// Promises in ECMAScript 6

const helloPromise = () => {
    return new Promise ( (resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Opps!');
        }
    });
}

helloPromise()
    .then( response => console.log(response) )
    .catch( error => console.log(error) );

//*************************************************

// Introduce class to ECMAScript 6

class calculator {
    constructor () {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(5, 5));

// Introduce import to ECMAScript 6

// import { hello } from './module'; this is ES6
const hello = require('./module'); // It's 'cause we're using nodejs

console.log(hello('Mars!!!'));

// Introduce generator in ECMAScript 6

function* helloWorld () {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);