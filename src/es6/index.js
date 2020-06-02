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