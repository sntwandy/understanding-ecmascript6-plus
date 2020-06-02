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